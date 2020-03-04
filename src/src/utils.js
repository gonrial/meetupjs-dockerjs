export function guid() {
  var s4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };

  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

export const defaultTodos = [
  { id: 'a9581a2', label: 'Tip #1: Usar imágenes oficiales cuando sea posible', done: false },
  { id: 'c2ae834', label: 'Tip #2: Usar tags más específicos', done: false },
  { id: 'efaf857', label: 'Tip #3: Probar imágenes más chicas', done: false },
  { id: 'ace6113', label: 'Tip #4: El orden es importante para aprovechar el cache', done: false },
  { id: '5849dca', label: 'Tip #5: Copiar lo necesario para limitar la inhabilitación del cache', done: false },
  { id: 'de79292', label: 'Tip #6: Identificar unidades que pueden aprovechar el cache', done: false },
  { id: '000e6c3', label: 'Tip #7: Remover dependencias innecesarias', done: false },
  { id: 'd063646', label: 'Tip #8: Remover el cache del administrador de paquetes', done: false },
  { id: '8c7a495', label: 'Tip #10: Adjuntar dependencias en un paso independiente', done: false },
  { id: '74e32c5', label: 'Tip #11: Usar multi-stage buils para remover dependencias de desarrollo', done: false },
  { id: 'e0b9c9d', label: 'Tip #11.1: En multi-stage no es necesario usar la misma imagen base', done: false },
  { id: '07d7fbf', label: 'Tip #12: Usar un usuario con pocos privilegios', done: false },
  { id: '53c649e', label: 'Tip #13: Usar DOCKER_BUILDKIT=1', done: false },
  { id: '53c649e', label: 'Tip #14: Usar experimental para tener cache', done: false },
  { id: '90e8add', label: 'Tip #15: Usar experimental para secrets', done: false }
]