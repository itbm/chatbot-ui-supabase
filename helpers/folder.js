"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supaDeleteFolder = exports.supaUpdateFolder = exports.supaCreateFolder = void 0;
const supaCreateFolder = async (supabase, newFolder) => {
    const supaFolder = {
        id: newFolder.id,
        name: newFolder.name,
        folder_type: newFolder.type,
    };
    const { error } = await supabase.from('folders').insert([supaFolder]);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaCreateFolder = supaCreateFolder;
const supaUpdateFolder = async (supabase, folder) => {
    const { error } = await supabase
        .from('folders')
        .update({
        name: folder.name,
        folder_type: folder.type,
    })
        .eq('id', folder.id);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaUpdateFolder = supaUpdateFolder;
const supaDeleteFolder = async (supabase, folderId) => {
    const { error } = await supabase.from('folders').delete().eq('id', folderId);
    if (error) {
        console.error(error);
        return false;
    }
    return true;
};
exports.supaDeleteFolder = supaDeleteFolder;
