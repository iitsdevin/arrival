// settings.js — app settings persistence

const SETTINGS_KEY = 'coming-home-settings';

export const PALETTES = [
  { id: 'light', label: 'Light', description: 'Warm off-white, sage accents' },
  { id: 'dawn', label: 'Dawn', description: 'Soft rose and amber' },
  { id: 'bushland', label: 'Bushland', description: 'Deep greens, dark mode' },
];

export const DEFAULT_SETTINGS = {
  palette: 'light',
  activeTeachers: null, // null = all teachers active
  spiralVows: { v1: false, v2: false, v3: false, v4: false },
};

export function getSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // storage unavailable
  }
}

export function updateSetting(key, value) {
  const current = getSettings();
  saveSettings({ ...current, [key]: value });
}
