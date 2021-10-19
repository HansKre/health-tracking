export function tomorrow(date: Date): Date {
  return new Date(new Date().setDate(date.getDate() + 1));
}

export function yesterday(date: Date): Date {
  return new Date(new Date().setDate(date.getDate() - 1));
}

export function dateString(date: Date): string {
  var today = new Date();
  if (date.toLocaleDateString() === today.toLocaleDateString()) {
    return 'today';
  } else if (
    date.toLocaleDateString() === yesterday(date).toLocaleDateString()
  ) {
    return 'yesterday';
  } else {
    return date.toLocaleDateString();
  }
}
