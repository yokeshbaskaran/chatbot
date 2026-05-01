const EngineList = () => {
  // const [modelOpen, setModelOpen] = useState(false);
  // const [selected, setSelected] = useState(aimodal[0]);

  // const aimodal = [
  //   { name: "Neural Nexus", feature: "Quantum Core v3.8" },
  //   { name: "Cerebral Prime", feature: "Advanced Reasoning v2.1" },
  //   { name: "Synapse Ultra", feature: "Creative Engine v4.0" },
  //   { name: "Logic Core", feature: "Fast Response v1.5" },
  // ];

  return (
    <div>
      <h2> RIGHT - AI ENGINE </h2>
      {/* <div className="px-4 relative">
        <div
          onClick={() => setModelOpen(!modelOpen)}
          className="flex items-center gap-2 bg-[#f2f2f6] px-3 py-2 rounded cursor-pointer"
        >
          <img src="./icon.png" alt="logo" className="size-6" />
          <span className="px-1 text-base">{selected.name}</span>
          {modelOpen ? <FaAngleUp size={15} /> : <FaAngleDown size={15} />}
        </div>

        {modelOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded shadow-lg">
            {aimodal.map((model, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelected(model);
                  setModelOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 transition-colors hover:bg-gray-100  cursor-pointer"
              >
                <img src="./icon.png" alt="logo" className="size-8 mx-1" />
                <div className="flex flex-col">
                  <h2 className="text-base font-medium">{model.name}</h2>
                  <span className="text-[#747474] text-sm">
                    {model.feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default EngineList;
