"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientDatabase = void 0;
const constants_1 = require("./utils/constants");
const conversation_1 = require("./helpers/conversation");
const conversations_1 = require("./helpers/conversations");
const folder_1 = require("./helpers/folder");
const folders_1 = require("./helpers/folders");
const message_1 = require("./helpers/message");
const messages_1 = require("./helpers/messages");
const prompt_1 = require("./helpers/prompt");
const prompts_1 = require("./helpers/prompts");
const systemPrompt_1 = require("./helpers/systemPrompt");
const systemPrompts_1 = require("./helpers/systemPrompts");
const supabase_js_1 = require("@supabase/supabase-js");
class ClientDatabase {
    constructor() {
        this.name = 'supabase';
        this.supabase = null;
    }
    async connect({ customAccessToken, }) {
        this.supabase = (0, supabase_js_1.createClient)(constants_1.NEXT_PUBLIC_SUPABASE_URL, constants_1.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
            global: {
                headers: {
                    Authorization: `Bearer ${customAccessToken}`,
                },
            },
        });
    }
    async disconnect() { }
    // -----------------------------------Conversation-----------------------------------
    async createConversation(user, newConversation) {
        return await (0, conversation_1.supaCreateConversation)(this.supabase, newConversation);
    }
    async updateConversation(user, updatedConversation) {
        return await (0, conversation_1.supaUpdateConversation)(this.supabase, updatedConversation);
    }
    async deleteConversation(user, conversationId) {
        return await (0, conversation_1.supaDeleteConversation)(this.supabase, conversationId);
    }
    // -----------------------------------Conversations-----------------------------------
    async getConversations(user) {
        return await (0, conversations_1.supaGetConversations)(this.supabase);
    }
    async updateConversations(user, updatedConversations) {
        return await (0, conversations_1.supaUpdateConversations)(this.supabase, updatedConversations);
    }
    async deleteConversations(user) {
        return await (0, conversations_1.supaDeleteConversations)(this.supabase);
    }
    // -----------------------------------Folder-----------------------------------
    async createFolder(user, newFolder) {
        return await (0, folder_1.supaCreateFolder)(this.supabase, newFolder);
    }
    async updateFolder(user, updatedFolder) {
        return await (0, folder_1.supaUpdateFolder)(this.supabase, updatedFolder);
    }
    async deleteFolder(user, folderId) {
        return await (0, folder_1.supaDeleteFolder)(this.supabase, folderId);
    }
    // -----------------------------------Folders-----------------------------------
    async getFolders(user) {
        return await (0, folders_1.supaGetFolders)(this.supabase);
    }
    async updateFolders(user, updatedFolders) {
        return await (0, folders_1.supaUpdateFolders)(this.supabase, updatedFolders);
    }
    async deleteFolders(user, folderIds) {
        return await (0, folders_1.supaDeleteFolders)(this.supabase, folderIds);
    }
    // -----------------------------------Message-----------------------------------
    async createMessage(user, conversationId, newMessage) {
        return await (0, message_1.supaCreateMessage)(this.supabase, conversationId, newMessage);
    }
    async updateMessage(user, conversationId, updatedMessage) {
        return await (0, message_1.supaUpdateMessage)(this.supabase, conversationId, updatedMessage);
    }
    async deleteMessage(user, conversationId, messageId) {
        return await (0, message_1.supaDeleteMessage)(this.supabase, conversationId, messageId);
    }
    // -----------------------------------Messages-----------------------------------
    async getMessages(user, conversationId) {
        return await (0, messages_1.supaGetMessages)(this.supabase, conversationId);
    }
    async createMessages(user, conversationId, newMessages) {
        return await (0, messages_1.supaCreateMessages)(this.supabase, conversationId, newMessages);
    }
    async updateMessages(user, conversationId, updatedMessages) {
        return await (0, messages_1.supaUpdateMessages)(this.supabase, conversationId, updatedMessages);
    }
    async deleteMessages(user, conversationId, messageIds) {
        return await (0, messages_1.supaDeleteMessages)(this.supabase, conversationId, messageIds);
    }
    // -----------------------------------Prompt-----------------------------------
    async createPrompt(user, newPrompt) {
        return await (0, prompt_1.supaCreatePrompt)(this.supabase, newPrompt);
    }
    async updatePrompt(user, updatedPrompt) {
        return await (0, prompt_1.supaUpdatePrompt)(this.supabase, updatedPrompt);
    }
    async deletePrompt(user, promptId) {
        return await (0, prompt_1.supaDeletePrompt)(this.supabase, promptId);
    }
    // -----------------------------------Prompts-----------------------------------
    async getPrompts(user) {
        return await (0, prompts_1.supaGetPrompts)(this.supabase);
    }
    async updatePrompts(user, updatedPrompts) {
        return await (0, prompts_1.supaUpdatePrompts)(this.supabase, updatedPrompts);
    }
    async deletePrompts(user, promptIds) {
        return await (0, prompts_1.supaDeletePrompts)(this.supabase, promptIds);
    }
    // -----------------------------------SystemPrompt-----------------------------------
    async createSystemPrompt(user, newSystemPrompt) {
        return await (0, systemPrompt_1.supaCreateSystemPrompt)(this.supabase, newSystemPrompt);
    }
    async updateSystemPrompt(user, updatedSystemPrompt) {
        return await (0, systemPrompt_1.supaUpdateSystemPrompt)(this.supabase, updatedSystemPrompt);
    }
    async deleteSystemPrompt(user, systemPromptId) {
        return await (0, systemPrompt_1.supaDeleteSystemPrompt)(this.supabase, systemPromptId);
    }
    // -----------------------------------SystemPrompts-----------------------------------
    async getSystemPrompts(user) {
        return await (0, systemPrompts_1.supaGetSystemPrompts)(this.supabase);
    }
    async updateSystemPrompts(user, updatedSystemPrompts) {
        return await (0, systemPrompts_1.supaUpdateSystemPrompts)(this.supabase, updatedSystemPrompts);
    }
    async deleteSystemPrompts(user, systemPromptIds) {
        return await (0, systemPrompts_1.supaDeleteSystemPrompts)(this.supabase, systemPromptIds);
    }
}
exports.ClientDatabase = ClientDatabase;
