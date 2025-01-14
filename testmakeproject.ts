import { join } from "@std/path";
import { DraftMaterialFactory } from "./src/model/draft_materials/DraftMaterialFactory.ts";
import { AnimationMaterial } from "./src/model/materials/AnimationMaterial.ts";
import { AudioFadeMaterial } from "./src/model/materials/AudioFadeMaterial.ts";
import { AudioMaterial } from "./src/model/materials/AudioMaterial.ts";
import { BeatMaterial } from "./src/model/materials/BeatMaterial.ts";
import { CanvasMaterial } from "./src/model/materials/CanvasMaterial.ts";
import { PlaceholderInfoMaterial } from "./src/model/materials/PlaceholderInfoMaterial.ts";
import { SoundChannelMappingMaterial } from "./src/model/materials/SoundChannelMappingMaterial.ts";
import { SpeedMaterial } from "./src/model/materials/SpeedMaterial.ts";
import { TextMaterial } from "./src/model/materials/TextMaterial.ts";
import { VideoMaterial } from "./src/model/materials/VideoMaterial.ts";
import { VocalSeparationMaterial } from "./src/model/materials/VocalSeparationMaterial.ts";
import { Content } from "./src/model/project/Content.ts";
import { MetaInfo } from "./src/model/project/MetaInfo.ts";
import { Segment } from "./src/model/segments/Segments.ts";
import { Track, TrackAttribute } from "./src/model/tracks/Track.ts";
import { EffectMaterial } from "./src/model/materials/EffectMaterial.ts";


const projectFolder = join(
  "path to capcut drafts",
  "CapCut Drafts",
  `testmakeproject`
);


const contentFilePath = join(projectFolder, "draft_content.json");

const metaInfoFilePath = join(projectFolder, "draft_meta_info.json");

const content = new Content();
const meta = new MetaInfo();

const audioMaterials: AudioMaterial[] = [];
const audioFadeMaterials: AudioFadeMaterial[] = [];
const speedMaterials: SpeedMaterial[] = [];
const placeHolderMaterials: PlaceholderInfoMaterial[] = [];
const vocalSeparationMaterials: VocalSeparationMaterial[] = [];
const soundChannelMappingMaterials: SoundChannelMappingMaterial[] = [];
const canvasMaterials: CanvasMaterial[] = [];
const materialAnimationMaterials: AnimationMaterial[] = [];
const videoMaterials: VideoMaterial[] = [];
const beatMaterials: BeatMaterial[] = [];
const textMaterials: TextMaterial[] = [];

const FDN = await DraftMaterialFactory.get("FDN");
const blackScreen = await DraftMaterialFactory.get("blackScreen");

meta.setDraftMaterials([
  blackScreen,
  FDN,
]);

const lofiWarmthMaterial = AudioMaterial.get("lofiWarmth");
const lofiBeatMaterial = new BeatMaterial();
const speedLofiWarmth = new SpeedMaterial();

const lofiAudioFade = new AudioFadeMaterial({ fade_out_duration: 1500000 });

const lofiBeatSegment = new Segment({
  // speed: 1.1,
});
lofiBeatSegment.setMaterial(lofiWarmthMaterial);
lofiBeatSegment.setExtraMaterials({
  beats: lofiBeatMaterial,
  speeds: speedLofiWarmth,
  audio_fades: lofiAudioFade,
});

lofiBeatSegment.setTargetTimerange({
  start: 0,
  duration: 10000000,
});

lofiBeatSegment.setSourceTimerange({
  start: 0,
  duration: 10000000,
});

beatMaterials.push(lofiBeatMaterial);
audioFadeMaterials.push(lofiAudioFade);
audioMaterials.push(lofiWarmthMaterial);

const lofiBeatTrack = new Track({ type: "audio" });
lofiBeatTrack.addSegment(lofiBeatSegment);

content.track_instances.upsert(lofiBeatTrack);


const blackScreenMaterial = new VideoMaterial();
blackScreenMaterial.setDraftMaterial(blackScreen);

const blackScreenSpeed = new SpeedMaterial();
const blackScreenPlaceholderInfo = new PlaceholderInfoMaterial();
const blackScreenVocalSeparation = new VocalSeparationMaterial();
const blackScreenSoundChannel = new SoundChannelMappingMaterial();
const blackScreenCanvas = new CanvasMaterial();
const blackScreenMaterialAnimations = new AnimationMaterial();

