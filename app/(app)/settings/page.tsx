"use client";

import { Save } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-extrabold text-white mb-2">Platform Settings</h1>
                <p className="text-neutral-400">Manage your notification preferences and automation rules.</p>
            </div>

            <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-lg">
                <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">Notifications</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-white font-medium">Email Alerts</div>
                            <div className="text-sm text-neutral-400">Receive daily summaries of new content.</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-[#333] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d0f200]"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-white font-medium">Real-time Push</div>
                            <div className="text-sm text-neutral-400">Get notified immediately when a 'High Priority' asset is ready.</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-[#333] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d0f200]"></div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-lg">
                <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">Automation Rules</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-white font-medium">Auto-Download</div>
                            <div className="text-sm text-neutral-400">Automatically download assets matching your saved searches.</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-[#333] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d0f200]"></div>
                        </label>
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <button className="bg-[#d0f200] hover:bg-[#badd00] text-black px-4 py-2 rounded-md font-bold transition-colors flex items-center">
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
