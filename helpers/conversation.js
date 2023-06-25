"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supaDeleteConversation = exports.supaUpdateConversation = exports.supaCreateConversation = void 0;
const supaCreateConversation = async (supabase, newConversation) => {
    const supaConversation = {
        id: newConversation.id,
        name: newConversation.name,
        model_id: newConversation.model.id,
        prompt: newConversation.prompt,
        temperature: newConversation.temperature,
        folder_id: newConversation.folderId,
        timestamp: newConversation.timestamp,
    };
    const { error } = await supabase
        .from('conversations')
        .insert(supaConversation);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaCreateConversation = supaCreateConversation;
const supaUpdateConversation = async (supabase, updatedConversation) => {
    const { error } = await supabase
        .from('conversations')
        .upsert({
        id: updatedConversation.id,
        name: updatedConversation.name,
        model_id: updatedConversation.model.id,
        prompt: updatedConversation.prompt,
        temperature: updatedConversation.temperature,
        folder_id: updatedConversation.folderId,
        timestamp: updatedConversation.timestamp,
    })
        .eq('id', updatedConversation.id);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaUpdateConversation = supaUpdateConversation;
const supaDeleteConversation = async (supabase, conversationId) => {
    const { error } = await supabase
        .from('conversations')
        .delete()
        .match({ id: conversationId });
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaDeleteConversation = supaDeleteConversation;
