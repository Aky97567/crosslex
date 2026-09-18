import {
  readExerciseLog,
  readWordsSeen,
  readStreak,
  readActiveLevel,
  readLearningRate,
  readSessionFilter,
  readKnownWords,
  readSessionTimeout,
  readFlipAnimation,
  readHardcoreMode,
  readMobileFullView,
  readKnownWordConfirmed,
  writeActiveLevel,
  writeLearningRate,
  writeSessionFilter,
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
      sessionFilter:     readSessionFilter(),
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
  writeSessionFilter   = writeSessionFilter;
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
