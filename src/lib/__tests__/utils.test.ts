import { cn } from '@/lib/utils';

describe('cn happy path', () => {
  // Call 'cn' with one or more valid class names as arguments.
  it('should return the merged class names when valid class names are provided', () => {
    const result = cn('class1', 'class2');
    expect(result).toBe('class1 class2');
  });

  // Call 'cn' with no arguments.
  it('should return an empty string when no arguments are provided', () => {
    const result = cn();
    expect(result).toBe('');
  });
});

describe('cn edge cases', () => {
  // Call 'cn' with undefined or null as arguments.
  it('should return an empty string when undefined or null is provided as arguments', () => {
    const result1 = cn(undefined);
    const result2 = cn(null);
    expect(result1).toBe('');
    expect(result2).toBe('');
  });

  // Call 'cn' with an empty string as an argument.
  it('should return an empty string when an empty string is provided as an argument', () => {
    const result = cn('');
    expect(result).toBe('');
  });

  // Call 'cn' with an object or array as an argument.
  it('should return an empty string when an object or array is provided as an argument', () => {
    const result1 = cn({ 'p-2': true });
    const result2 = cn(['px-2', 'py-2']);
    expect(result1).toBe('p-2');
    expect(result2).toBe('px-2 py-2');
  });

  // Call 'cn' with a mix of valid and invalid class names as arguments.
  it('should return the merged class names when a mix of valid and invalid class names are provided', () => {
    const result = cn('class1', undefined, null, '', 'class2');
    expect(result).toBe('class1 class2');
  });
});
