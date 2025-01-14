import { join } from "@std/path";

const capcutInstallationFolder = join('your', 'path', 'to', 'capcut', 'install', 'CapCut', '2.2.0.491');
const systemFont = join(capcutInstallationFolder, 'Resources', 'Font', 'SystemFont', "en.ttf")
const capcutCacheFolder = join("your", 'path', 'to', 'CapCut', 'User Data', 'Cache');
const capcutCacheEffectFolder = join(capcutCacheFolder, "effect");
const capcutCacheMusicFolder = join(capcutCacheFolder, "music");

export const PATHS = {
    CACHE: capcutCacheEffectFolder,
    CACHE_MUSIC: capcutCacheMusicFolder,
    CACHE_EFFECT: capcutCacheEffectFolder,
    SYSTEM_FONT: systemFont,
    INSTALLATION_FOLDER: capcutInstallationFolder
}