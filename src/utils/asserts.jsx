export default function assertProps(obj, ...props) {
  return Object.prototype.hasOwnProperty.call(obj, ...props);
}
