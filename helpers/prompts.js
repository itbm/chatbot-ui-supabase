"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supaDeletePrompts = exports.supaUpdatePrompts = exports.supaGetPrompts = void 0;
const openai_1 = require("@chatbot-ui/core/types/openai");
const supaGetPrompts = async (supabase) => {
    const { data: supaPrompts, error } = await supabase
        .from('prompts')
        .select('*');
    if (error) {
        return [];
    }
    const prompts = supaPrompts.map((supaPrompt) => {
        const model_id = supaPrompt.model_id;
        const model = openai_1.OpenAIModels[model_id];
        const prompt = {
            id: supaPrompt.id,
            content: supaPrompt.content,
            description: supaPrompt.description,
            folderId: supaPrompt.folder_id,
            model: model,
            name: supaPrompt.name,
        };
        return prompt;
    });
    return prompts;
};
exports.supaGetPrompts = supaGetPrompts;
const supaUpdatePrompts = async (supabase, updatedPrompts) => {
    const updates = updatedPrompts.map((prompt) => supabase
        .from('prompts')
        .update({
        content: prompt.content,
        description: prompt.description,
        folder_id: prompt.folderId,
        model_id: prompt.model.id,
        name: prompt.name,
    })
        .eq('id', prompt.id));
    const results = await Promise.all(updates);
    const hasErrors = results.some((result) => result.error);
    return !hasErrors;
};
exports.supaUpdatePrompts = supaUpdatePrompts;
const supaDeletePrompts = async (supabase, promptIds) => {
    const deletes = promptIds.map((promptId) => supabase.from('prompts').delete().eq('id', promptId));
    const results = await Promise.all(deletes);
    const hasErrors = results.some((result) => result.error);
    return !hasErrors;
};
exports.supaDeletePrompts = supaDeletePrompts;
