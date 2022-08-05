enum Breakpoint {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

const maxWidthMap: { [key: string]: number } = {
  sm: 675,
  md: 850,
  lg: 975,
  xl: 1200
};

const withMaxWidth = (breakpoint: Breakpoint, styles: string): string => {
  const maxWidth: number | undefined = maxWidthMap[breakpoint];
  if (maxWidth) {
    return `
    @media (min-width: ${maxWidth - 1}px) {
      ${styles}
    }
    `;
  }
  return styles;
};

const createRule = (breakpoint: Breakpoint, columns: number): string => `
  :host([${breakpoint}='${columns}']) {
    width: calc(100% / 12 * ${columns} - 20px);
  }
`;

const buildBreakpointRules = (breakpoint: Breakpoint): string =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce(
    (prev, next) => prev + createRule(breakpoint, next),
    ''
  );

const createRules = (): string =>
  (Object.keys(Breakpoint) as Breakpoint[]).reduce(
    (accumulation, breakpoint) =>
      accumulation + withMaxWidth(breakpoint, buildBreakpointRules(breakpoint)),
    ''
  );

const createColumnStyles = (): string => `
  :host {
    background-color: #393e46;
    margin: 0 10px;
    width: calc(100% / 12 - 20px);
  }
  ${createRules()}
`;

export default createColumnStyles();
