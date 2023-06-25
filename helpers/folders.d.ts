import { SupaDatabase } from '../types/supabase';
import { FolderInterface } from '@chatbot-ui/core/types/folder';
import { SupabaseClient } from '@supabase/supabase-js';
export declare const supaGetFolders: (supabase: SupabaseClient<SupaDatabase>) => Promise<FolderInterface[]>;
export declare const supaUpdateFolders: (supabase: SupabaseClient<SupaDatabase>, folders: FolderInterface[]) => Promise<boolean>;
export declare const supaDeleteFolders: (supabase: SupabaseClient<SupaDatabase>, folderIds: string[]) => Promise<boolean>;
