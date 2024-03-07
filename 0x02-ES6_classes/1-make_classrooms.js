import ClassRoom from './0-classroom';

function initializeRooms() {
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(21),
  ];

  return rooms;
}

export default initializeRooms;
