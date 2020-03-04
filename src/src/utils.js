export function guid() {
  var s4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };

  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

export const defaultTodos = [
  {id: 1, label: 'Tip #1: El orden es importante para aprovechar el cache', done:false},
  {id: 2, label: 'Tip #2: Hacer un COPY específico para limitar la inhabilitación del cache', done:false},
  {id: 3, label: 'Tip #3: Identificar unidades que pueden aprovechar el cache', done:false},
  {id: 4, label: 'Tip #4: Remover dependencias innecesarias', done:false},
  {id: 5, label: 'Tip #5: Remover el cache del administrador de paquetes', done:false},
  {id: 6, label: 'Tip #6: Usar imágenes oficiales cuando sea posible', done:false},
  {id: 7, label: 'Tip #7: Usar tags más específicos', done:false},
  {id: 8, label: 'Tip #8: Probar imágenes más chicas', done:false},
  {id: 9, label: 'Tip #9: Utilizar tini para gestionar señales', done:false},
  {id: 10, label: 'Tip #10: Construir desde el código en un ambiente consistente', done:false},
  {id: 11, label: 'Tip #11: Adjuntar dependencias en un paso independiente', done:false},
  {id: 12, label: 'Tip #12: Usar multi-stage buils para remover dependencias de desarrollo', done:false},
  {id: 13, label: 'Tip #13: Usar DOCKER_BUILDKIT=1', done:false},
  {id: 14, label: 'Tip #14: Usar los experimental flags', done:false},
]