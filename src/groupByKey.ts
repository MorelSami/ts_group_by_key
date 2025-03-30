type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const res: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const k: string = String(item[key]);

    res[k] = items.filter((_item: T) => item[key] === _item[key]);
  });

  return res;
}
