import {
  readExerciseLog,
  readWordsSeen,
  readStreak,
  readActiveLevel,
  readLearningRate,
  readActiveTheme,
  readVerbsOnly,
  readKnownWords,
  readSessionTimeout,
  readFlipAnimation,
  readHardcoreMode,
  readMobileFullView,
  readKnownWordConfirmed,
  writeActiveLevel,
  writeLearningRate,
  writeActiveTheme,
  writeVerbsOnly,
  writeSessionTimeout,
  writeFlipAnimation,
  writeHardcoreMode,
  writeMobileFullView,
  appendExerciseEvent,
  writeWordsSeen,
  addKnownWord,
  removeKnownWord,
  writeKnownWordConfirmed,
  recordSessionForStreak,
} from '../Session/sessionStorage';
import type { StoragePort, StorageSnapshot } from './storagePort';

export class LocalStorageAdapter implements StoragePort {
  read(): StorageSnapshot {
    return {
      exerciseLog:       readExerciseLog(),
      wordsSeen:         readWordsSeen(),
      streak:            readStreak(),
      activeLevel:       readActiveLevel(),
      learningRate:      readLearningRate(),
      activeTheme:       readActiveTheme(),
      verbsOnly:         readVerbsOnly(),
      knownWords:        readKnownWords(),
      sessionTimeout:    readSessionTimeout(),
      flipAnimation:     readFlipAnimation(),
      hardcoreMode:      readHardcoreMode(),
      mobileFullView:    readMobileFullView(),
      knownWordConfirmed: readKnownWordConfirmed(),
    };
  }

  writeActiveLevel     = writeActiveLevel;
  writeLearningRate    = writeLearningRate;
  writeActiveTheme     = writeActiveTheme;
  writeVerbsOnly       = writeVerbsOnly;
  writeSessionTimeout  = writeSessionTimeout;
  writeFlipAnimation   = writeFlipAnimation;
  writeHardcoreMode    = writeHardcoreMode;
  writeMobileFullView  = writeMobileFullView;
  appendExerciseEvent  = appendExerciseEvent;
  writeWordsSeen       = writeWordsSeen;
  addKnownWord         = addKnownWord;
  removeKnownWord      = removeKnownWord;
  writeKnownWordConfirmed = writeKnownWordConfirmed;
  recordSessionForStreak  = recordSessionForStreak;
}
