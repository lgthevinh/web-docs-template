export const getChangeLog = async () => {
  const res = await fetch('/documents/changelog.json');
  return await res.json();
}
