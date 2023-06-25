"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supaDeleteSystemPrompts = exports.supaUpdateSystemPrompts = exports.supaGetSystemPrompts = void 0;
const supaGetSystemPrompts = async (supabase) => {
    const { data: supaSystemPrompts, error } = await supabase
        .from('system_prompts')
        .select('*');
    if (error) {
        return [];
    }
    const systemPrompts = supaSystemPrompts.map((p) => ({
        id: p.id,
        content: p.content,
        name: p.name,
    }));
    return systemPrompts;
};
exports.supaGetSystemPrompts = supaGetSystemPrompts;
const supaUpdateSystemPrompts = async (supabase, updatedSystemPrompts) => {
    const updates = updatedSystemPrompts.map((p) => supabase
        .from('system_prompts')
        .update({
        content: p.content,
        name: p.name,
    })
        .eq('id', p.id));
    const results = await Promise.all(updates);
    const hasErrors = results.some((result) => result.error);
    return !hasErrors;
};
exports.supaUpdateSystemPrompts = supaUpdateSystemPrompts;
const supaDeleteSystemPrompts = async (supabase, promptIds) => {
    const deletes = promptIds.map((id) => supabase.from('system_prompts').delete().eq('id', id));
    const results = await Promise.all(deletes);
    const hasErrors = results.some((result) => result.error);
    return !hasErrors;
};
exports.supaDeleteSystemPrompts = supaDeleteSystemPrompts;