const blackScreenSegment = new Segment();
blackScreenSegment.setMaterial(blackScreenMaterial);
blackScreenSegment.setExtraMaterials({
  speeds: blackScreenSpeed,
  placeholder_infos: blackScreenPlaceholderInfo,
  vocal_separations: blackScreenVocalSeparation,
  sound_channel_mappings: blackScreenSoundChannel,
  canvases: blackScreenCanvas,
  material_animations: blackScreenMaterialAnimations,
});

const mainVideoTrack = new Track({ flag: 0, attribute: TrackAttribute.MUTE });
content.track_instances.upsert(mainVideoTrack);

mainVideoTrack.addSegment(blackScreenSegment);
videoMaterials.push(blackScreenMaterial);
speedMaterials.push(blackScreenSpeed);
placeHolderMaterials.push(blackScreenPlaceholderInfo);
vocalSeparationMaterials.push(blackScreenVocalSeparation);
soundChannelMappingMaterials.push(blackScreenSoundChannel);
canvasMaterials.push(blackScreenCanvas);
materialAnimationMaterials.push(blackScreenMaterialAnimations);


const set = new VideoMaterial();
set.setDraftMaterial(FDN);

const setSegmentIntro = new Segment();
const speedSet = new SpeedMaterial();
const placeholderInfoSet = new PlaceholderInfoMaterial();
const vocalSeparationSet = new VocalSeparationMaterial();
const soundChannelSet = new SoundChannelMappingMaterial();
const canvasSet = new CanvasMaterial();
const animationSet = new AnimationMaterial();

setSegmentIntro.setMaterial(set);
setSegmentIntro.setExtraMaterials({
  speeds: speedSet,
  placeholder_infos: placeholderInfoSet,
  vocal_separations: vocalSeparationSet,
  sound_channel_mappings: soundChannelSet,
  canvases: canvasSet,
  material_animations: animationSet,
});

const setTrack = new Track();
setTrack.addSegment(setSegmentIntro);
animationSet.setSegment(setSegmentIntro);

// addSegment on an empty track set the start at 0...
// addSegment in general set the segment start after the last segment duration
setSegmentIntro.setTargetTimerange({ start: 0, duration: 3000000 });
setSegmentIntro.mergeClip({
  scale: { x: 0.8, y: 0.8 },
  transform: { x: 0.0, y: -0.4 },
});

animationSet.addFadeOut();

content.track_instances.upsert(setTrack);

videoMaterials.push(set);

speedMaterials.push(speedSet);
placeHolderMaterials.push(placeholderInfoSet);
vocalSeparationMaterials.push(vocalSeparationSet);
soundChannelMappingMaterials.push(soundChannelSet);
canvasMaterials.push(canvasSet);
materialAnimationMaterials.push(animationSet);

const productTypeMaterial = new TextMaterial();
productTypeMaterial.setText("Hello hello");
productTypeMaterial.setFont("ZYFervent");
productTypeMaterial.setFontSize(15);

const productTypeSegment = new Segment();
const productTypeAnimation = new AnimationMaterial();
const productTypeEffect = EffectMaterial.get("FOUNDATION");
productTypeAnimation.setSegment(productTypeSegment);

productTypeSegment.setMaterial(productTypeMaterial);
productTypeSegment.setExtraMaterials({
  effects: productTypeEffect,
  material_animations: productTypeAnimation,
});

const textTrack2 = new Track({ type: "text" });

textTrack2.addSegment(productTypeSegment);

productTypeSegment.setTargetTimerange({ start: 1500000, duration: 1500000 });
productTypeSegment.mergeClip({
  transform: { x: 0.0, y: 0.46875 },
});

content.applyEffect(productTypeEffect, productTypeSegment);
productTypeAnimation.addFadeIn();
productTypeAnimation.addFadeOut();
textMaterials.push(productTypeMaterial);
materialAnimationMaterials.push(productTypeAnimation);

content.track_instances.upsert(textTrack2);



content.mergeMaterials({
  audios: audioMaterials,
  audio_fades: audioFadeMaterials,
  beats: beatMaterials,
  canvases: canvasMaterials,
  material_animations: materialAnimationMaterials,
  placeholder_infos: placeHolderMaterials,
  sound_channel_mappings: soundChannelMappingMaterials,
  speeds: speedMaterials,
  texts: textMaterials,
  videos: videoMaterials,
  vocal_separations: vocalSeparationMaterials,
});

const serializedContent = JSON.stringify(content);
const serializedMetaInfo = JSON.stringify(meta);

await Deno.mkdir(projectFolder, {
  recursive: true,
});

await Deno.writeTextFile(contentFilePath, serializedContent, {
  create: true,
});
await Deno.writeTextFile(metaInfoFilePath, serializedMetaInfo, {
  create: true,
});