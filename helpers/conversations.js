"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supaDeleteConversations = exports.supaUpdateConversations = exports.supaGetConversations = void 0;
const openai_1 = require("@chatbot-ui/core/types/openai");
const supaGetConversations = async (supabase) => {
    const { data: supaConversations, error } = await supabase
        .from('conversations')
        .select('*')
        .order('timestamp', { ascending: true });
    if (error) {
        return [];
    }
    else {
        const conversations = [];
        for (const supaConversation of supaConversations) {
            const model_id = supaConversation.model_id;
            const model = openai_1.OpenAIModels[model_id];
            const { data: supaMessages } = await supabase
                .from('messages')
                .select('*')
                .eq('conversation_id', supaConversation.id)
                .order('timestamp', { ascending: true });
            let messages = [];
            if (supaMessages) {
                messages = supaMessages.map((supaMessage) => {
                    return {
                        id: supaMessage.id,
                        content: supaMessage.content,
                        role: supaMessage.role,
                        timestamp: supaMessage.timestamp,
                    };
                });
            }
            const conversation = {
                id: supaConversation.id,
                name: supaConversation.name,
                model: model,
                prompt: supaConversation.prompt,
                temperature: supaConversation.temperature,
                folderId: supaConversation.folder_id,
                messages: messages,
                timestamp: supaConversation.timestamp,
            };
            conversations.push(conversation);
        }
        return conversations;
    }
};
exports.supaGetConversations = supaGetConversations;
const supaUpdateConversations = async (supabase, updatedConversations) => {
    for (const conversation of updatedConversations) {
        const { error } = await supabase
            .from('conversations')
            .upsert({
            id: conversation.id,
            name: conversation.name,
            model_id: conversation.model.id,
            prompt: conversation.prompt,
            temperature: conversation.temperature,
            folder_id: conversation.folderId,
            timestamp: conversation.timestamp,
        })
            .eq('id', conversation.id);
        if (error) {
            console.error(error);
            return false;
        }
    }
    return true;
};
exports.supaUpdateConversations = supaUpdateConversations;
const supaDeleteConversations = async (supabase) => {
    const { error } = await supabase.from('conversations').delete();
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaDeleteConversations = supaDeleteConversations;
