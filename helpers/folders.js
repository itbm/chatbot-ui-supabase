"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supaDeleteFolders = exports.supaUpdateFolders = exports.supaGetFolders = void 0;
const supaGetFolders = async (supabase) => {
    const { data, error } = await supabase.from('folders').select('*');
    if (error) {
        return [];
    }
    const folders = data.map((supaFolder) => {
        return {
            id: supaFolder.id,
            name: supaFolder.name,
            type: supaFolder.folder_type,
        };
    });
    return folders;
};
exports.supaGetFolders = supaGetFolders;
const supaUpdateFolders = async (supabase, folders) => {
    const updates = folders.map((folder) => supabase
        .from('folders')
        .update({
        name: folder.name,
        folder_type: folder.type,
    })
        .eq('id', folder.id));
    const results = await Promise.all(updates);
    const hasErrors = results.some((result) => result.error);
    return !hasErrors;
};
exports.supaUpdateFolders = supaUpdateFolders;
const supaDeleteFolders = async (supabase, folderIds) => {
    const deletes = folderIds.map((folderId) => supabase.from('folders').delete().eq('id', folderId));
    const results = await Promise.all(deletes);
    const hasErrors = results.some((result) => result.error);
    return !hasErrors;
};
exports.supaDeleteFolders = supaDeleteFolders;
