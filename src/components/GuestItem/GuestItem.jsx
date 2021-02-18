function GuestItem({guest, removeGuest}) {
  return(
    <tr key={guest.id}>
      <td>{guest.name}</td>
      <td>{String(guest.kidsMeal)}</td>
      <button data-id={guest.id} onClick={removeGuest}>
        Remove {guest.name}
      </button>
    </tr>
  );
}

export default GuestItem;