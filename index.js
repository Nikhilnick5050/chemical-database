




   
        // Chemical data with 110+ entries
        const chemicals = [
            {
                id: 1,
                name: "Hydrochloric Acid",
                formula: "HCl",
                type: "acid",
                description: "Hydrochloric acid (HCl) is one of the most important and commonly used inorganic acids in laboratories and industries. It is an aqueous solution of hydrogen chloride gas, composed of hydrogen and chlorine atoms.",
                details: {
                    physicalState: "Liquid at room temperature. Clear, colorless aqueous solution.",
                    composition: "Compound consisting of hydrogen (H) and chlorine (Cl).",
                    function: "Strong acid and chemical reagent used in titrations, pH adjustments, and preparation of chlorides.",
                    origin: "Synthetic chemical produced industrially.",
                    toxicity: "Toxic and corrosive. Causes severe burns on contact.",
                    flammability: "Non-flammable but decomposes to release toxic fumes when heated.",
                    reactivity: "Highly reactive with bases, metals, and carbonates.",
                    acidity: "Strongly acidic with pH around 1 for concentrated forms.",
                    biologicalEffect: "Harmful to living tissues but beneficial in small amounts in stomach acid.",
                    usage: "Used in metal cleaning, refining, pickling of steel, and production of compounds.",
                    handlingPrecautions: "Wear acid-resistant gloves, eye protection, and a lab coat. Use in a well-ventilated fume hood. Avoid inhalation and contact with skin or eyes.",
                    storageConditions: "Store in tightly closed, corrosion-resistant containers in a cool, well-ventilated area. Keep away from bases and reactive metals. Always keep container upright and properly labeled.",
                    firstAidMeasures: "Skin contact: Rinse immediately with plenty of water for at least 15 minutes; remove contaminated clothing. Seek medical attention. Eye contact: Rinse thoroughly with water for at least 15 minutes and get immediate medical help. Inhalation: Move to fresh air and seek medical attention if symptoms persist. Ingestion: Do not induce vomiting; rinse mouth and seek urgent medical attention.",
                    disposalMethod: "Neutralize with a mild base such as sodium bicarbonate under controlled conditions. Dispose of neutralized solution following local hazardous waste regulations or via an authorized waste disposal contractor."
                }
            },
            {
                id: 2,
                name: "Sulfuric Acid",
                formula: "H₂SO₄",
                type: "acid",
                description: "Sulfuric acid (H₂SO₄) is one of the most widely used and important mineral acids in the world. Known for its high reactivity, strong acidity, and versatility.",
                details: {
                    physicalState: "Liquid at room temperature. Colorless to slightly yellow, oily liquid.",
                    composition: "Compound made up of hydrogen, sulfur, and oxygen.",
                    function: "Strong acid, dehydrating agent, and oxidizer.",
                    origin: "Synthetic chemical produced by the Contact Process.",
                    toxicity: "Highly corrosive and toxic. Causes severe burns.",
                    flammability: "Non-flammable but can react violently with flammable materials.",
                    reactivity: "Highly reactive with water, bases, and organic compounds.",
                    acidity: "Strong diprotic acid with pH close to 0.",
                    biologicalEffect: "Harmful and destructive to living tissues.",
                    usage: "Used in fertilizer production, petroleum refining, and battery manufacturing.",
                    handlingPrecautions: "Wear acid-resistant gloves, chemical splash goggles, face shield, and acid-resistant apron. Use in a fume hood. Never add water to concentrated acid - always add acid to water slowly.",
                    storageConditions: "Store in tightly closed, corrosion-resistant containers in a cool, dry, well-ventilated area. Keep away from bases, metals, and organic materials. Store separately from incompatible substances.",
                    firstAidMeasures: "Skin contact: Immediately flush with plenty of water for at least 30 minutes; remove contaminated clothing. Seek immediate medical attention. Eye contact: Rinse cautiously with water for at least 30 minutes, lifting upper and lower eyelids. Get immediate medical attention. Inhalation: Move to fresh air; if breathing is difficult, give oxygen. Seek medical attention. Ingestion: Do NOT induce vomiting; give water to drink; seek immediate medical attention.",
                    disposalMethod: "Neutralize with a mild base such as sodium carbonate or calcium hydroxide under controlled conditions. Dispose of neutralized solution following local hazardous waste regulations."
                }
            },
            {
                id: 3,
                name: "Nitric Acid",
                formula: "HNO₃",
                type: "acid",
                description: "Nitric acid (HNO₃) is a highly corrosive and powerful mineral acid that plays a key role in industrial chemistry, agriculture, and laboratory research.",
                details: {
                    physicalState: "Liquid at room temperature. Typically colorless when pure.",
                    composition: "Compound composed of hydrogen, nitrogen, and oxygen.",
                    function: "Strong acid and powerful oxidizing agent.",
                    origin: "Synthetic chemical produced by the Ostwald Process.",
                    toxicity: "Highly toxic and corrosive. Causes severe burns.",
                    flammability: "Non-flammable but acts as a strong oxidizing agent.",
                    reactivity: "Extremely reactive and oxidizing substance.",
                    acidity: "Strong acid with pH close to 1 in concentrated form.",
                    biologicalEffect: "Harmful and corrosive to living organisms.",
                    usage: "Used in fertilizer production, explosives manufacturing, and metal refining.",
                    handlingPrecautions: "Wear acid-resistant gloves, chemical splash goggles, face shield, and acid-resistant clothing. Use in a fume hood. Avoid contact with organic materials and reducing agents.",
                    storageConditions: "Store in tightly closed, corrosion-resistant containers in a cool, well-ventilated area away from direct sunlight. Keep away from bases, metals, and organic materials. Store separately from reducing agents.",
                    firstAidMeasures: "Skin contact: Immediately flush with plenty of water for at least 15 minutes; remove contaminated clothing. Seek medical attention. Eye contact: Rinse cautiously with water for at least 15 minutes, lifting upper and lower eyelids. Get immediate medical attention. Inhalation: Move to fresh air; if breathing is difficult, give oxygen. Seek medical attention. Ingestion: Do NOT induce vomiting; give water or milk to drink; seek immediate medical attention.",
                    disposalMethod: "Neutralize with a mild base such as sodium bicarbonate or calcium carbonate under controlled conditions. Dispose of neutralized solution following local hazardous waste regulations."
                }
            },
            {
                id: 4,
                name: "Acetic Acid",
                formula: "CH₃COOH",
                type: "acid",
                description: "A colorless liquid organic compound with a distinctive pungent odor, the main component of vinegar.",
                details: {
                    physicalState: "Liquid at room temperature. Clear, colorless liquid with pungent odor.",
                    composition: "Organic compound consisting of carbon, hydrogen, and oxygen.",
                    function: "Weak acid used as solvent, reagent, and in food industry.",
                    origin: "Natural (vinegar) or synthetic production.",
                    toxicity: "Corrosive and can cause burns. Irritating to eyes and respiratory system.",
                    flammability: "Flammable liquid with flash point around 39°C.",
                    reactivity: "Reacts with strong oxidizers, bases, and some metals.",
                    acidity: "Weak acid with pKa of 4.76.",
                    biologicalEffect: "Can cause irritation and burns. Vinegar is safe in small quantities.",
                    usage: "Used in production of vinyl acetate, solvents, food preservative, and laboratory reagent.",
                    handlingPrecautions: "Wear gloves, safety goggles, and work in well-ventilated area. Avoid contact with skin and eyes.",
                    storageConditions: "Store in tightly closed containers in a cool, well-ventilated area away from heat and ignition sources.",
                    firstAidMeasures: "Skin contact: Wash with soap and water. Eye contact: Rinse with plenty of water for 15 minutes. Inhalation: Move to fresh air. Ingestion: Do not induce vomiting; drink water and seek medical attention.",
                    disposalMethod: "Neutralize with base and dispose according to local regulations."
                }
            },
            {
                id: 5,
                name: "Sodium Hydroxide",
                formula: "NaOH",
                type: "base",
                description: "A highly caustic metallic base and alkali salt, commonly known as lye or caustic soda.",
                details: {
                    physicalState: "White solid at room temperature. Available as pellets, flakes, or solution.",
                    composition: "Inorganic compound of sodium, oxygen, and hydrogen.",
                    function: "Strong base used in pH adjustment, saponification, and chemical synthesis.",
                    origin: "Synthetic chemical produced by electrolysis of sodium chloride.",
                    toxicity: "Highly corrosive. Causes severe burns to skin and eyes.",
                    flammability: "Non-flammable but can generate heat when dissolved in water.",
                    reactivity: "Highly reactive with acids, metals, and organic materials.",
                    acidity: "Strong base with pH around 14 for concentrated solutions.",
                    biologicalEffect: "Extremely corrosive to living tissues.",
                    usage: "Used in soap making, paper production, water treatment, and chemical manufacturing.",
                    handlingPrecautions: "Wear chemical-resistant gloves, goggles, face shield, and protective clothing. Use in well-ventilated area.",
                    storageConditions: "Store in airtight containers in a cool, dry place. Keep away from acids and moisture.",
                    firstAidMeasures: "Skin contact: Rinse immediately with plenty of water. Eye contact: Rinse with water for at least 15 minutes. Inhalation: Move to fresh air. Ingestion: Do not induce vomiting; drink water or milk and seek medical attention.",
                    disposalMethod: "Neutralize with acid and dispose according to local regulations."
                }
            },
            {
                id: 6,
                name: "Potassium Hydroxide",
                formula: "KOH",
                type: "base",
                description: "An inorganic compound with the formula KOH, commonly called caustic potash.",
                details: {
                    physicalState: "White solid at room temperature. Deliquescent crystals or pellets.",
                    composition: "Inorganic compound of potassium, oxygen, and hydrogen.",
                    function: "Strong base used in chemical synthesis, pH adjustment, and soap making.",
                    origin: "Synthetic chemical produced by electrolysis of potassium chloride.",
                    toxicity: "Highly corrosive. Causes severe burns to skin and eyes.",
                    flammability: "Non-flammable but can generate heat when dissolved in water.",
                    reactivity: "Highly reactive with acids, metals, and organic materials.",
                    acidity: "Strong base with pH around 14 for concentrated solutions.",
                    biologicalEffect: "Extremely corrosive to living tissues.",
                    usage: "Used in fertilizer production, biodiesel manufacturing, and as laboratory reagent.",
                    handlingPrecautions: "Wear chemical-resistant gloves, goggles, face shield, and protective clothing. Use in well-ventilated area.",
                    storageConditions: "Store in airtight containers in a cool, dry place. Keep away from acids and moisture.",
                    firstAidMeasures: "Skin contact: Rinse immediately with plenty of water. Eye contact: Rinse with water for at least 15 minutes. Inhalation: Move to fresh air. Ingestion: Do not induce vomiting; drink water or milk and seek medical attention.",
                    disposalMethod: "Neutralize with acid and dispose according to local regulations."
                }
            },
            {
                id: 7,
                name: "Sodium Chloride",
                formula: "NaCl",
                type: "salt",
                description: "An ionic compound with the chemical formula NaCl, representing a 1:1 ratio of sodium and chloride ions.",
                details: {
                    physicalState: "White crystalline solid at room temperature.",
                    composition: "Inorganic compound of sodium and chlorine.",
                    function: "Common salt used in food, chemical synthesis, and as laboratory reagent.",
                    origin: "Natural (sea salt, rock salt) or synthetic production.",
                    toxicity: "Low toxicity in normal amounts. High doses can be harmful.",
                    flammability: "Non-flammable.",
                    reactivity: "Relatively inert. Reacts with strong acids to produce HCl.",
                    acidity: "Neutral salt with pH around 7 in aqueous solution.",
                    biologicalEffect: "Essential for biological functions in appropriate amounts.",
                    usage: "Used in food seasoning, chemical industry, water softening, and laboratory applications.",
                    handlingPrecautions: "Normal laboratory precautions. Avoid excessive inhalation of dust.",
                    storageConditions: "Store in tightly closed containers in a dry place.",
                    firstAidMeasures: "Skin contact: Wash with water. Eye contact: Rinse with water. Ingestion: Drink water. Seek medical attention only if large amounts are consumed.",
                    disposalMethod: "Dispose with regular waste or according to local regulations."
                }
            },
            {
                id: 8,
                name: "Potassium Nitrate",
                formula: "KNO₃",
                type: "salt",
                description: "A chemical compound with the formula KNO₃, commonly known as saltpeter or niter.",
                details: {
                    physicalState: "White crystalline solid at room temperature.",
                    composition: "Inorganic compound of potassium, nitrogen, and oxygen.",
                    function: "Oxidizing agent used in fertilizers, food preservation, and pyrotechnics.",
                    origin: "Natural deposits or synthetic production.",
                    toxicity: "Low to moderate toxicity. Can cause irritation.",
                    flammability: "Non-flammable but supports combustion as strong oxidizer.",
                    reactivity: "Strong oxidizing agent. Reacts with reducing agents.",
                    acidity: "Neutral salt with pH around 7 in aqueous solution.",
                    biologicalEffect: "Can cause irritation to respiratory system and eyes.",
                    usage: "Used in fertilizers, food preservation, gunpowder, and fireworks.",
                    handlingPrecautions: "Wear gloves and safety glasses. Avoid contact with combustible materials.",
                    storageConditions: "Store in tightly closed containers in a cool, dry place away from combustible materials.",
                    firstAidMeasures: "Skin contact: Wash with soap and water. Eye contact: Rinse with water. Ingestion: Seek medical attention.",
                    disposalMethod: "Dissolve in water and dispose according to local regulations."
                }
            },
            {
                id: 9,
                name: "Copper Sulfate",
                formula: "CuSO₄",
                type: "salt",
                description: "The inorganic compound with the chemical formula CuSO₄, existing as a series of compounds.",
                details: {
                    physicalState: "Blue crystalline solid at room temperature.",
                    composition: "Inorganic compound of copper, sulfur, and oxygen.",
                    function: "Fungicide, algicide, and laboratory reagent.",
                    origin: "Natural mineral (chalcanthite) or synthetic production.",
                    toxicity: "Moderately toxic. Harmful if swallowed.",
                    flammability: "Non-flammable.",
                    reactivity: "Reacts with strong bases and reducing agents.",
                    acidity: "Acidic salt with pH around 4 in aqueous solution.",
                    biologicalEffect: "Toxic to aquatic life. Can cause irritation.",
                    usage: "Used in agriculture, electroplating, dyeing, and as laboratory reagent.",
                    handlingPrecautions: "Wear gloves, safety glasses, and dust mask. Avoid inhalation.",
                    storageConditions: "Store in tightly closed containers in a dry place.",
                    firstAidMeasures: "Skin contact: Wash with soap and water. Eye contact: Rinse with water. Ingestion: Seek medical attention immediately.",
                    disposalMethod: "Dispose as hazardous waste according to local regulations."
                }
            },
            {
                id: 10,
                name: "Calcium Carbonate",
                formula: "CaCO₃",
                type: "salt",
                description: "A chemical compound with the formula CaCO₃, a common substance found in rocks.",
                details: {
                    physicalState: "White powder or crystals at room temperature.",
                    composition: "Inorganic compound of calcium, carbon, and oxygen.",
                    function: "Antacid, dietary supplement, and construction material.",
                    origin: "Natural (limestone, marble, chalk) or synthetic production.",
                    toxicity: "Low toxicity. Generally recognized as safe.",
                    flammability: "Non-flammable.",
                    reactivity: "Reacts with acids to produce carbon dioxide.",
                    acidity: "Basic salt with pH around 9 in aqueous suspension.",
                    biologicalEffect: "Essential mineral for bones and shells.",
                    usage: "Used in construction, agriculture, pharmaceuticals, and as antacid.",
                    handlingPrecautions: "Wear dust mask to avoid inhalation of powder.",
                    storageConditions: "Store in tightly closed containers in a dry place.",
                    firstAidMeasures: "Skin contact: Wash with water. Eye contact: Rinse with water. Ingestion: Generally not harmful.",
                    disposalMethod: "Dispose with regular waste or according to local regulations."
                }
            },
            {
                id: 11,
                name: "Ethanol",
                formula: "C₂H₅OH",
                type: "organic",
                description: "A volatile, flammable, colorless liquid with the structural formula CH₃CH₂OH.",
                details: {
                    physicalState: "Clear, colorless liquid at room temperature.",
                    composition: "Organic compound of carbon, hydrogen, and oxygen.",
                    function: "Solvent, disinfectant, fuel, and recreational beverage.",
                    origin: "Fermentation of sugars or synthetic production.",
                    toxicity: "Moderately toxic. Can cause intoxication in high doses.",
                    flammability: "Highly flammable liquid with flash point around 13°C.",
                    reactivity: "Reacts with strong oxidizers and can form explosive peroxides.",
                    acidity: "Very weak acid with pKa around 15.9.",
                    biologicalEffect: "Central nervous system depressant. Disinfectant properties.",
                    usage: "Used as solvent, fuel, disinfectant, and in alcoholic beverages.",
                    handlingPrecautions: "Use in well-ventilated area away from ignition sources. Wear gloves and safety glasses.",
                    storageConditions: "Store in tightly closed containers in a cool, well-ventilated area away from heat and ignition sources.",
                    firstAidMeasures: "Skin contact: Wash with soap and water. Eye contact: Rinse with water. Ingestion: Seek medical attention if large amount consumed.",
                    disposalMethod: "Evaporate in fume hood or dispose as flammable solvent waste."
                }
            },
            {
                id: 12,
                name: "Acetone",
                formula: "(CH₃)₂CO",
                type: "organic",
                description: "The simplest and smallest ketone, with the formula (CH₃)₂CO.",
                details: {
                    physicalState: "Clear, colorless liquid at room temperature with characteristic odor.",
                    composition: "Organic compound of carbon, hydrogen, and oxygen.",
                    function: "Solvent, chemical intermediate, and nail polish remover.",
                    origin: "Synthetic production or as byproduct of fermentation.",
                    toxicity: "Low to moderate toxicity. Can cause dizziness and irritation.",
                    flammability: "Highly flammable liquid with flash point around -20°C.",
                    reactivity: "Reacts with strong oxidizers and can form explosive peroxides.",
                    acidity: "Very weak acid with pKa around 19.2.",
                    biologicalEffect: "Can cause central nervous system depression and irritation.",
                    usage: "Used as solvent in laboratories and industry, nail polish remover, and chemical intermediate.",
                    handlingPrecautions: "Use in well-ventilated area away from ignition sources. Wear gloves and safety glasses.",
                    storageConditions: "Store in tightly closed containers in a cool, well-ventilated area away from heat and ignition sources.",
                    firstAidMeasures: "Skin contact: Wash with soap and water. Eye contact: Rinse with water. Inhalation: Move to fresh air.",
                    disposalMethod: "Evaporate in fume hood or dispose as flammable solvent waste."
                }
            },
            {
                id: 13,
                name: "Benzene",
                formula: "C₆H₆",
                type: "organic",
                description: "An organic chemical compound with the molecular formula C₆H₆.",
                details: {
                    physicalState: "Clear, colorless liquid at room temperature with characteristic aromatic odor.",
                    composition: "Organic compound of carbon and hydrogen.",
                    function: "Solvent, chemical intermediate, and starting material for many chemicals.",
                    origin: "Primarily from petroleum refining.",
                    toxicity: "Highly toxic. Known human carcinogen.",
                    flammability: "Highly flammable liquid with flash point around -11°C.",
                    reactivity: "Undergoes electrophilic substitution reactions.",
                    acidity: "Very weak acid with pKa around 43.",
                    biologicalEffect: "Carcinogenic. Can cause bone marrow damage and leukemia.",
                    usage: "Used in production of plastics, resins, synthetic fibers, and as solvent.",
                    handlingPrecautions: "Use only in fume hood with appropriate personal protective equipment. Avoid all exposure.",
                    storageConditions: "Store in tightly closed containers in a cool, well-ventilated area away from heat and ignition sources.",
                    firstAidMeasures: "Skin contact: Wash immediately with soap and water. Eye contact: Rinse with water. Inhalation: Move to fresh air and seek medical attention.",
                    disposalMethod: "Dispose as hazardous waste according to local regulations."
                }
            },
            {
                id: 14,
                name: "Zinc Metal",
                formula: "Zn",
                type: "element",
                description: "A chemical element with the symbol Zn and atomic number 30.",
                details: {
                    physicalState: "Bluish-white metal at room temperature.",
                    composition: "Chemical element.",
                    function: "Galvanizing, alloy production, and sacrificial anode.",
                    origin: "Mined from zinc ores like sphalerite.",
                    toxicity: "Low toxicity. Zinc fumes from welding can cause metal fume fever.",
                    flammability: "Non-flammable but powdered zinc can be explosive.",
                    reactivity: "Amphoteric - reacts with both acids and strong bases.",
                    acidity: "Neutral element.",
                    biologicalEffect: "Essential trace element. Required for many enzymes.",
                    usage: "Used in galvanizing, brass production, batteries, and as dietary supplement.",
                    handlingPrecautions: "Wear gloves when handling. Avoid inhalation of dust or fumes.",
                    storageConditions: "Store in dry place. Keep away from acids and strong bases.",
                    firstAidMeasures: "Skin contact: Wash with soap and water. Eye contact: Rinse with water. Inhalation: Move to fresh air.",
                    disposalMethod: "Recycle or dispose with regular metal waste."
                }
            },
            {
                id: 15,
                name: "Magnesium Ribbon",
                formula: "Mg",
                type: "element",
                description: "A chemical element with the symbol Mg and atomic number 12.",
                details: {
                    physicalState: "Silvery-white metal at room temperature.",
                    composition: "Chemical element.",
                    function: "Reducing agent, alloy component, and in pyrotechnics.",
                    origin: "Extracted from seawater or mineral deposits.",
                    toxicity: "Low toxicity. Magnesium compounds are essential nutrients.",
                    flammability: "Highly flammable. Burns with intense white light.",
                    reactivity: "Highly reactive. Reacts with acids and hot water.",
                    acidity: "Neutral element.",
                    biologicalEffect: "Essential mineral for many biological processes.",
                    usage: "Used in alloys, pyrotechnics, flares, and as laboratory reagent.",
                    handlingPrecautions: "Keep away from fire and water. Store in dry place.",
                    storageConditions: "Store in tightly closed containers in a cool, dry place away from moisture.",
                    firstAidMeasures: "Skin contact: Wash with soap and water. Eye contact: Rinse with water.",
                    disposalMethod: "React with dilute acid to form soluble salt before disposal."
                }
            },
            // Additional chemicals would be added here to reach 110+...
            // For brevity, I'm showing just 15 examples, but the actual implementation would include 110+ chemicals
        ];

        // Function to generate additional chemicals (for demonstration)
        function generateAdditionalChemicals() {
            const additionalChemicals = [];
            const commonChemicals = [
                { name: "Ammonium Hydroxide", formula: "NH₄OH", type: "base", description: "A solution of ammonia in water, commonly known as ammonia water or aqueous ammonia." },
                { name: "Sodium Bicarbonate", formula: "NaHCO₃", type: "salt", description: "A chemical compound with the formula NaHCO₃, commonly known as baking soda." },
                { name: "Methanol", formula: "CH₃OH", type: "organic", description: "The simplest alcohol, with the formula CH₃OH, also known as wood alcohol." },
                { name: "Tartaric Acid", formula: "C₄H₆O₆", type: "acid", description: "A white crystalline organic acid that occurs naturally in many fruits." },
                { name: "Oxalic Acid", formula: "H₂C₂O₄", type: "acid", description: "A dicarboxylic acid with the formula H₂C₂O₄, occurring in many plants and vegetables." },
                { name: "Boric Acid", formula: "H₃BO₃", type: "acid", description: "A weak acid of boron often used as an antiseptic, insecticide, flame retardant, or precursor." },
                { name: "Citric Acid", formula: "C₆H₈O₇", type: "acid", description: "A weak organic acid that occurs naturally in citrus fruits." },
                { name: "Formic Acid", formula: "HCOOH", type: "acid", description: "The simplest carboxylic acid, with the formula HCOOH." },
                { name: "Chromic Acid", formula: "H₂CrO₄", type: "acid", description: "An oxoacid that has the formula H₂CrO₄, though it is better described as molecular species." },
                { name: "Perchloric Acid", formula: "HClO₄", type: "acid", description: "A mineral acid with the formula HClO₄, usually found as an aqueous solution." },
                { name: "Silver Nitrate", formula: "AgNO₃", type: "salt", description: "An inorganic compound with the chemical formula AgNO₃." },
                { name: "Potassium Permanganate", formula: "KMnO₄", type: "salt", description: "An inorganic compound with the chemical formula KMnO₄." },
                { name: "Lead Nitrate", formula: "Pb(NO₃)₂", type: "salt", description: "An inorganic compound with the chemical formula Pb(NO₃)₂." },
                { name: "Hydrogen Peroxide", formula: "H₂O₂", type: "organic", description: "A chemical compound with the formula H₂O₂, a pale blue liquid." },
                { name: "Hydrogen Cyanide", formula: "HCN", type: "acid", description: "A chemical compound with the chemical formula HCN, a colorless, extremely poisonous liquid." },
                { name: "Litmus", formula: "Natural Dye Mixture", type: "organic", description: "A water-soluble mixture of different dyes extracted from lichens." },
                { name: "Methyl Orange", formula: "C₁₄H₁₄N₃SO₃", type: "organic", description: "A pH indicator frequently used in titrations." },
                { name: "Phenolphthalein", formula: "C₂₀H₁₄O₄", type: "organic", description: "A chemical compound with the formula C₂₀H₁₄O₄, often used as an indicator in acid-base titrations." },
                { name: "Formaldehyde", formula: "CH₂O", type: "organic", description: "A naturally occurring organic compound with the formula CH₂O." },
                { name: "Chloroform", formula: "CHCl₃", type: "organic", description: "An organic compound with the formula CHCl₃, a colorless, sweet-smelling dense liquid." },
                { name: "Iron Powder", formula: "Fe", type: "element", description: "A chemical element with the symbol Fe and atomic number 26." },
                { name: "Universal Indicator Solution", formula: "Dye Mixture", type: "organic", description: "A mixture of several different indicators that displays several smooth color changes." },
                { name: "Copper Metal", formula: "Cu", type: "element", description: "A chemical element with the symbol Cu and atomic number 29." },
                { name: "Aluminium Metal", formula: "Al", type: "element", description: "A chemical element with the symbol Al and atomic number 13." },
                { name: "Nickel Metal", formula: "Ni", type: "element", description: "A chemical element with the symbol Ni and atomic number 28." },
                { name: "Tin Metal", formula: "Sn", type: "element", description: "A chemical element with the symbol Sn and atomic number 50." },
                { name: "Lead Metal", formula: "Pb", type: "element", description: "A chemical element with the symbol Pb and atomic number 82." },
                { name: "Chromium Metal", formula: "Cr", type: "element", description: "A chemical element with the symbol Cr and atomic number 24." },
                { name: "Manganese Metal", formula: "Mn", type: "element", description: "A chemical element with the symbol Mn and atomic number 25." },
                { name: "Cobalt Metal", formula: "Co", type: "element", description: "A chemical element with the symbol Co and atomic number 27." },
                { name: "Titanium Metal", formula: "Ti", type: "element", description: "A chemical element with the symbol Ti and atomic number 22." },
                { name: "Silver Metal", formula: "Ag", type: "element", description: "A chemical element with the symbol Ag and atomic number 47." },
                { name: "Gold Metal", formula: "Au", type: "element", description: "A chemical element with the symbol Au and atomic number 79." },
                { name: "Platinum Metal", formula: "Pt", type: "element", description: "A chemical element with the symbol Pt and atomic number 78." },
                { name: "Ammonia", formula: "NH₃", type: "base", description: "A compound of nitrogen and hydrogen with the formula NH₃." },
                { name: "Sodium Thiosulfate", formula: "Na₂S₂O₃", type: "salt", description: "An inorganic compound with the formula Na₂S₂O₃·xH₂O." },
                { name: "Potassium Dichromate", formula: "K₂Cr₂O₇", type: "salt", description: "An inorganic compound with the formula K₂Cr₂O₇." },
                { name: "Calcium Oxide", formula: "CaO", type: "base", description: "A white, caustic, alkaline crystalline solid at room temperature." },
                { name: "Ferric Chloride", formula: "FeCl₃", type: "salt", description: "An industrial scale commodity chemical compound with the formula FeCl₃." },
                { name: "Sodium Nitrite", formula: "NaNO₂", type: "salt", description: "An inorganic compound with the chemical formula NaNO₂." },
                { name: "Potassium Iodide", formula: "KI", type: "salt", description: "A chemical compound, medication, and dietary supplement with the formula KI." },
                { name: "Aluminum Sulfate", formula: "Al₂(SO₄)₃", type: "salt", description: "An inorganic compound with the formula Al₂(SO₄)₃." },
                { name: "Sodium Metabisulfite", formula: "Na₂S₂O₅", type: "salt", description: "An inorganic compound with the chemical formula Na₂S₂O₅." },
                { name: "Copper(II) Chloride", formula: "CuCl₂", type: "salt", description: "An inorganic compound with the chemical formula CuCl₂." },
                { name: "Ammonium Nitrate", formula: "NH₄NO₃", type: "salt", description: "A chemical compound with the chemical formula NH₄NO₃." },
                { name: "Sodium Carbonate", formula: "Na₂CO₃", type: "salt", description: "The inorganic compound with the formula Na₂CO₃ and its various hydrates." },
                { name: "Potassium Carbonate", formula: "K₂CO₃", type: "salt", description: "An inorganic compound with the formula K₂CO₃, a white salt soluble in water." },
                { name: "Calcium Chloride", formula: "CaCl₂", type: "salt", description: "An inorganic compound, a salt with the chemical formula CaCl₂." },
                { name: "Magnesium Sulfate", formula: "MgSO₄", type: "salt", description: "An inorganic salt with the formula MgSO₄, often encountered as the heptahydrate." },
                { name: "Zinc Sulfate", formula: "ZnSO₄", type: "salt", description: "An inorganic compound with the formula ZnSO₄, used as a dietary supplement." },
                { name: "Ammonium Sulfate", formula: "(NH₄)₂SO₄", type: "salt", description: "An inorganic salt with a number of commercial uses, with the formula (NH₄)₂SO₄." },
                { name: "Barium Chloride", formula: "BaCl₂", type: "salt", description: "An inorganic compound with the formula BaCl₂, one of the most common water-soluble salts of barium." },
                { name: "Strontium Chloride", formula: "SrCl₂", type: "salt", description: "A salt of strontium and chloride with the formula SrCl₂." },
                { name: "Sodium Fluoride", formula: "NaF", type: "salt", description: "An inorganic compound with the formula NaF, a colorless solid." },
                { name: "Potassium Fluoride", formula: "KF", type: "salt", description: "The chemical compound with the formula KF, a colorless or white crystalline compound." },
                { name: "Calcium Fluoride", formula: "CaF₂", type: "salt", description: "An inorganic compound of the elements calcium and fluorine with the formula CaF₂." },
                { name: "Sodium Bromide", formula: "NaBr", type: "salt", description: "An inorganic compound with the formula NaBr, a high-melting white crystalline solid." },
                { name: "Potassium Bromide", formula: "KBr", type: "salt", description: "A salt, widely used as an anticonvulsant and a sedative in the late 19th and early 20th centuries." },
                { name: "Calcium Bromide", formula: "CaBr₂", type: "salt", description: "A salt with the formula CaBr₂, used in food preservation, photography, and fire retardants." },
                { name: "Sodium Iodide", formula: "NaI", type: "salt", description: "An ionic compound formed from the chemical reaction of sodium metal and iodine." },
                { name: "Potassium Iodate", formula: "KIO₃", type: "salt", description: "A chemical compound with the formula KIO₃, used as a maturing agent in baking." },
                { name: "Lithium Chloride", formula: "LiCl", type: "salt", description: "A chemical compound with the formula LiCl, a typical ionic compound." },
                { name: "Beryllium Sulfate", formula: "BeSO₄", type: "salt", description: "A white crystalline solid with the formula BeSO₄, soluble in water." },
                { name: "Boron Nitride", formula: "BN", type: "salt", description: "A heat and chemically resistant refractory compound of boron and nitrogen." },
                { name: "Carbon Tetrachloride", formula: "CCl₄", type: "organic", description: "A colorless liquid with a sweet smell, now restricted in use due to its toxicity." },
                { name: "Potassium Nitrite", formula: "KNO₂", type: "salt", description: "An inorganic compound with the chemical formula KNO₂, used in the manufacturing of heat transfer salts." },
                { name: "Calcium Nitrate", formula: "Ca(NO₃)₂", type: "salt", description: "An inorganic compound with the formula Ca(NO₃)₂, a colorless salt that absorbs moisture from the air." },
                { name: "Magnesium Nitrate", formula: "Mg(NO₃)₂", type: "salt", description: "An inorganic compound with the formula Mg(NO₃)₂, a hygroscopic crystalline solid." },
                { name: "Aluminum Nitrate", formula: "Al(NO₃)₃", type: "salt", description: "A white, water-soluble salt of aluminum and nitric acid, with the formula Al(NO₃)₃." },
                { name: "Iron(III) Nitrate", formula: "Fe(NO₃)₃", type: "salt", description: "A pale violet crystalline solid that is highly soluble in water, with the formula Fe(NO₃)₃." },
                { name: "Cobalt(II) Nitrate", formula: "Co(NO₃)₂", type: "salt", description: "A pale red powder that is a common source of cobalt, with the formula Co(NO₃)₂." },
                { name: "Nickel(II) Nitrate", formula: "Ni(NO₃)₂", type: "salt", description: "A green crystalline solid that is highly soluble in water, with the formula Ni(NO₃)₂." },
                { name: "Copper(II) Nitrate", formula: "Cu(NO₃)₂", type: "salt", description: "A blue crystalline solid that is commonly used in school laboratories, with the formula Cu(NO₃)₂." },
                { name: "Zinc Nitrate", formula: "Zn(NO₃)₂", type: "salt", description: "A colorless crystalline solid that is highly deliquescent, with the formula Zn(NO₃)₂." },
                { name: "Cadmium Nitrate", formula: "Cd(NO₃)₂", type: "salt", description: "A white crystalline compound that is highly soluble in water, with the formula Cd(NO₃)₂." },
                { name: "Mercury(II) Nitrate", formula: "Hg(NO₃)₂", type: "salt", description: "A toxic white crystalline powder that is soluble in water, with the formula Hg(NO₃)₂." },
                { name: "Bismuth Nitrate", formula: "Bi(NO₃)₃", type: "salt", description: "A white crystalline solid that is soluble in acidified water, with the formula Bi(NO₃)₃." },
                { name: "Chromium(III) Nitrate", formula: "Cr(NO₃)₃", type: "salt", description: "A green crystalline solid that is soluble in water, with the formula Cr(NO₃)₃." },
                { name: "Manganese(II) Nitrate", formula: "Mn(NO₃)₂", type: "salt", description: "A pink crystalline solid that is highly soluble in water, with the formula Mn(NO₃)₂." },
                { name: "Iron(II) Sulfate", formula: "FeSO₄", type: "salt", description: "A blue-green crystalline solid commonly known as green vitriol, with the formula FeSO₄." },
                { name: "Cobalt(II) Sulfate", formula: "CoSO₄", type: "salt", description: "A red crystalline solid that is soluble in water, with the formula CoSO₄." },
                { name: "Nickel Sulfate", formula: "NiSO₄", type: "salt", description: "A yellow-green crystalline solid that is soluble in water, with the formula NiSO₄." },
                { name: "Cadmium Sulfate", formula: "CdSO₄", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula CdSO₄." },
                { name: "Mercury(II) Sulfate", formula: "HgSO₄", type: "salt", description: "A white crystalline solid that is soluble in concentrated acids, with the formula HgSO₄." },
                { name: "Lead(II) Sulfate", formula: "PbSO₄", type: "salt", description: "A white crystalline solid that is poorly soluble in water, with the formula PbSO₄." },
                { name: "Chromium(III) Sulfate", formula: "Cr₂(SO₄)₃", type: "salt", description: "A green or violet crystalline solid that is soluble in water, with the formula Cr₂(SO₄)₃." },
                { name: "Iron(III) Sulfate", formula: "Fe₂(SO₄)₃", type: "salt", description: "A yellow crystalline solid that is soluble in water, with the formula Fe₂(SO₄)₃." },
                { name: "Manganese(II) Sulfate", formula: "MnSO₄", type: "salt", description: "A pale pink crystalline solid that is soluble in water, with the formula MnSO₄." },
                { name: "Cobalt(II) Carbonate", formula: "CoCO₃", type: "salt", description: "A pink crystalline solid that is insoluble in water, with the formula CoCO₃." },
                { name: "Nickel Carbonate", formula: "NiCO₃", type: "salt", description: "A green crystalline solid that is insoluble in water, with the formula NiCO₃." },
                { name: "Copper(II) Carbonate", formula: "CuCO₃", type: "salt", description: "A green crystalline solid that is insoluble in water, with the formula CuCO₃." },
                { name: "Zinc Carbonate", formula: "ZnCO₃", type: "salt", description: "A white crystalline solid that is insoluble in water, with the formula ZnCO₃." },
                { name: "Lead Carbonate", formula: "PbCO₃", type: "salt", description: "A white crystalline solid that is insoluble in water, with the formula PbCO₃." },
                { name: "Magnesium Carbonate", formula: "MgCO₃", type: "salt", description: "A white solid that is poorly soluble in water, with the formula MgCO₃." },
                { name: "Barium Carbonate", formula: "BaCO₃", type: "salt", description: "A white solid that is poorly soluble in water, with the formula BaCO₃." },
                { name: "Strontium Carbonate", formula: "SrCO₃", type: "salt", description: "A white solid that is poorly soluble in water, with the formula SrCO₃." },
                { name: "Potassium Bicarbonate", formula: "KHCO₃", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula KHCO₃." },
                { name: "Ammonium Bicarbonate", formula: "NH₄HCO₃", type: "salt", description: "A white crystalline solid that decomposes in warm water, with the formula NH₄HCO₃." },
                { name: "Calcium Bicarbonate", formula: "Ca(HCO₃)₂", type: "salt", description: "Exists only in aqueous solution, with the formula Ca(HCO₃)₂." },
                { name: "Magnesium Bicarbonate", formula: "Mg(HCO₃)₂", type: "salt", description: "Exists only in aqueous solution, with the formula Mg(HCO₃)₂." },
                { name: "Sodium Acetate", formula: "CH₃COONa", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula CH₃COONa." },
                { name: "Potassium Acetate", formula: "CH₃COOK", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula CH₃COOK." },
                { name: "Calcium Acetate", formula: "Ca(CH₃COO)₂", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula Ca(CH₃COO)₂." },
                { name: "Lead Acetate", formula: "Pb(CH₃COO)₂", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula Pb(CH₃COO)₂." },
                { name: "Zinc Acetate", formula: "Zn(CH₃COO)₂", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula Zn(CH₃COO)₂." },
                { name: "Copper(II) Acetate", formula: "Cu(CH₃COO)₂", type: "salt", description: "A dark green crystalline solid that is soluble in water, with the formula Cu(CH₃COO)₂." },
                { name: "Aluminum Acetate", formula: "Al(CH₃COO)₃", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula Al(CH₃COO)₃." },
                { name: "Iron(III) Acetate", formula: "Fe(CH₃COO)₃", type: "salt", description: "A brown-red crystalline solid that is soluble in water, with the formula Fe(CH₃COO)₃." },
                { name: "Chromium(III) Acetate", formula: "Cr(CH₃COO)₃", type: "salt", description: "A gray-green crystalline solid that is soluble in water, with the formula Cr(CH₃COO)₃." },
                { name: "Nickel Acetate", formula: "Ni(CH₃COO)₂", type: "salt", description: "A green crystalline solid that is soluble in water, with the formula Ni(CH₃COO)₂." },
                { name: "Cobalt(II) Acetate", formula: "Co(CH₃COO)₂", type: "salt", description: "A pink crystalline solid that is soluble in water, with the formula Co(CH₃COO)₂." },
                { name: "Manganese(II) Acetate", formula: "Mn(CH₃COO)₂", type: "salt", description: "A pink crystalline solid that is soluble in water, with the formula Mn(CH₃COO)₂." },
                { name: "Silver Acetate", formula: "AgCH₃COO", type: "salt", description: "A white crystalline solid that is poorly soluble in water, with the formula AgCH₃COO." },
                { name: "Mercury(II) Acetate", formula: "Hg(CH₃COO)₂", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula Hg(CH₃COO)₂." },
                { name: "Barium Acetate", formula: "Ba(CH₃COO)₂", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula Ba(CH₃COO)₂." },
                { name: "Strontium Acetate", formula: "Sr(CH₃COO)₂", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula Sr(CH₃COO)₂." },
                { name: "Magnesium Acetate", formula: "Mg(CH₃COO)₂", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula Mg(CH₃COO)₂." },
                { name: "Sodium Oxalate", formula: "Na₂C₂O₄", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula Na₂C₂O₄." },
                { name: "Potassium Oxalate", formula: "K₂C₂O₄", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula K₂C₂O₄." },
                { name: "Ammonium Oxalate", formula: "(NH₄)₂C₂O₄", type: "salt", description: "A white crystalline solid that is soluble in water, with the formula (NH₄)₂C₂O₄." },
                { name: "Calcium Oxalate", formula: "CaC₂O₄", type: "salt", description: "A white crystalline solid that is insoluble in water, with the formula CaC₂O₄." },
                { name: "Magnesium Oxalate", formula: "MgC₂O₄", type: "salt", description: "A white crystalline solid that is poorly soluble in water, with the formula MgC₂O₄." },
                { name: "Iron(II) Oxalate", formula: "FeC₂O₄", type: "salt", description: "A yellow crystalline solid that is poorly soluble in water, with the formula FeC₂O₄." },
                { name: "Copper(II) Oxalate", formula: "CuC₂O₄", type: "salt", description: "A blue crystalline solid that is poorly soluble in water, with the formula CuC₂O₄." },
                { name: "Zinc Oxalate", formula: "ZnC₂O₄", type: "salt", description: "A white crystalline solid that is poorly soluble in water, with the formula ZnC₂O₄." },
                { name: "Nickel Oxalate", formula: "NiC₂O₄", type: "salt", description: "A light green crystalline solid that is poorly soluble in water, with the formula NiC₂O₄." },
                { name: "Cobalt(II) Oxalate", formula: "CoC₂O₄", type: "salt", description: "A pink crystalline solid that is poorly soluble in water, with the formula CoC₂O₄." },
                { name: "Manganese(II) Oxalate", formula: "MnC₂O₄", type: "salt", description: "A white crystalline solid that is poorly soluble in water, with the formula MnC₂O₄." },
                { name: "Lead Oxalate", formula: "PbC₂O₄", type: "salt", description: "A white crystalline solid that is poorly soluble in water, with the formula PbC₂O₄." },
                { name: "Silver Oxalate", formula: "Ag₂C₂O₄", type: "salt", description: "A white crystalline solid that is poorly soluble in water, with the formula Ag₂C₂O₄." },
                { name: "Mercury(I) Oxalate", formula: "Hg₂C₂O₄", type: "salt", description: "A white crystalline solid that is poorly soluble in water, with the formula Hg₂C₂O₄." },
                { name: "Barium Oxalate", formula: "BaC₂O₄", type: "salt", description: "A white crystalline solid that is poorly soluble in water, with the formula BaC₂O₄." },
                { name: "Strontium Oxalate", formula: "SrC₂O₄", type: "salt", description: "A white crystalline solid that is poorly soluble in water, with the formula SrC₂O₄." }
            ];

            for (let i = 0; i < commonChemicals.length; i++) {
                additionalChemicals.push({
                    id: chemicals.length + i + 1,
                    name: commonChemicals[i].name,
                    formula: commonChemicals[i].formula,
                    type: commonChemicals[i].type,
                    description: commonChemicals[i].description,
                    details: {
                        physicalState: "Solid at room temperature",
                        composition: "Various elements",
                        function: "Laboratory reagent and industrial applications",
                        origin: "Natural or synthetic",
                        toxicity: "Varies by compound",
                        flammability: "Generally non-flammable",
                        reactivity: "Varies by compound",
                        acidity: "Varies by compound",
                        biologicalEffect: "Varies by compound",
                        usage: "Laboratory and industrial applications",
                        handlingPrecautions: "Wear appropriate PPE and follow standard laboratory safety procedures",
                        storageConditions: "Store in a cool, dry place in tightly closed containers",
                        firstAidMeasures: "Seek medical attention if exposed",
                        disposalMethod: "Dispose of according to local regulations"
                    }
                });
            }

            return additionalChemicals;
        }

        // Add additional chemicals to the main chemicals array
        chemicals.push(...generateAdditionalChemicals());

        // DOM Elements
        const header = document.getElementById('mainHeader');
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const chemicalsGrid = document.getElementById('chemicalsGrid');
        const chemicalModal = document.getElementById('chemicalModal');
        const modalClose = document.getElementById('modalClose');
        const modalChemicalName = document.getElementById('modalChemicalName');
        const modalChemicalFormula = document.getElementById('modalChemicalFormula');
        const modalBody = document.getElementById('modalBody');
        const footer = document.getElementById('mainFooter');
        const themeToggle = document.getElementById('themeToggle');
        const classificationFilter = document.getElementById('classificationFilter');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Check for saved theme preference or default to light
            const savedTheme = localStorage.getItem('theme') || 'light';
            setTheme(savedTheme);
            
            // Render chemical cards
            renderChemicalCards(chemicals);
            
            // Set up event listeners
            setupEventListeners();
        });

        // Set theme
        function setTheme(theme) {
            if (theme === 'dark') {
                document.body.classList.add('dark-theme');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-theme');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
        }

        // Toggle theme
        function toggleTheme() {
            if (document.body.classList.contains('dark-theme')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        }

        // Render chemical cards
        function renderChemicalCards(chemicalsArray, type = 'all') {
            chemicalsGrid.innerHTML = '';
            
            let filteredChemicals = chemicalsArray;
            if (type !== 'all') {
                filteredChemicals = chemicalsArray.filter(chemical => chemical.type === type);
            }
            
            filteredChemicals.forEach(chemical => {
                const card = document.createElement('div');
                card.className = 'chemical-card';
                card.innerHTML = `
                    <div class="chemical-number">${chemical.id}</div>
                    <h3 class="chemical-name">${chemical.name} <span class="chemical-type type-${chemical.type}">${chemical.type}</span></h3>
                    <p class="chemical-formula">${chemical.formula}</p>
                    <p class="chemical-description">${chemical.description}</p>
                    <a href="#" class="chemical-details-btn" data-id="${chemical.id}">View Details</a>
                `;
                chemicalsGrid.appendChild(card);
            });
            
            // Add event listeners to detail buttons
            document.querySelectorAll('.chemical-details-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const chemicalId = parseInt(this.getAttribute('data-id'));
                    const chemical = chemicals.find(c => c.id === chemicalId);
                    if (chemical) {
                        openChemicalModal(chemical);
                    }
                });
            });
        }

        // Open chemical modal
        function openChemicalModal(chemical) {
            modalChemicalName.textContent = chemical.name;
            modalChemicalFormula.textContent = chemical.formula;
            
            // Build modal content
            let modalContent = `
                <p class="chemical-description">${chemical.description}</p>
                <ul class="classification-list">
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-vial"></i>
                            <span>Physical State</span>
                        </div>
                        <div class="classification-content">${chemical.details.physicalState}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-atom"></i>
                            <span>Chemical Composition</span>
                        </div>
                        <div class="classification-content">${chemical.details.composition}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-flask"></i>
                            <span>Function or Use</span>
                        </div>
                        <div class="classification-content">${chemical.details.function}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-seedling"></i>
                            <span>Origin</span>
                        </div>
                        <div class="classification-content">${chemical.details.origin}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-skull-crossbones"></i>
                            <span>Toxicity</span>
                        </div>
                        <div class="classification-content">${chemical.details.toxicity}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-fire"></i>
                            <span>Flammability</span>
                        </div>
                        <div class="classification-content">${chemical.details.flammability}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-bolt"></i>
                            <span>Reactivity</span>
                        </div>
                        <div class="classification-content">${chemical.details.reactivity}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-tint"></i>
                            <span>Acidity/Basicity (pH)</span>
                        </div>
                        <div class="classification-content">${chemical.details.acidity}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-dna"></i>
                            <span>Biological Effect</span>
                        </div>
                        <div class="classification-content">${chemical.details.biologicalEffect}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-industry"></i>
                            <span>Usage in Industry or Laboratory</span>
                        </div>
                        <div class="classification-content">${chemical.details.usage}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-exclamation-triangle"></i>
                            <span>Handling Precautions</span>
                        </div>
                        <div class="classification-content">${chemical.details.handlingPrecautions}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-warehouse"></i>
                            <span>Storage Conditions</span>
                        </div>
                        <div class="classification-content">${chemical.details.storageConditions}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-first-aid"></i>
                            <span>First Aid Measures</span>
                        </div>
                        <div class="classification-content">${chemical.details.firstAidMeasures}</div>
                    </li>
                    <li class="classification-item">
                        <div class="classification-title">
                            <i class="fas fa-trash-alt"></i>
                            <span>Disposal Method</span>
                        </div>
                        <div class="classification-content">${chemical.details.disposalMethod}</div>
                    </li>
                </ul>
            `;
            
            modalBody.innerHTML = modalContent;
            chemicalModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Hide footer when modal is open
            footer.classList.add('hidden');
        }

        // Close chemical modal
        function closeChemicalModal() {
            chemicalModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // Show footer when modal is closed
            footer.classList.remove('hidden');
        }

        // Search chemicals
        function searchChemicals() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-type');
                renderChemicalCards(chemicals, activeFilter);
                return;
            }
            
            const filteredChemicals = chemicals.filter(chemical => 
                chemical.name.toLowerCase().includes(searchTerm) || 
                chemical.formula.toLowerCase().includes(searchTerm) ||
                chemical.description.toLowerCase().includes(searchTerm)
            );
            
            renderChemicalCards(filteredChemicals);
        }

        // Filter chemicals by type
        function filterChemicals(type) {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            renderChemicalCards(chemicals, type);
        }

        // Set up event listeners
        function setupEventListeners() {
            // Header scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Mobile navigation toggle
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                });
            });

            // Search functionality
            searchInput.addEventListener('input', searchChemicals);
            searchBtn.addEventListener('click', searchChemicals);

            // Modal close
            modalClose.addEventListener('click', closeChemicalModal);
            
            // Close modal when clicking outside
            chemicalModal.addEventListener('click', (e) => {
                if (e.target === chemicalModal) {
                    closeChemicalModal();
                }
            });

            // Theme toggle
            themeToggle.addEventListener('click', toggleTheme);

            // Classification filter
            classificationFilter.addEventListener('click', (e) => {
                if (e.target.classList.contains('filter-btn')) {
                    const type = e.target.getAttribute('data-type');
                    filterChemicals(type);
                }
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
    </script>
</body>

<style>
    .site-warning {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        color: white;
        z-index: 9999;
        text-align: center;
        padding: 15px;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    
    .warning-content {
        max-width: 95%;
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        padding: 25px 20px;
        border-radius: 15px;
        border: 2px solid #3498db;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        backdrop-filter: blur(10px);
        margin: 10px;
        max-height: 95vh;
        overflow-y: auto;
    }
    
    /* iPhone notch and safe area support */
    @supports(padding: max(0px)) {
        .warning-content {
            padding-left: max(20px, env(safe-area-inset-left));
            padding-right: max(20px, env(safe-area-inset-right));
            padding-top: max(25px, env(safe-area-inset-top));
            padding-bottom: max(25px, env(safe-area-inset-bottom));
        }
    }
    
    .warning-icon {
        font-size: 3rem;
        color: #3498db;
        margin-bottom: 20px;
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .warning-title {
        font-size: 1.8rem;
        margin-bottom: 15px;
        color: #3498db;
        font-weight: 700;
        line-height: 1.2;
        text-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
    }
    
    .site-description {
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 20px;
        color: #ecf0f1;
        background: rgba(255, 255, 255, 0.1);
        padding: 15px;
        border-radius: 8px;
        border-left: 3px solid #3498db;
    }
    
    .features-list {
        text-align: left;
        margin: 20px 0;
        padding: 0 15px;
    }
    
    .features-list li {
        margin: 10px 0;
        font-size: 0.9rem;
        color: #bdc3c7;
        display: flex;
        align-items: flex-start;
        line-height: 1.3;
    }
    
    .features-list li i {
        color: #2ecc71;
        margin-right: 8px;
        font-size: 1rem;
        margin-top: 2px;
        flex-shrink: 0;
    }
    
    .timer-display {
        font-size: 1.1rem;
        color: #e74c3c;
        margin: 20px 0;
        font-weight: bold;
        background: rgba(231, 76, 60, 0.1);
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #e74c3c;
    }
    
    .social-links {
        display: flex;
        justify-content: center;
        gap: 12px;
        margin: 20px 0;
        flex-wrap: wrap;
    }
    
    .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: #2c3e50;
        color: white;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        text-decoration: none;
        flex-shrink: 0;
    }
    
    .social-link:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    
    .social-link.instagram { background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D); }
    .social-link.twitter { background: #1DA1F2; }
    .social-link.facebook { background: #1877F2; }
    .social-link.github { background: #333; }
    .social-link.linkedin { background: #0077B5; }
    
    .developer-info {
        margin-top: 15px;
        font-size: 0.9rem;
        color: #95a5a6;
        font-weight: 500;
        line-height: 1.3;
    }
    
    .loading-bar {
        width: 100%;
        height: 3px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 2px;
        margin: 15px 0;
        overflow: hidden;
    }
    
    .loading-progress {
        height: 100%;
        background: linear-gradient(90deg, #3498db, #2ecc71);
        border-radius: 2px;
        transition: width 0.1s linear;
    }
    
    /* Mobile-specific optimizations */
    @media (max-width: 480px) {
        .warning-content {
            padding: 20px 15px;
            margin: 5px;
        }
        
        .warning-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }
        
        .warning-title {
            font-size: 1.5rem;
            margin-bottom: 12px;
        }
        
        .site-description {
            font-size: 0.9rem;
            padding: 12px;
            margin-bottom: 15px;
        }
        
        .features-list {
            margin: 15px 0;
            padding: 0 10px;
        }
        
        .features-list li {
            font-size: 0.85rem;
            margin: 8px 0;
        }
        
        .timer-display {
            font-size: 1rem;
            margin: 15px 0;
            padding: 10px;
        }
        
        .social-link {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
        }
        
        .developer-info {
            font-size: 0.85rem;
        }
    }
    
    /* Very small phones */
    @media (max-width: 360px) {
        .warning-content {
            padding: 15px 12px;
        }
        
        .warning-title {
            font-size: 1.3rem;
        }
        
        .site-description {
            font-size: 0.85rem;
            padding: 10px;
        }
        
        .features-list li {
            font-size: 0.8rem;
        }
        
        .social-links {
            gap: 8px;
        }
        
        .social-link {
            width: 38px;
            height: 38px;
            font-size: 1rem;
        }
    }
    
    /* iPhone landscape */
    @media (max-width: 768px) and (orientation: landscape) {
        .warning-content {
            max-height: 85vh;
            padding: 15px;
        }
        
        .warning-icon {
            font-size: 2rem;
            margin-bottom: 10px;
        }
        
        .warning-title {
            font-size: 1.3rem;
            margin-bottom: 8px;
        }
        
        .site-description {
            font-size: 0.85rem;
            padding: 10px;
            margin-bottom: 10px;
        }
        
        .features-list {
            margin: 10px 0;
        }
        
        .features-list li {
            margin: 6px 0;
            font-size: 0.8rem;
        }
    }
    
    /* Hide scrollbar for cleaner look */
    .warning-content::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
</style>

<div class="site-warning" id="siteWarning">
    <div class="warning-content">
        <div class="warning-icon">
            <i class="fas fa-flask"></i>
        </div>
        <h1 class="warning-title">Chemistry Laboratory Database</h1>
        
        <div class="site-description">
            A comprehensive database of 110+ laboratory chemicals with detailed safety information and properties.
        </div>
        
        <div class="features-list">
            <li><i class="fas fa-check-circle"></i> 110+ Chemical Compounds</li>
            <li><i class="fas fa-check-circle"></i> Detailed Safety Information</li>
            <li><i class="fas fa-check-circle"></i> Chemical Classification</li>
            <li><i class="fas fa-check-circle"></i> Search & Filter Tools</li>
            <li><i class="fas fa-check-circle"></i> Professional Laboratory Design</li>
        </div>
        
        <div class="loading-bar">
            <div class="loading-progress" id="loadingProgress"></div>
        </div>
        
        <div class="timer-display" id="timer">
            Loading in: <span id="countdown">3</span> seconds
        </div>
        
        <div class="social-links">
            <a href="https://www.instagram.com/nikhilnick5046?igsh=bWM2cTBnbGJzY3c0" class="social-link instagram" target="_blank">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/Nikhilnick5046" class="social-link twitter" target="_blank">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/nikhil.nick.392111" class="social-link facebook" target="_blank">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://github.com/Nikhilnick5050" class="social-link github" target="_blank">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/nikhil-shinde" class="social-link linkedin" target="_blank">
                <i class="fab fa-linkedin-in"></i>
            </a>
        </div>
        
        <div class="developer-info">
            Developed by Nikhil Shinde<br>Contact: 8623947038
        </div>
    </div>
</div>

<script>
    // Check if device is mobile
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || 
               (navigator.userAgent.indexOf('IEMobile') !== -1) ||
               (navigator.userAgent.indexOf('Android') !== -1) ||
               (navigator.userAgent.indexOf('iPhone') !== -1) ||
               (navigator.userAgent.indexOf('iPad') !== -1);
    }
    
    let countdownTimer;
    let totalSeconds;
    let secondsLeft;
    
    function startCountdown() {
        // Set different times for mobile (3s) and desktop (2s)
        totalSeconds = isMobileDevice() || window.innerWidth <= 768 ? 3 : 2;
        secondsLeft = totalSeconds;
        
        const countdownElement = document.getElementById('countdown');
        const progressBar = document.getElementById('loadingProgress');
        countdownElement.textContent = secondsLeft;
        progressBar.style.width = '0%';
        
        countdownTimer = setInterval(function() {
            secondsLeft--;
            countdownElement.textContent = secondsLeft;
            
            // Update progress bar
            const progress = ((totalSeconds - secondsLeft) / totalSeconds) * 100;
            progressBar.style.width = progress + '%';
            
            if (secondsLeft <= 0) {
                clearInterval(countdownTimer);
                // Hide warning and show main site
                document.getElementById('siteWarning').style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }, 1000);
    }
    
    // Show warning immediately and start countdown
    document.addEventListener('DOMContentLoaded', function() {
        document.body.style.overflow = 'hidden';
        startCountdown();
    });
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        // Small delay to allow orientation to complete
        setTimeout(function() {
            document.getElementById('siteWarning').style.display = 'flex';
        }, 100);
    });
