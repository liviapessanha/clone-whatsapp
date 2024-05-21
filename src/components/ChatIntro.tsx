export const ChatIntro = () => {
  return (
    <div className="bg-gray-50 flex flex-col justify-center items-center h-screen border-b-8 border-green-600">
        <img 
            src="https://i0.wp.com/www.techtrends.co.zm/wp-content/uploads/2015/09/doukahs.png?w=625&ssl=1" 
            alt="Imagem do sinal do wi-fi"  
        />
        <h1 className="text-lg text-gray-400 mt-7">Mantenha seu celular conectado</h1>
        <h2 className="text-base text-black/30 mt-5 leading-5 text-center">O whatsApp conecta ao seu celular para sincronizar suas mensagens.<br/> Para reduzir o uso de dados, conecte seu celular a uma rede wi-fi.</h2>
        
    </div>
  );
}