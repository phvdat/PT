import './style.css';
interface ItemProps {
  defaultValue: string;
}
const Item = ({ defaultValue }: ItemProps) => {
  const handleUpdate = async () => {
    console.log('Update');
  };
  return (
    <div>
      <input type='text' defaultValue={defaultValue} className='input-field' />
      <button className='button-update'>Update</button>
      <button className='button-delete'>Delete</button>
    </div>
  );
};
export default Item;
