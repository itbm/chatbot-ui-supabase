"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supaDeleteMessages = exports.supaUpdateMessages = exports.supaCreateMessages = exports.supaGetMessages = void 0;
const supaGetMessages = async (supabase, conversationId) => {
    const { data: supaMessages, error } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId);
    if (error) {
        return [];
    }
    const messages = supaMessages.map((supaMessage) => {
        const message = {
            id: supaMessage.id,
            content: supaMessage.content,
            role: supaMessage.role,
            timestamp: supaMessage.timestamp,
        };
        return message;
    });
    return messages;
};
exports.supaGetMessages = supaGetMessages;
const supaCreateMessages = async (supabase, conversationId, newMessages) => {
    const supaMessages = newMessages.map((message) => ({
        id: message.id,
        content: message.content,
        role: message.role,
        conversation_id: conversationId,
        timestamp: message.timestamp,
    }));
    const { error } = await supabase.from('messages').insert(supaMessages);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaCreateMessages = supaCreateMessages;
const supaUpdateMessages = async (supabase, conversationId, updatedMessages) => {
    const updates = updatedMessages.map((message) => supabase
        .from('messages')
        .upsert({
        content: message.content,
        role: message.role,
        conversation_id: conversationId,
        timestamp: message.timestamp,
    })
        .eq('id', message.id)
        .eq('conversation_id', conversationId));
    const results = await Promise.all(updates);
    const hasErrors = results.some((result) => result.error);
    return !hasErrors;
};
exports.supaUpdateMessages = supaUpdateMessages;
const supaDeleteMessages = async (supabase, conversationId, messageIds) => {
    const deletes = messageIds.map((messageId) => supabase
        .from('messages')
        .delete()
        .eq('id', messageId)
        .eq('conversation_id', conversationId));
    const results = await Promise.all(deletes);
    const hasErrors = results.some((result) => result.error);
    return !hasErrors;
};
exports.supaDeleteMessages = supaDeleteMessages;
