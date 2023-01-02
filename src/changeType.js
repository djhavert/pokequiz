export function changeType(type, selectedTypes, setSelectedTypes) {
  if (selectedTypes[0] == null) {
    setSelectedTypes([type, null]);
  } else if (selectedTypes[1] == null) {
    if (selectedTypes[0] !== type) {
      setSelectedTypes([selectedTypes[0], type]);
    } else {
      setSelectedTypes([null, null]);
    }
  } else {
    if (selectedTypes[0] === type) {
      setSelectedTypes([selectedTypes[1], null]);
    } else if (selectedTypes[1] === type) {
      setSelectedTypes([selectedTypes[0], null]);
    }
  }
}
