import { Class, Teacher } from './ProvideClasses';
export const oneDay = 24 * 60 * 60 * 1000;

const make = (base: any) => Array.from({ length: 10 }).map((_, idx) => ({
  ...base,
  name: base.name + idx,
  created: new Date(Date.now() + idx * oneDay),
}));

const baseClass = {
  name: 'MockedClass',
  duration: 120,
  credits: 2,
  image: 'https://s16815.pcdn.co/wp-content/uploads/2015/10/iStock_computer-art.151110.jpg',
  created: new Date(),
};

export const mockClasses = make(baseClass);

const teacherBase = {
  name: 'Joe Doe',
  title: 'Sr. Software Developer',
  image: 'https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png',
};

export const mockTeachers = make(teacherBase);
