export const Card = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-zinc-800 hover:animate-pulse cursor-pointer">
      <img className="w-full object-cover"
        src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202407/20240704/bmw-x6-3-0-twinpower-gasolina-xdrive40i-m-sport-automatico-wmimagem17592411344.webp?s=fill&w=552&h=414&q=60"
        alt="car"
      />
      {/* infos */}
      <div className="flex flex-col gap-3 p-4">
        <strong>BMW X6</strong>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-zinc-400">Ano</p>
            <b>2020/2020</b>
          </div>
          <div>
            <p className="text-zinc-400 text-end">KM</p>
            <b>41.000</b>
          </div>
        </div>

        <strong className="text-3xl">R$ 545.890</strong>
        <p className="text-zinc-400">São Gonçalo - RJ</p>
      </div>
    </div>
  );
};
