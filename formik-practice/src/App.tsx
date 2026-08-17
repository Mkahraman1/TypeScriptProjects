// 1. ADIM: Form bileşenimizi içeri aktarıyoruz. 
// (Dosya yolunu './RammsteinForm' kendi klasör yapına göre ayarlamalısın)
import RammsteinForm from './Rammstein';

function App() {
  return (
    <div>
      {/* İstersen formun üstüne başka şeyler de ekleyebilirsin */}
      <h1 style={{ textAlign: 'center', color: 'black' }}>Ana Sayfamıza Hoş Geldiniz</h1>
      
      {/* 2. ADIM: Formu burada çağırıp ekrana basıyoruz */}
      <RammsteinForm />
      
    </div>
  );
}

export default App;