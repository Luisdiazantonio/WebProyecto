// src/app/paginas/main/page.tsx

export default async function MainPage() {
  
  //console.log('Datos para render:', characters);
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <header className="text-center mb-12">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-6 mb-6">
              <h1 className="text-3xl md:text-6xl font-extrabold text-gray-800 drop-shadow-lg tracking-wide">
                ScalaMotors
              </h1>
            </div>
            <div>
              <img 
                className="h-full w-full object-cover"
                src="https://imgs.search.brave.com/VxrVHUOfVLQQ91pPcDVX5ZRN3nu2jTj7PmZCXbqjL1Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90cmVu/ZXMubXgvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDUvcGx5/bW91dGgtYWFyLWN1/ZGEtMS11ZC0zMDc2/NjMtZXMtMTUzNng4/Nzgtb3B0aW1pemVk/LmpwZw" 
                alt="Logo de la tienda" 
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}