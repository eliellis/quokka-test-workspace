import { libraryC } from '@test-quokka-workspace/library-c';

export function libraryB(): string {
  return ['library-b', libraryC()].join(' ');
}
