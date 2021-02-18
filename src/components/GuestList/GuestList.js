import GuestItem from '../GuestItem/GuestItem'

function guestList({guestList, removeGuest}) {
  return( 
    <div>
      <h2>Guest List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Kid's Meal</th>
              <th>Remove Guest</th>
            </tr>
          </thead>
          <tbody>
            {guestList.map(guest => (
              <GuestItem
              key={guest.id}
              guest={guest}
              removeGuest={removeGuest}
              />
            ))}
          </tbody>
        </table>
      </div>
  );
}
export default guestList;
