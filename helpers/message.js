"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supaDeleteMessage = exports.supaUpdateMessage = exports.supaCreateMessage = void 0;
const supaCreateMessage = async (supabase, conversationId, newMessage) => {
    const supaMessage = {
        id: newMessage.id,
        content: newMessage.content,
        role: newMessage.role,
        conversation_id: conversationId,
        timestamp: newMessage.timestamp,
    };
    const { error } = await supabase.from('messages').insert(supaMessage);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaCreateMessage = supaCreateMessage;
const supaUpdateMessage = async (supabase, conversationId, updatedMessage) => {
    const { error } = await supabase
        .from('messages')
        .update({
        content: updatedMessage.content,
        role: updatedMessage.role,
    })
        .eq('id', updatedMessage.id)
        .eq('conversation_id', conversationId);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaUpdateMessage = supaUpdateMessage;
const supaDeleteMessage = async (supabase, conversationId, messageId) => {
    const { error } = await supabase
        .from('messages')
        .delete()
        .eq('id', messageId)
        .eq('conversation_id', conversationId);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaDeleteMessage = supaDeleteMessage;
