import tp from './tp';

function typo(vnode) {
  if (vnode.children) {
    vnode.children.forEach((item) => {
      if (item.open) {
        item.open = tp.execute(item.open);
      }
    });
  }
  if (vnode.data && vnode.data.directives) {
    const typoData = vnode.data.directives.find((item) => item.name === 'typo');
    if (typoData && typoData.value) {
      vnode.children = [
        {
          isString: true,
          open: tp.execute(typoData.value),
          close: undefined,
          children: undefined,
        },
      ];
    }
  }
}

export default (vnode) => {
  try {
    typo(vnode);
    if (vnode.children) {
      vnode.children.forEach(typo);
    }
  } catch (e) {
    console.error('ssr typo', e);
  }
};
