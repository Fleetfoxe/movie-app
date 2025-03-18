import BrokenImageIcon from '@mui/icons-material/BrokenImage';

const NoPosterPlaceholder = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 200, height: 300, background: '#f0f0f0' }}>
    <BrokenImageIcon style={{ fontSize: 80, color: '#9e9e9e' }} />
  </div>
);

export default NoPosterPlaceholder;
