import { SupaDatabase } from '../types/supabase';
import { FolderInterface } from '@chatbot-ui/core/types/folder';
import { SupabaseClient } from '@supabase/supabase-js';
export declare const supaCreateFolder: (supabase: SupabaseClient<SupaDatabase>, newFolder: FolderInterface) => Promise<boolean>;
export declare const supaUpdateFolder: (supabase: SupabaseClient<SupaDatabase>, folder: FolderInterface) => Promise<boolean>;
export declare const supaDeleteFolder: (supabase: SupabaseClient<SupaDatabase>, folderId: string) => Promise<boolean>;
