"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supaDeletePrompt = exports.supaUpdatePrompt = exports.supaCreatePrompt = void 0;
const supaCreatePrompt = async (supabase, newPrompt) => {
    const supaPrompt = {
        id: newPrompt.id,
        content: newPrompt.content,
        description: newPrompt.description,
        folder_id: newPrompt.folderId,
        model_id: newPrompt.model.id,
        name: newPrompt.name,
    };
    const { error } = await supabase.from('prompts').insert(supaPrompt);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaCreatePrompt = supaCreatePrompt;
const supaUpdatePrompt = async (supabase, updatedPrompt) => {
    const { error } = await supabase
        .from('prompts')
        .update({
        content: updatedPrompt.content,
        description: updatedPrompt.description,
        folder_id: updatedPrompt.folderId,
        model_id: updatedPrompt.model.id,
        name: updatedPrompt.name,
    })
        .eq('id', updatedPrompt.id);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaUpdatePrompt = supaUpdatePrompt;
const supaDeletePrompt = async (supabase, promptId) => {
    const { error } = await supabase.from('prompts').delete().eq('id', promptId);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaDeletePrompt = supaDeletePrompt;
