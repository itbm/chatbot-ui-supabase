"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supaDeleteSystemPrompt = exports.supaUpdateSystemPrompt = exports.supaCreateSystemPrompt = void 0;
const supaCreateSystemPrompt = async (supabase, newPrompt) => {
    const supaPrompt = {
        id: newPrompt.id,
        content: newPrompt.content,
        name: newPrompt.name,
    };
    const { error } = await supabase.from('system_prompts').insert(supaPrompt);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaCreateSystemPrompt = supaCreateSystemPrompt;
const supaUpdateSystemPrompt = async (supabase, updatedPrompt) => {
    const { error } = await supabase
        .from('system_prompts')
        .update({
        content: updatedPrompt.content,
        name: updatedPrompt.name,
    })
        .eq('id', updatedPrompt.id);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaUpdateSystemPrompt = supaUpdateSystemPrompt;
const supaDeleteSystemPrompt = async (supabase, promptId) => {
    const { error } = await supabase
        .from('system_prompts')
        .delete()
        .eq('id', promptId);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaDeleteSystemPrompt = supaDeleteSystemPrompt;
