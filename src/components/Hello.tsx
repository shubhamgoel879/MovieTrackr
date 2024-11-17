export const Hello = (props: any): JSX.Element => {
    props.name = 'Piya'
  return <>
  <div>Hello {props.name} {props.value}</div>
  </>;
};
