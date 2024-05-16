type Props = {
    hiddenContentArea: boolean;
}
export const ContentArea = ({hiddenContentArea}: Props) => {
  return (
        <div className={`${hiddenContentArea ? 'hidden' : 'block'} md:block`}>
            testando se vai dar certo
        </div>
    );
}