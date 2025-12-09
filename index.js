// Chemical data with all the chemicals
const chemicals = [
    // A. ACIDS (1-10 completed)
    {
        id: 1,
        name: "Hydrochloric Acid (Muriatic Acid)",
        formula: "HCl",
        type: "acid",
        description: "Hydrochloric acid is a strong, highly corrosive mineral acid with a pungent odor. It's a colorless to slightly yellow liquid that fumes in moist air. This acid is naturally present in gastric juice (stomach acid) where it helps digest food and kill bacteria. Industrially, it's produced by dissolving hydrogen chloride gas in water. Concentrations range from dilute solutions (5-10%) used in household cleaning to concentrated forms (30-38%) used in industrial applications. It's essential in steel pickling (removing rust), ore processing, chemical synthesis, and pH adjustment in swimming pools. When diluted, it's used in toilet bowl cleaners and masonry cleaners. The acid is highly reactive with metals, producing hydrogen gas, and with bases (neutralization reactions). Proper handling requires acid-resistant PPE including face shields, rubber gloves, and aprons. First aid for exposure involves immediate, prolonged flushing with water (15-20 minutes for skin/eye contact) and never inducing vomiting if ingested.",
        details: {
            physicalState: "Colorless to light yellow fuming liquid with sharp, irritating odor. Density approximately 1.18 g/cm³ for concentrated solutions.",
            composition: "Hydrogen chloride gas dissolved in water. Commercial grades typically 30-38% HCl by weight. Azeotrope forms at 20.2% HCl.",
            function: "Strong mineral acid used for pH adjustment, metal cleaning (pickling), chemical synthesis (chlorides production), regeneration of ion exchange resins, food processing (corn syrup production), and laboratory reagent.",
            origin: "Primarily manufactured by burning hydrogen in chlorine (direct synthesis) or as byproduct from chlorination of organic compounds. Historically from heating salt with sulfuric acid.",
            toxicity: "Highly corrosive - causes severe burns to all tissues. Inhalation causes respiratory tract damage. Chronic exposure leads to dental erosion and respiratory issues. TLV-TWA: 5 ppm (ceiling). LD50 (oral, rat): 900 mg/kg.",
            flammability: "Non-flammable but reacts with metals to produce flammable hydrogen gas. Reacts violently with strong oxidizers, carbides, borides, and sulfides.",
            reactivity: "Extremely corrosive to metals. Reacts exothermically with bases. Attacks most metals producing hydrogen gas. Incompatible with cyanides, sulfides, carbides, and many organic compounds.",
            acidity: "Strong acid with pKa = -6.3. 1M solution has pH approximately 0. Concentrated solutions (12M) have negative pH values.",
            biologicalEffect: "Concentrated: Severe tissue damage, blindness on eye contact. Dilute: Skin irritation, respiratory irritation. Chronic: Dental erosion, bronchitis. Biological role in stomach digestion at 0.5% concentration.",
            usage: "Steel pickling (25-30%), chemical manufacturing (dyes, fertilizers, rubber), food processing (HFCS production, gelatin), oil well acidizing, laboratory analysis, pH control, swimming pool maintenance.",
            handlingPrecautions: "Use in chemical fume hood. Wear chemical goggles, face shield, acid-resistant gloves (neoprene, nitrile), apron. Never add water to acid - always add acid to water slowly. Store separately from bases, oxidizers, and metals. Use non-metallic containers (HDPE, glass).",
            storageConditions: "Store in cool, dry, well-ventilated area in corrosion-resistant containers. Keep away from alkalis, oxidizing agents, and metals. Temperature below 30°C. Secondary containment required. Label clearly with corrosion warning.",
            firstAidMeasures: "INHALATION: Move to fresh air, rest in position comfortable for breathing. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash with plenty of water and soap for 15-20 minutes. Seek medical attention. EYE CONTACT: Rinse immediately with plenty of water for at least 15 minutes, lifting eyelids occasionally. Seek immediate medical attention. INGESTION: Rinse mouth. Do NOT induce vomiting. Drink 2-4 glasses of water. Never give anything by mouth to unconscious person. Seek immediate medical attention.",
            disposalMethod: "Neutralize with sodium carbonate or calcium hydroxide to pH 6.5-8.5. Small quantities can be flushed with large volumes of water. Large quantities require professional hazardous waste disposal. Never mix with bleach (produces toxic chlorine gas)."
        }
    },
    {
        id: 2,
        name: "Sulfuric Acid (Oil of Vitriol)",
        formula: "H₂SO₄",
        type: "acid",
        description: "Sulfuric acid is a dense, oily, highly corrosive strong mineral acid, often called the 'king of chemicals' due to its immense industrial importance. At 98% concentration, it's a viscous, colorless to dark brown liquid depending on purity. It has exceptional dehydrating and oxidizing properties, making it crucial in fertilizer production (superphosphates, ammonium sulfate), petroleum refining, wastewater processing, and chemical synthesis. The acid is produced via the Contact Process (oxidation of sulfur dioxide to sulfur trioxide, then absorption in concentrated sulfuric acid). It reacts violently with water, releasing tremendous heat - proper dilution requires adding acid slowly to water while stirring. Sulfuric acid causes severe chemical burns through dehydration and heat generation. Concentrated acid chars organic materials (paper, wood, sugar) by removing water molecules. Industrial safety protocols are stringent due to its extreme hazards. First aid emphasizes immediate, copious water flushing and specialized medical treatment for burns.",
        details: {
            physicalState: "Colorless to dark brown viscous liquid, odorless. Density 1.84 g/cm³ (98%). Boiling point: 337°C. Highly hygroscopic.",
            composition: "Pure H₂SO₄ is 98-99% concentration. Oleum (fuming sulfuric acid) contains excess SO₃. Battery acid is 30-50% solution.",
            function: "Strong acid, dehydrating agent, catalyst, electrolyte in lead-acid batteries. Principal uses: fertilizer production (50%), chemical manufacturing, petroleum refining, metal processing, wastewater treatment.",
            origin: "Manufactured via Contact Process: S → SO₂ → SO₃ → H₂SO₄. World production: ~260 million tons annually. Historically from heating iron sulfate (green vitriol).",
            toxicity: "Extremely corrosive - causes severe burns, tissue necrosis. Inhalation of mist causes lung damage. Chronic exposure: dental erosion, bronchitis. TLV-TWA: 0.2 mg/m³ (mist). LD50 (oral, rat): 2140 mg/kg.",
            flammability: "Non-flammable but reacts violently with water generating heat. Oxidizer - can ignite combustible materials. Reacts explosively with chlorates, perchlorates, permanganates.",
            reactivity: "Powerful dehydrating agent - chars organic materials. Reacts violently with water, bases, reducing agents, combustible materials. Attacks most metals, producing hydrogen gas. Incompatible with hundreds of chemicals.",
            acidity: "Very strong acid with pKa₁ = -3, pKa₂ = 1.99. 1M solution pH ~0. Concentrated acid has negative pH due to Hammett acidity function.",
            biologicalEffect: "Immediate tissue destruction through dehydration and heat. Eye exposure: corneal damage, blindness. Inhalation: pulmonary edema, chemical pneumonia. Chronic: respiratory issues, tooth erosion. No essential biological function.",
            usage: "Fertilizer production (50%), chemical manufacturing, petroleum refining, metal processing (pickling), lead-acid batteries (30-50% solution), detergent manufacture, laboratory reagent, dehydrating agent.",
            handlingPrecautions: "Mandatory use in chemical fume hood. Full face shield, acid-resistant gloves (butyl rubber), acid-resistant suit. Acid-resistant boots. Never add water to acid - violent reaction. Use polyethylene or glass containers. Strict no-smoking policy.",
            storageConditions: "Store in cool, dry, well-ventilated area. Secondary containment required. Keep away from water, organic materials, metals, bases. Temperature below 30°C. Use dedicated sulfuric acid storage tanks (steel for 93-98%, lead for lower concentrations).",
            firstAidMeasures: "INHALATION: Move to fresh air immediately. Give oxygen if breathing difficult. Seek immediate medical attention - watch for delayed pulmonary edema (up to 48 hours). SKIN CONTACT: Remove contaminated clothing immediately. Flood with water for 30-60 minutes. Do NOT use neutralizing agents. Seek immediate medical attention. EYE CONTACT: Rinse immediately with gently flowing water for at least 30 minutes, holding eyelids open. Seek immediate medical attention - eye damage may be irreversible. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Drink 2-4 glasses of water or milk if conscious. Never give anything by mouth to unconscious person. Seek immediate medical attention.",
            disposalMethod: "Neutralize slowly with soda ash or lime to pH 6.5-8.5. Large quantities require professional hazardous waste management. Never mix with organic waste or reducing agents. Local regulations may require special permits for disposal."
        }
    },
    {
        id: 3,
        name: "Nitric Acid (Aqua Fortis)",
        formula: "HNO₃",
        type: "acid",
        description: "Nitric acid is a highly corrosive, strongly oxidizing mineral acid that appears colorless to yellow/red-brown due to decomposition into nitrogen oxides. It has a characteristic choking, acrid odor and fumes in moist air. The acid is fundamental in fertilizer production (ammonium nitrate), explosives manufacturing (TNT, nitroglycerin), metal etching, and as a laboratory reagent for nitration reactions. Concentrations range from dilute (5-10%) to fuming nitric acid (over 86%). It attacks most metals except gold and platinum, forming nitrate salts and releasing toxic nitrogen oxides. The acid causes severe chemical burns and stains skin yellow due to xanthoproteic reaction with proteins. Production occurs via the Ostwald Process (oxidation of ammonia). Safety protocols are critical due to its combination of corrosivity, oxidizing power, and toxicity. First aid requires immediate decontamination and medical evaluation, particularly for inhalation exposure which can cause delayed pulmonary edema.",
        details: {
            physicalState: "Colorless to yellow/red-brown fuming liquid with pungent, choking odor. Density: 1.51 g/cm³ (concentrated). Boiling point: 83°C (azeotrope at 68%).",
            composition: "Commercial grades: 52%, 68% (azeotropic), and fuming nitric acid (86-98%). Red fuming acid contains dissolved NO₂.",
            function: "Strong acid and powerful oxidizing agent. Used in nitration reactions, fertilizer production, explosives, metal processing, rocket propellant, laboratory analysis.",
            origin: "Manufactured via Ostwald Process: NH₃ → NO → NO₂ → HNO₃. World production: ~60 million tons annually. Historically from heating saltpeter with sulfuric acid.",
            toxicity: "Highly corrosive - causes severe burns. Inhalation causes pulmonary edema, bronchiolitis obliterans. Chronic exposure: dental erosion, bronchitis. TLV-TWA: 2 ppm (vapor), 4 mg/m³ (mist). LD50 (oral, rat): 430 mg/kg.",
            flammability: "Non-flammable but strong oxidizer - ignites combustible materials. Forms explosive mixtures with organic compounds. Reacts violently with reducing agents.",
            reactivity: "Strong oxidizer - reacts violently with many organic compounds, metals (except Au, Pt, Ir), carbides, cyanides, sulfides. Attacks rubber, plastics. Yellow color indicates decomposition to NO₂.",
            acidity: "Strong acid with pKa = -1.4. 1M solution pH ~0. Oxidizing power increases with concentration.",
            biologicalEffect: "Severe tissue damage through acid corrosion and oxidation. Skin: yellow stains (xanthoproteic reaction), deep burns. Eyes: corneal damage, blindness. Inhalation: pulmonary edema (delayed onset). Chronic: respiratory damage, tooth erosion.",
            usage: "Fertilizer production (ammonium nitrate, 75% of use), explosives manufacturing, nylon production (adipic acid), metal etching/pickling, uranium processing, laboratory reagent, rocket propellant oxidizer.",
            handlingPrecautions: "Use in chemical fume hood with scrubber. Full face shield, acid-resistant gloves (butyl, neoprene), acid-resistant suit. Store away from organic materials, reducing agents. Use glass or stainless steel containers. Monitor for NO₂ formation (brown fumes).",
            storageConditions: "Store in cool, dark, well-ventilated area in amber glass or stainless steel containers. Keep below 25°C. Separate from organic materials, reducing agents, combustible materials. Protect from light to prevent decomposition. Secondary containment required.",
            firstAidMeasures: "INHALATION: Move to fresh air immediately. Administer oxygen if breathing difficult. Seek immediate medical attention - delayed pulmonary edema possible for 48 hours. SKIN CONTACT: Remove contaminated clothing. Flood with water for 30 minutes. Seek immediate medical attention. EYE CONTACT: Rinse immediately with gently flowing water for at least 30 minutes, holding eyelids open. Seek immediate medical attention immediately. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Drink water or milk if conscious. Never give anything by mouth to unconscious person. Seek immediate medical attention.",
            disposalMethod: "Neutralize with soda ash or lime to pH 6.5-8.5 in fume hood. Large quantities require professional hazardous waste disposal. Never mix with organic materials, reducing agents, or combustible materials. Produces toxic NOx gases during neutralization."
        }
    },
    {
        id: 4,
        name: "Acetic Acid (Ethanoic Acid)",
        formula: "CH₃COOH",
        type: "acid",
        description: "Acetic acid is a colorless organic acid with a characteristic pungent, vinegar-like odor. It exists as glacial acetic acid (99-100% concentration) which freezes at 16.7°C, and as vinegar (4-8% solution). The acid is produced via methanol carbonylation or by bacterial fermentation of ethanol (vinegar production). It's a weak acid compared to mineral acids but concentrated glacial acetic acid is corrosive and can cause severe burns. Industrial uses include vinyl acetate monomer production (for paints, adhesives), terephthalic acid (PET plastic), cellulose acetate (photographic film, textiles), and as a solvent. In food, it's used as acidulant, preservative, and condiment. Safety handling varies dramatically between glacial (hazardous) and dilute (food-grade) forms. First aid for glacial acetic acid exposure emphasizes water flushing and medical attention for serious exposures.",
        details: {
            physicalState: "Colorless liquid with pungent, vinegar odor. Glacial form freezes at 16.7°C. Density: 1.05 g/cm³. Boiling point: 118°C.",
            composition: "Glacial acetic acid: ≥99% CH₃COOH. Vinegar: 4-8% in water. Industrial grades: 80%, 99%.",
            function: "Weak organic acid, solvent, chemical intermediate. Used in vinyl acetate production, food acidulant, cellulose acetate, laboratory reagent.",
            origin: "Industrial: methanol carbonylation (Monsanto/Cativa process). Biological: fermentation of ethanol by Acetobacter. World production: ~15 million tons annually.",
            toxicity: "Glacial: corrosive - causes burns. Inhalation irritates respiratory tract. Dilute: low toxicity. TLV-TWA: 10 ppm (25 mg/m³). LD50 (oral, rat): 3530 mg/kg.",
            flammability: "Flammable liquid (flash point: 39°C). Vapors form explosive mixtures with air (4-20%).",
            reactivity: "Weak acid - reacts with bases, carbonates, metals (slowly). Concentrated form attacks many plastics, rubber. Incompatible with oxidizers, strong bases.",
            acidity: "Weak acid with pKa = 4.76. 1M solution pH ~2.4. Glacial acid has Hammett acidity function H₀ = -1.",
            biologicalEffect: "Glacial: corrosive burns, respiratory irritation. Dilute: generally safe (vinegar). Chronic exposure to vapors: respiratory irritation, dental erosion. Metabolized to CO₂ and water.",
            usage: "Vinyl acetate monomer production (30%), acetic anhydride (cellulose acetate), terephthalic acid (PET), food industry (vinegar, preservative), solvents, laboratory reagent, textile printing.",
            handlingPrecautions: "Glacial: use in fume hood. Wear chemical goggles, gloves (nitrile, neoprene), lab coat. Store away from oxidizers, bases. Use polyethylene or glass containers. Dilute: normal laboratory precautions.",
            storageConditions: "Store in cool, well-ventilated area away from heat, ignition sources. Keep containers tightly closed. Glacial: store above 17°C to prevent freezing. Separate from oxidizing agents, bases. Use polyethylene, stainless steel, or glass.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek medical attention if symptoms persist. SKIN CONTACT: Remove contaminated clothing. Wash with plenty of soap and water for 15 minutes. For glacial acid: seek medical attention for burns. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes, holding eyelids open. For glacial acid: seek medical attention. INGESTION: Dilute glacial acid: drink 2-4 glasses of water. Do NOT induce vomiting. Seek medical attention for large ingestions. Vinegar: rinse mouth, drink water.",
            disposalMethod: "Small quantities: neutralize with sodium carbonate to pH 6.5-8.5, flush with plenty of water. Large quantities: professional hazardous waste disposal. Never discharge concentrated acid to sewer."
        }
    },
    {
        id: 5,
        name: "Oxalic Acid (Ethanedioic Acid)",
        formula: "H₂C₂O₄",
        type: "acid",
        description: "Oxalic acid is a strong dicarboxylic acid that occurs naturally in many plants as calcium oxalate crystals (rhubarb leaves, spinach, sorrel). It exists as colorless crystals or white powder that dissolve in water to give acidic solutions. The acid and its salts (oxalates) are reducing agents and chelating agents for metal ions. Industrial applications include rust removal (iron(III) complexation), bleaching (especially wood), cleaning (mineral deposits), and as a mordant in dyeing. Toxicity arises from systemic effects: oxalate ions precipitate calcium as calcium oxalate crystals in kidneys, causing renal damage and hypocalcemia. Fatal doses for adults are 15-30 grams. Safety protocols emphasize preventing ingestion and inhalation of dust. First aid focuses on dilution for ingestion and calcium administration to counteract systemic effects under medical supervision.",
        details: {
            physicalState: "Colorless crystals or white crystalline powder. Dihydrate common. Odorless. Density: 1.90 g/cm³ (anhydrous).",
            composition: "Anhydrous or dihydrate (COOH)₂·2H₂O. Often sold as dihydrate. Pure crystals are transparent.",
            function: "Reducing agent, chelating agent, bleaching agent, rust remover, cleaning agent, analytical reagent, mordant in dyeing.",
            origin: "Natural: plants (rhubarb, spinach, sorrel). Industrial: oxidation of carbohydrates with nitric acid or air oxidation of glycols.",
            toxicity: "Harmful if swallowed, inhaled, or absorbed through skin. Causes kidney damage (calcium oxalate crystals), hypocalcemia. LD50 (oral, rat): 375 mg/kg. Chronic: kidney stones, renal failure.",
            flammability: "Non-flammable but decomposes at 157°C producing toxic gases (CO, CO₂, formic acid). Dust may explode.",
            reactivity: "Reducing agent - reacts with oxidizers. Chelates metal ions (Fe, Ca, Mg). Decomposes when heated. Incompatible with silver, strong bases, chlorites.",
            acidity: "Relatively strong organic acid: pKa₁ = 1.25, pKa₂ = 4.14. 0.1M solution pH ~1.3.",
            biologicalEffect: "Acute: gastrointestinal corrosion, kidney damage from calcium oxalate crystallization, hypocalcemia, cardiac arrhythmias. Chronic: kidney stones, renal impairment. No essential biological function - metabolic waste product.",
            usage: "Rust removal, bleaching (wood, straw), cleaning (mineral deposits), beekeeping (varroa mite control), analytical chemistry, textile finishing, aluminum anodizing, marble cleaning.",
            handlingPrecautions: "Use dust mask to prevent inhalation. Wear gloves, goggles, lab coat. Avoid contact with skin, eyes. Do not eat, drink, or smoke in area. Use local exhaust ventilation.",
            storageConditions: "Store in tightly closed container in cool, dry, well-ventilated area. Keep away from oxidizers, bases, food, feed. Temperature below 30°C. Protect from moisture.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash with plenty of soap and water. Seek medical attention if irritation persists. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention. INGESTION: Rinse mouth. Do NOT induce vomiting. Drink 2-4 glasses of water. Seek IMMEDIATE medical attention - calcium administration may be needed. Never give anything by mouth to unconscious person.",
            disposalMethod: "Dissolve in water, neutralize with sodium carbonate to pH 6.5-8.5. Small quantities can be flushed with plenty of water. Large quantities require professional hazardous waste disposal. Never mix with bleach."
        }
    },
    {
        id: 6,
        name: "Boric Acid (Boracic Acid)",
        formula: "H₃BO₃",
        type: "acid",
        description: "Boric acid is a weak monobasic Lewis acid that occurs as colorless crystals or white powder. It's soluble in water and has mild antiseptic, antifungal, and insecticidal properties. The acid is derived from borax minerals and is used extensively as an eyewash (in dilute solution), insecticide (especially against cockroaches, ants, and fleas), flame retardant, neutron absorber in nuclear reactors, and preservative. Despite low acute toxicity, it's hazardous if ingested, particularly by children, causing nausea, vomiting, diarrhea, and in severe cases, kidney damage and death. Chronic exposure affects male reproductive system and development. Safety protocols emphasize preventing ingestion and controlling dust. First aid focuses on removing contaminated material and seeking medical attention for significant exposures.",
        details: {
            physicalState: "White crystalline powder or colorless plates. Greasy feel. Odorless. Density: 1.44 g/cm³. Sublimes at 300°C.",
            composition: "Orthoboric acid H₃BO₃. Often contains water of crystallization. Technical grade may contain impurities.",
            function: "Weak acid, antiseptic, insecticide, flame retardant, neutron absorber, buffer, preservative, eyewash component.",
            origin: "Occurs naturally as sassolite mineral. Industrially from reaction of borax with mineral acid or from boron-rich brines.",
            toxicity: "Low acute toxicity but harmful if swallowed, inhaled, or absorbed through skin. LD50 (oral, rat): 2660 mg/kg. Chronic: testicular atrophy, developmental toxicity. Not classifiable as carcinogen.",
            flammability: "Non-flammable. Actually used as flame retardant. Decomposes at 300°C forming boric oxide.",
            reactivity: "Weak acid - reacts with bases. Forms complexes with polyols (sugar, glycerol). Dehydrates to metaboric acid then boric oxide when heated.",
            acidity: "Very weak acid: pKa = 9.24 (25°C). 0.1M solution pH ~5.1. Acts as Lewis acid accepting OH⁻.",
            biologicalEffect: "Acute: gastrointestinal irritation, CNS depression, renal damage in large doses. Chronic: reproductive toxicity (testicular atrophy), developmental effects. Essential micronutrient for plants, possibly for humans in trace amounts.",
            usage: "Eyewash solutions (2% buffered), insecticide (roach powders), flame retardant (cellulose insulation), nuclear reactor control rods, wood preservative, antiseptic, buffer solutions, welding flux.",
            handlingPrecautions: "Avoid dust formation. Wear dust mask, gloves, goggles. Do not eat, drink, or smoke in area. Use local exhaust ventilation. Keep away from children.",
            storageConditions: "Store in tightly closed container in cool, dry, well-ventilated area. Keep away from food, feed. Temperature below 30°C. Protect from moisture.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash with plenty of soap and water. Seek medical attention if irritation persists. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention if irritation persists. INGESTION: Rinse mouth. Do NOT induce vomiting. Drink 2-4 glasses of water. Seek medical attention, especially for children. Never give anything by mouth to unconscious person.",
            disposalMethod: "Dissolve in water, neutralize with sodium carbonate to pH 6.5-8.5. Small quantities can be flushed with plenty of water. Large quantities require professional hazardous waste disposal. Consider recycling due to boron value."
        }
    },
    {
        id: 7,
        name: "Carbonic Acid",
        formula: "H₂CO₃",
        type: "acid",
        description: "Carbonic acid is a weak, unstable acid that forms when carbon dioxide dissolves in water. It doesn't exist as a pure compound at standard conditions, decomposing to CO₂ and H₂O. The acid is crucial in biological systems as part of the bicarbonate buffer system that maintains blood pH (7.35-7.45). It's also responsible for the 'fizz' in carbonated beverages and contributes to chemical weathering of rocks (carbonation). In the environment, it forms when atmospheric CO₂ dissolves in rainwater, creating slightly acidic rain (pH ~5.6). Safety concerns are minimal as it decomposes rapidly and is part of normal biological processes. However, high concentrations of CO₂ (which forms carbonic acid in mucous membranes) can cause respiratory acidosis and asphyxiation. First aid focuses on removing from high-CO₂ environments and supporting respiration.",
        details: {
            physicalState: "Exists only in aqueous solution. Cannot be isolated as pure compound - decomposes to CO₂ + H₂O.",
            composition: "CO₂(aq) exists in equilibrium with H₂CO₃. True H₂CO₃ concentration is <0.3% of dissolved CO₂.",
            function: "Weak acid in bicarbonate buffer system (blood pH regulation), gives carbonation to beverages, involved in carbonate rock dissolution, respiratory gas transport.",
            origin: "Forms naturally when CO₂ dissolves in water. Produced in respiration, combustion, fermentation. Industrial: carbonation of beverages.",
            toxicity: "Essentially non-toxic as acid. Hazard from CO₂: asphyxiant, respiratory acidosis at high concentrations. Carbonic acid itself has no specific toxicity.",
            flammability: "Non-flammable. CO₂ is actually used as fire extinguishing agent.",
            reactivity: "Weak acid - dissociates to bicarbonate and carbonate ions. Decomposes to CO₂ and H₂O. Reacts with bases to form carbonates.",
            acidity: "Weak acid: pKa₁ = 6.35 (CO₂/HCO₃⁻), pKa₂ = 10.33 (HCO₃⁻/CO₃²⁻) at 25°C. Blood pH maintained at 7.4 by buffer system.",
            biologicalEffect: "Essential component of blood buffer system. In excess (hypercapnia): respiratory acidosis, headache, confusion, unconsciousness. Deficiency (hypocapnia): respiratory alkalosis, tetany. Normal metabolite.",
            usage: "Carbonated beverages, blood pH regulation, chemical weathering processes, fire extinguishers (CO₂), photosynthesis reactant, carbon capture systems.",
            handlingPrecautions: "No special precautions for acid itself. For CO₂ sources: ensure adequate ventilation in confined spaces. Monitor CO₂ levels where applicable.",
            storageConditions: "Cannot be stored - exists only in solution. CO₂ gas: store in pressurized cylinders in well-ventilated area. Keep away from heat.",
            firstAidMeasures: "For CO₂ exposure: INHALATION: Move to fresh air immediately. Administer oxygen if breathing difficult. If not breathing, give artificial respiration. Seek medical attention. SKIN/EYE: Not applicable - gas. INGESTION: Not applicable. For carbonated beverages: normal consumption.",
            disposalMethod: "Decomposes spontaneously. Solutions can be flushed to drain. CO₂ gas: vent to atmosphere or use in appropriate applications."
        }
    },
    {
        id: 8,
        name: "Phosphoric Acid (Orthophosphoric Acid)",
        formula: "H₃PO₄",
        type: "acid",
        description: "Phosphoric acid is a mineral acid of medium strength that appears as a colorless, odorless, syrupy liquid (85% concentration) or as crystals. It's a triprotic acid that dissociates in three steps. The acid is fundamental in fertilizer production (superphosphates), food industry (acidulant in colas, pH adjuster), metal treatment (rust removal, phosphating), and dental cements. Unlike many mineral acids, it's non-volatile and doesn't produce fumes. Food-grade phosphoric acid is Generally Recognized As Safe (GRAS) by FDA. Industrial grades may contain impurities including arsenic, fluoride, and heavy metals. Safety concerns include corrosivity at high concentrations and potential for phosphate-induced ecological damage (eutrophication). First aid emphasizes dilution and irrigation for exposures.",
        details: {
            physicalState: "Colorless, odorless, syrupy liquid (85%) or deliquescent crystals. Density: 1.88 g/cm³ (85%). Viscous due to hydrogen bonding.",
            composition: "Commercial: 75%, 85%, 100% (crystalline). Food grade: ≥75%, purified. Technical grade contains impurities.",
            function: "Acidulant in foods/beverages, fertilizer production, rust converter, dental cement, electrolyte, catalyst, pH adjuster, cleaning agent.",
            origin: "Wet process: treat phosphate rock with sulfuric acid. Thermal process: burn phosphorus to P₄O₁₀, then hydrate. World production: ~50 million tons annually.",
            toxicity: "Corrosive at high concentrations. Dilute: low toxicity. Chronic: dental erosion, potential bone demineralization. LD50 (oral, rat): 1530 mg/kg. Food grade GRAS.",
            flammability: "Non-flammable. Not combustible but may decompose at high temperatures producing toxic phosphorus oxides.",
            reactivity: "Medium strength acid. Reacts with metals, bases, carbonates. Dehydrating agent at elevated temperatures. Attacks some plastics, rubber.",
            acidity: "Triprotic: pKa₁=2.16, pKa₂=7.21, pKa₃=12.32. 1M solution pH ~1.5. Non-volatile - no acid fumes.",
            biologicalEffect: "Concentrated: corrosive burns. Dilute: food additive - safe in moderation. Excess phosphate: potential bone issues, kidney stones in susceptible individuals. Essential nutrient (phosphate).",
            usage: "Fertilizers (85% of use), food/beverages (cola acidulant, 10%), metal treatment (phosphating, rust removal), detergents, water treatment, dental cements, catalyst, electronics.",
            handlingPrecautions: "Wear chemical goggles, gloves (neoprene, nitrile), lab coat. Use in well-ventilated area. For concentrated acid: face shield recommended. Avoid contact with metals (corrosion, hydrogen gas).",
            storageConditions: "Store in cool, dry place in polyethylene, stainless steel, or glass containers. Keep away from bases, reactive metals. Food grade: separate from industrial grades. Temperature below 30°C.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash with plenty of water for 15 minutes. For concentrated acid: seek medical attention. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention for concentrated acid. INGESTION: Rinse mouth. Drink water or milk to dilute. Do NOT induce vomiting. Seek medical attention for large ingestions of concentrated acid.",
            disposalMethod: "Neutralize with sodium carbonate or lime to pH 6.5-8.5. Small quantities can be flushed with plenty of water. Large quantities: professional hazardous waste disposal. Consider environmental impact - phosphates cause eutrophication."
        }
    },
    {
        id: 9,
        name: "Tartaric Acid (2,3-Dihydroxysuccinic Acid)",
        formula: "C₄H₆O₆",
        type: "acid",
        description: "Tartaric acid is a white crystalline dicarboxylic acid that occurs naturally in many plants, particularly grapes, bananas, and tamarinds. It exists as four stereoisomers, with dextrorotatory L-(+)-tartaric acid being the common natural form. The acid and its salts (cream of tartar - potassium bitartrate) are important in food industry as acidulants, leavening agents (baking powder), and stabilizers. Industrial uses include effervescent tablets, photography, ceramics, and as a chiral resolving agent. Tartaric acid is relatively non-toxic with LD50 comparable to table salt. However, excessive consumption can cause gastrointestinal distress. Safety protocols are minimal for food-grade material. First aid involves simple dilution and supportive care for accidental overexposure.",
        details: {
            physicalState: "White crystalline powder or colorless crystals. Odorless with acidic taste. Density: 1.79 g/cm³. Soluble in water, alcohol.",
            composition: "Typically L-(+)-tartaric acid. Racemic mixture (DL) also available. Natural product often from wine industry byproducts.",
            function: "Food acidulant, leavening agent (cream of tartar), antioxidant, chelating agent, pH adjuster, chiral resolving agent, effervescent component.",
            origin: "Natural: grapes, bananas, tamarinds. Industrial: byproduct of wine making (argol) or chemical synthesis from maleic anhydride.",
            toxicity: "Low toxicity. LD50 (oral, rat): 7500 mg/kg. Generally Recognized As Safe (GRAS). Excessive consumption: gastrointestinal irritation, diarrhea.",
            flammability: "Combustible but not readily flammable. Dust may form explosive mixtures with air.",
            reactivity: "Dicarboxylic acid - reacts with bases, carbonates. Reducing agent. Forms complexes with metal ions. Decomposes when heated producing acrid smoke.",
            acidity: "Dicarboxylic: pKa₁=2.98, pKa₂=4.34. 0.1M solution pH ~2.2. Weaker than citric acid.",
            biologicalEffect: "Low toxicity. Metabolized or excreted unchanged. Large doses: gastrointestinal irritation, diarrhea, potential kidney stones in susceptible individuals. No essential biological function.",
            usage: "Food industry (baking powder, candies, gelatin desserts, beverages), effervescent tablets, photography, ceramics, textile printing, mirror silvering, chiral resolutions.",
            handlingPrecautions: "Normal laboratory precautions. Wear dust mask if handling powder. Avoid eye contact. Good hygiene practices.",
            storageConditions: "Store in tightly closed container in cool, dry place. Keep away from strong bases, oxidizers. Food grade: store separately from chemicals.",
            firstAidMeasures: "INHALATION: Move to fresh air. Usually not serious. SKIN CONTACT: Wash with plenty of soap and water. Usually not serious. EYE CONTACT: Rinse with gently flowing water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth. Drink water to dilute. Usually not serious unless very large quantity consumed. Seek medical attention if symptoms persist.",
            disposalMethod: "Dissolve in water, neutralize with sodium carbonate if desired, flush with plenty of water. Suitable for municipal sewage system in small quantities. Compostable."
        }
    },
    {
        id: 10,
        name: "Citric Acid (2-Hydroxy-1,2,3-propanetricarboxylic Acid)",
        formula: "C₆H₈O₇",
        type: "acid",
        description: "Citric acid is a weak organic tricarboxylic acid that occurs naturally in citrus fruits and is a key intermediate in the citric acid cycle (Krebs cycle) of cellular respiration. It appears as colorless crystals or white powder with a strongly acidic taste. Commercial production is primarily via fermentation of molasses by Aspergillus niger mold. The acid is widely used as an acidulant, flavor enhancer, and preservative in foods and beverages (soft drinks account for ~50% of use). Other applications include cleaning products (descaling), cosmetics, pharmaceuticals, and as a chelating agent. Citric acid has very low toxicity (GRAS status) though concentrated solutions can irritate. Safety protocols are minimal for food-grade material. First aid involves simple dilution and irrigation for exposures.",
        details: {
            physicalState: "Colorless crystals or white crystalline powder. Odorless, strongly acidic taste. Monohydrate common. Density: 1.67 g/cm³.",
            composition: "Anhydrous or monohydrate. Food grade ≥99.5%. Natural isomer is (2R,3S)-isocitric acid derivative.",
            function: "Food acidulant/preservative, cleaning agent (descaling), chelating agent, pH adjuster, antioxidant, buffer component, intermediate in metabolism.",
            origin: "Natural: citrus fruits (lemons, limes). Industrial: fermentation of carbohydrates (molasses, corn) by Aspergillus niger (~99% of production).",
            toxicity: "Very low toxicity. LD50 (oral, rat): 3000 mg/kg. Generally Recognized As Safe (GRAS). Concentrated solutions: irritant to eyes, respiratory tract.",
            flammability: "Combustible but not readily flammable. Dust may form explosive mixtures with air.",
            reactivity: "Tricarboxylic acid - reacts with bases, carbonates. Chelates metal ions (iron, calcium). Decomposes at 175°C producing acrid smoke.",
            acidity: "Tricarboxylic: pKa₁=3.13, pKa₂=4.76, pKa₃=6.39. 0.1M solution pH ~2.2. Stronger than acetic acid.",
            biologicalEffect: "Essential metabolic intermediate (Krebs cycle). Low toxicity - metabolized to CO₂ and water. Concentrated: eye/skin irritation. No significant chronic toxicity.",
            usage: "Food/beverages (soft drinks, candies, preserved foods - 70% of use), cleaning products (descaling kettles, bathrooms), cosmetics, pharmaceuticals, water softening, oil/gas treatment.",
            handlingPrecautions: "Normal laboratory precautions. For powder: wear dust mask. Avoid eye contact. Good hygiene practices. Food grade: store separately from chemicals.",
            storageConditions: "Store in tightly closed container in cool, dry place. Monohydrate may lose water above 40°C. Keep away from strong bases, oxidizing agents.",
            firstAidMeasures: "INHALATION: Move to fresh air. Usually not serious. SKIN CONTACT: Wash with plenty of soap and water. Usually not serious. EYE CONTACT: Rinse with gently flowing water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth. Drink water to dilute. Usually not serious. Seek medical attention only if very large quantity consumed.",
            disposalMethod: "Dissolve in water, neutralize with sodium carbonate if desired, flush with plenty of water. Biodegradable. Suitable for municipal sewage system."
        }
    },

    // B. BASES (11-16)
    {
        id: 11,
        name: "Sodium Hydroxide (Caustic Soda)",
        formula: "NaOH",
        type: "base",
        description: "Sodium hydroxide is a white, deliquescent solid that readily absorbs moisture and carbon dioxide from air. It's highly soluble in water with exothermic dissolution. The compound is produced via electrolysis of sodium chloride solution (chloralkali process). Industrial uses include soap making (saponification), paper production (pulping), aluminum extraction (Bayer process), water treatment, and chemical synthesis. Concentrated solutions cause severe alkaline burns through saponification of fats and liquefactive necrosis. Safety requires full protective equipment and proper neutralization procedures. First aid emphasizes prolonged water irrigation (not neutralization) and immediate medical attention for serious exposures. Note: neutralization reactions with acids are highly exothermic. Specialized applications include biodiesel production, food processing (lye processing of olives, pretzels), and drain cleaning. The compound reacts with aluminum to produce hydrogen gas, posing explosion risks if confined.",
        details: {
            physicalState: "White deliquescent pellets, flakes, or sticks. Odorless. Density: 2.13 g/cm³. MP: 318°C. Forms monohydrate NaOH·H₂O.",
            composition: "Technical: 97-99% NaOH. Reagent grade: ≥98%. Often contains sodium carbonate impurity from CO₂ absorption.",
            function: "Strong base, saponification agent, pH adjuster, cleaning agent, chemical reagent, drain cleaner, paper pulping, alumina production.",
            origin: "Chloralkali process: electrolysis of NaCl solution. Mercury cell, diaphragm cell, or membrane cell methods. World production: ~70 million tons annually.",
            toxicity: "Highly corrosive - causes severe burns. Inhalation of dust/mist causes respiratory damage. TLV-TWA: 2 mg/m³. LD50 (oral, rat): 40 mg/kg.",
            flammability: "Non-flammable but reacts exothermically with water. Reacts violently with acids, metals (aluminum, zinc), and organic compounds.",
            reactivity: "Extremely corrosive to all tissues. Reacts violently with water (heat generation). Attacks aluminum, zinc, tin with hydrogen evolution. Saponifies esters, amides.",
            acidity: "Very strong base: 1M solution pH ~14. pKb of OH⁻ = -1.7. Completely dissociated in water.",
            biologicalEffect: "Severe corrosive burns through saponification of lipids and protein denaturation. Deep tissue penetration. Eye exposure: blindness. Inhalation: pulmonary edema.",
            usage: "Soap/detergent production (25%), pulp/paper (15%), organic chemicals (15%), inorganic chemicals (10%), water treatment, textile processing, drain cleaners, food processing.",
            handlingPrecautions: "Full face shield, rubber gloves (neoprene, butyl), rubber apron. Use in fume hood for dust. Never add water to solid - add slowly to water with stirring. Store away from acids, metals.",
            storageConditions: "Store in airtight containers in cool, dry place. Protect from moisture, CO₂. Separate from acids, metals, organic materials. Secondary containment for solutions.",
            firstAidMeasures: "INHALATION: Move to fresh air. Give oxygen if breathing difficult. Seek immediate medical attention. SKIN CONTACT: Remove contaminated clothing. Flood with water for 30-60 minutes. Do NOT use neutralizing agents. Seek immediate medical attention. EYE CONTACT: Rinse immediately with gently flowing water for 30 minutes, holding eyelids open. Seek immediate medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth. Drink water or milk if conscious. Never give anything by mouth to unconscious person. Seek immediate medical attention.",
            disposalMethod: "Neutralize with dilute acid (acetic, hydrochloric) to pH 6.5-8.5 in ice bath (exothermic!). Small quantities: dilute greatly with water before drain disposal. Large quantities: professional hazardous waste management."
        }
    },
    {
        id: 12,
        name: "Potassium Hydroxide (Caustic Potash)",
        formula: "KOH",
        type: "base",
        description: "Potassium hydroxide is a white, deliquescent solid similar to sodium hydroxide but more soluble in water and alcohol. It's produced via electrolysis of potassium chloride solution. The compound is extensively used in liquid soap production (potassium soaps are softer than sodium soaps), biodiesel manufacturing, fertilizer production, and as an electrolyte in alkaline batteries. In food processing, it's used for chemical peeling of fruits and vegetables, cocoa processing, and as a pH control agent. Potassium hydroxide solutions are more conductive than sodium hydroxide solutions, making them preferred for certain electrochemical applications. Safety hazards mirror those of sodium hydroxide with similar corrosive properties. First aid requires immediate, extensive water irrigation. The compound reacts violently with acids and many organic compounds, requiring careful handling and storage.",
        details: {
            physicalState: "White deliquescent pellets, flakes, or sticks. Odorless. Density: 2.04 g/cm³. MP: 360°C. Highly hygroscopic.",
            composition: "Technical: 85-90% KOH. Reagent grade: ≥85%. Often contains potassium carbonate and chloride impurities.",
            function: "Strong base for liquid soap production, biodiesel catalyst, fertilizer production, pH adjustment, electrolyte in batteries, food processing.",
            origin: "Electrolysis of KCl solution (similar to chloralkali process). Also from reaction of potassium carbonate with calcium hydroxide.",
            toxicity: "Highly corrosive - causes severe burns. More hazardous than NaOH due to potassium ion toxicity if absorbed. TLV-TWA: 2 mg/m³. LD50 (oral, rat): 365 mg/kg.",
            flammability: "Non-flammable but reacts exothermically with water. Reacts violently with acids, metals, and organic compounds.",
            reactivity: "Extremely corrosive. Reacts violently with water (greater heat than NaOH). Attacks aluminum, zinc with hydrogen evolution. More soluble in alcohol than NaOH.",
            acidity: "Very strong base: 1M solution pH ~14. Slightly stronger base than NaOH due to greater solubility.",
            biologicalEffect: "Severe corrosive burns. Potassium ion absorption can cause hyperkalemia affecting heart function. Eye exposure: blindness. Deeper tissue penetration than NaOH.",
            usage: "Liquid soaps/detergents (35%), potassium chemicals production (25%), biodiesel (15%), fertilizers (10%), batteries, food processing, gas purification.",
            handlingPrecautions: "Full face shield, butyl rubber gloves, acid-resistant suit. Use in fume hood for solid handling. Never add water to solid - violent reaction. Store in airtight containers.",
            storageConditions: "Store in airtight containers in cool, dry place. Protect from moisture, CO₂. Separate from acids, metals, organic materials. More hygroscopic than NaOH.",
            firstAidMeasures: "INHALATION: Move to fresh air. Give oxygen if breathing difficult. Seek immediate medical attention. SKIN CONTACT: Remove contaminated clothing. Flood with water for 30-60 minutes. Do NOT use neutralizing agents. Seek immediate medical attention. EYE CONTACT: Rinse immediately with gently flowing water for 30 minutes, holding eyelids open. Seek immediate medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth. Drink water or milk if conscious. Never give anything by mouth to unconscious person. Seek immediate medical attention - monitor potassium levels.",
            disposalMethod: "Neutralize with dilute acid to pH 6.5-8.5 with cooling. Small quantities can be greatly diluted with water. Large quantities require professional disposal due to potassium content."
        }
    },
    {
        id: 13,
        name: "Ammonium Hydroxide (Ammonia Solution)",
        formula: "NH₄OH",
        type: "base",
        description: "Ammonium hydroxide is a solution of ammonia gas in water, typically containing 28-30% NH₃ by weight. It's a colorless liquid with a characteristic pungent, suffocating odor. The solution is a weak base that finds extensive use in household cleaning products, fertilizer production, pharmaceutical manufacturing, and as a chemical reagent. In cleaning, it effectively cuts grease and removes stains. Industrial applications include rubber vulcanization, textiles, and water treatment. The primary hazard is inhalation of ammonia vapors which cause severe respiratory irritation and can lead to pulmonary edema. Skin and eye contact cause irritation and potential burns at high concentrations. First aid emphasizes removal from exposure and irrigation with water. Proper ventilation is critical when handling due to the volatile nature of ammonia.",
        details: {
            physicalState: "Colorless liquid with strong, pungent, suffocating odor. Density: 0.91 g/cm³ (30% solution). Boiling point: 38°C (30% solution).",
            composition: "Ammonia gas dissolved in water. Commercial: 28-30% NH₃ (household), 10% (laboratory reagent). Industrial grades: up to 35%.",
            function: "Weak base for cleaning, pH adjustment, chemical synthesis, fertilizer production, water treatment, food processing, laboratory reagent.",
            origin: "Produced by dissolving synthetic ammonia gas in water. Ammonia produced via Haber-Bosch process: N₂ + 3H₂ → 2NH₃.",
            toxicity: "Corrosive - causes burns at high concentrations. Inhalation causes respiratory tract damage. TLV-TWA: 25 ppm (17 mg/m³). LD50 (oral, rat): 350 mg/kg.",
            flammability: "Not flammable but ammonia vapors can form explosive mixtures with air (16-25%).",
            reactivity: "Weak base - reacts with acids. Releases ammonia gas when heated or with strong bases. Attacks copper, zinc, and alloys.",
            acidity: "Weak base: Kb = 1.8 × 10⁻⁵. 1M solution pH ~11.6. pKa of NH₄⁺ = 9.25.",
            biologicalEffect: "Respiratory irritant - can cause bronchospasm, pulmonary edema. Eye/skin irritation. Chronic exposure: asthma, bronchitis. Metabolized to urea.",
            usage: "Household cleaners (40%), fertilizer production (25%), chemical manufacturing (15%), water treatment (10%), food processing, pharmaceuticals, textiles.",
            handlingPrecautions: "Use in well-ventilated area or fume hood. Wear chemical goggles, gloves (nitrile), lab coat. Avoid breathing vapors. Store away from acids.",
            storageConditions: "Store in cool, well-ventilated area in tightly closed containers. Keep below 30°C. Separate from acids, oxidizers, halogens. Use polyethylene or glass containers.",
            firstAidMeasures: "INHALATION: Move to fresh air immediately. Administer oxygen if breathing difficult. Seek immediate medical attention if symptoms persist. SKIN CONTACT: Remove contaminated clothing. Wash with plenty of soap and water for 15 minutes. Seek medical attention if irritation persists. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention if irritation persists. INGESTION: Rinse mouth. Drink water to dilute. Do NOT induce vomiting. Seek medical attention.",
            disposalMethod: "Dilute with large volume of water before drain disposal. Small quantities can be neutralized with acid. Large quantities require professional disposal."
        }
    },
    {
        id: 14,
        name: "Calcium Hydroxide (Slaked Lime)",
        formula: "Ca(OH)₂",
        type: "base",
        description: "Calcium hydroxide is a white powder or colorless crystals with a slightly bitter, alkaline taste. It's produced by adding water to calcium oxide (quicklime) in an exothermic reaction called slaking. The compound has low solubility in water (0.16 g/100 mL at 20°C) but the saturated solution (limewater) is strongly alkaline. Major applications include construction (mortar, plaster, whitewash), water treatment (pH adjustment, softening), agriculture (soil amendment), and food industry (nixtamalization of corn, pickling). In dentistry, it's used in root canal treatments. Safety concerns include dust inhalation causing respiratory irritation and eye/skin irritation from alkaline properties. First aid involves irrigation and removal of contaminated material. The compound is relatively safe compared to strong alkalis but requires proper handling.",
        details: {
            physicalState: "White powder or colorless crystals. Odorless. Density: 2.21 g/cm³. Decomposes at 580°C to CaO + H₂O.",
            composition: "Pure Ca(OH)₂. Technical grade: 90-95% pure. Often contains magnesium hydroxide, silica impurities.",
            function: "Base for construction materials, water treatment, soil amendment, food processing, chemical synthesis, dental applications.",
            origin: "Produced by slaking quicklime: CaO + H₂O → Ca(OH)₂. Quicklime from calcination of limestone: CaCO₃ → CaO + CO₂.",
            toxicity: "Low to moderate toxicity. Dust causes respiratory irritation. Alkaline - irritates eyes, skin. LD50 (oral, rat): 7340 mg/kg.",
            flammability: "Non-flammable. Not combustible.",
            reactivity: "Weak base - reacts with acids. Absorbs CO₂ from air forming calcium carbonate. Reacts with aluminum in presence of water.",
            acidity: "Strong base but low solubility. Saturated solution (limewater) pH ~12.4. Ksp = 5.5 × 10⁻⁶ at 25°C.",
            biologicalEffect: "Dust inhalation: respiratory irritation. Eye contact: irritation, possible corneal damage. Skin: irritation, drying. Generally low systemic toxicity.",
            usage: "Construction (mortar, plaster - 50%), water treatment (20%), agriculture (15%), chemical manufacturing (10%), food processing, sugar refining, dental materials.",
            handlingPrecautions: "Wear dust mask, goggles, gloves. Avoid dust generation. Use local exhaust ventilation. Wash hands after handling.",
            storageConditions: "Store in tightly closed containers in dry place. Protect from moisture, CO₂. Store away from acids.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek medical attention if symptoms persist. SKIN CONTACT: Wash with plenty of soap and water. Usually not serious. EYE CONTACT: Rinse with gently flowing water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth. Drink water. Usually not serious. Seek medical attention if large amount ingested.",
            disposalMethod: "Can be disposed with regular waste in small quantities. Large quantities: landfill disposal acceptable. Neutralize with acid if desired."
        }
    },
    {
        id: 15,
        name: "Magnesium Hydroxide",
        formula: "Mg(OH)₂",
        type: "base",
        description: "Magnesium hydroxide is a white, crystalline powder with very low solubility in water (0.00064 g/100 mL at 20°C). It occurs naturally as the mineral brucite and is also produced synthetically. The compound is best known as the active ingredient in milk of magnesia, an over-the-counter antacid and laxative. Industrial applications include flame retardant in plastics (decomposes endothermically releasing water vapor), wastewater treatment (pH adjustment, heavy metal removal), and as a precursor to magnesium oxide. Safety profile is excellent due to low solubility and low toxicity. First aid measures are minimal, primarily involving irrigation for eye exposure. The compound is Generally Recognized As Safe (GRAS) for food and pharmaceutical use when of appropriate purity.",
        details: {
            physicalState: "White crystalline powder. Odorless. Density: 2.34 g/cm³. Decomposes at 350°C to MgO + H₂O.",
            composition: "Pure Mg(OH)₂. Pharmaceutical grade: ≥98% pure. Often contains calcium, silica impurities.",
            function: "Antacid, laxative, flame retardant, wastewater treatment, pH buffer, food additive, precursor to magnesium compounds.",
            origin: "Natural: mineral brucite. Synthetic: precipitation from seawater or brine with lime: Mg²⁺ + Ca(OH)₂ → Mg(OH)₂ + Ca²⁺.",
            toxicity: "Very low toxicity. LD50 (oral, rat): >5000 mg/kg. Generally Recognized As Safe (GRAS). Excessive ingestion causes diarrhea.",
            flammability: "Non-flammable. Actually used as flame retardant - decomposes endothermically absorbing heat.",
            reactivity: "Weak base - reacts with acids. Decomposes when heated releasing water. Very low solubility limits reactivity.",
            acidity: "Weak base: Ksp = 1.8 × 10⁻¹¹ at 25°C. Saturated solution pH ~10.5. pKb = 2.6.",
            biologicalEffect: "Therapeutic: antacid (neutralizes stomach acid), osmotic laxative. Very low systemic absorption. Excessive use: diarrhea, electrolyte imbalance. No chronic toxicity.",
            usage: "Pharmaceuticals (antacids, laxatives - 40%), flame retardants (30%), wastewater treatment (20%), food additive, sugar refining, magnesium production.",
            handlingPrecautions: "Normal laboratory precautions. Wear dust mask if handling powder. Avoid eye contact. Good hygiene practices.",
            storageConditions: "Store in tightly closed containers in dry place. No special requirements. Compatible with most materials.",
            firstAidMeasures: "INHALATION: Move to fresh air. Usually not serious. SKIN CONTACT: Wash with soap and water. Usually not serious. EYE CONTACT: Rinse with gently flowing water for 15 minutes. Usually not serious. INGESTION: Rinse mouth. Drink water. Therapeutic doses are safe. Seek medical attention only if very large amount ingested.",
            disposalMethod: "Can be disposed with regular waste. Suitable for landfill. Biodegradable. No environmental concerns."
        }
    },
    {
        id: 16,
        name: "Barium Hydroxide",
        formula: "Ba(OH)₂",
        type: "base",
        description: "Barium hydroxide is a white crystalline solid that exists as monohydrate or octahydrate forms. It's moderately soluble in water (3.9 g/100 mL at 20°C for octahydrate) and the solution is strongly alkaline. The compound is used in analytical chemistry for titration of weak acids, in organic synthesis as a strong base catalyst, and in water treatment for sulfate removal. The primary hazard is toxicity from barium ions, which are potent muscle toxins affecting both skeletal and cardiac muscle. Soluble barium compounds are classified as poisonous. First aid for ingestion involves immediate medical attention and administration of sulfate salts (magnesium sulfate, sodium sulfate) to precipitate insoluble barium sulfate. Safety protocols emphasize preventing ingestion and controlling dust exposure.",
        details: {
            physicalState: "White crystals (octahydrate common). Odorless. Density: 2.18 g/cm³ (octahydrate). MP: 78°C (octahydrate loses water).",
            composition: "Typically Ba(OH)₂·8H₂O. Anhydrous form also available. Reagent grade: ≥98% pure.",
            function: "Strong base for analytical chemistry, organic synthesis catalyst, sulfate removal in water treatment, precursor to other barium compounds.",
            origin: "Produced from barium oxide: BaO + H₂O → Ba(OH)₂. Or from barium sulfide: BaS + 2H₂O → Ba(OH)₂ + H₂S.",
            toxicity: "Poisonous - barium ion is toxic. LD50 (oral, rat): 200-400 mg/kg. Affects muscles, heart. TLV-TWA: 0.5 mg/m³ (as Ba).",
            flammability: "Non-flammable. Not combustible.",
            reactivity: "Strong base - reacts with acids. Absorbs CO₂ from air forming barium carbonate. Reacts with ammonium salts releasing ammonia.",
            acidity: "Strong base: 0.1M solution pH ~13. More soluble than calcium or strontium hydroxides.",
            biologicalEffect: "Barium ion toxicity: muscle stimulation followed by paralysis, cardiac arrhythmias, hypertension then hypotension. Hypokalemia. Treatment: sulfate administration.",
            usage: "Analytical chemistry (titrations - 40%), organic synthesis (30%), water treatment (20%), sugar refining, lubricant additives.",
            handlingPrecautions: "Use in fume hood. Wear dust mask, gloves, goggles, lab coat. Avoid dust generation. Do not eat, drink, or smoke in area.",
            storageConditions: "Store in airtight containers in cool, dry place. Protect from moisture, CO₂. Label as poisonous. Separate from food, acids.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek immediate medical attention. SKIN CONTACT: Wash with plenty of soap and water. Seek medical attention. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes. Seek medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth. Drink water or milk if conscious. Seek IMMEDIATE medical attention - sulfate salts may be administered. Never give anything by mouth to unconscious person.",
            disposalMethod: "Convert to insoluble barium sulfate with dilute sulfuric acid, then dispose as toxic solid waste. Never discharge to sewer. Professional hazardous waste disposal required."
        }
    },

    // C. SALTS (17-41)
    {
        id: 17,
        name: "Sodium Chloride (Table Salt)",
        formula: "NaCl",
        type: "salt",
        description: "Sodium chloride is the most familiar salt, essential for human life and ubiquitous in both nature and industry. It occurs naturally as the mineral halite and in seawater (approximately 3.5% by weight). The compound forms colorless, cubic crystals with a characteristic salty taste. Beyond its culinary uses, sodium chloride is crucial for chemical industry as the primary source of chlorine and sodium compounds via electrolysis. Industrial applications include water softening, highway de-icing, textile processing, and as a preservative. While essential in moderate amounts (recommended intake: <5 g/day), excessive consumption contributes to hypertension. First aid for overexposure involves rehydration and electrolyte monitoring. Environmental concerns include soil salinization from road de-icing and industrial discharge.",
        details: {
            physicalState: "Colorless cubic crystals or white crystalline powder. Odorless, salty taste. Density: 2.16 g/cm³. MP: 801°C.",
            composition: "Pure NaCl. Food grade: ≥97% NaCl, often with anti-caking agents. Sea salt contains trace minerals.",
            function: "Essential nutrient, food seasoning/preservative, chemical raw material, water softening, de-icing, industrial processes.",
            origin: "Mining: rock salt deposits. Evaporation: seawater or brine. World production: ~290 million tons annually.",
            toxicity: "Low toxicity. Essential electrolyte. Excessive intake: hypertension, edema. LD50 (oral, rat): 3000 mg/kg.",
            flammability: "Non-flammable. Not combustible.",
            reactivity: "Generally unreactive. Electrolytes to sodium metal and chlorine gas. Forms complexes with some metal ions.",
            acidity: "Neutral salt: pH ~7 in aqueous solution. Does not hydrolyze significantly.",
            biologicalEffect: "Essential for nerve conduction, muscle function, fluid balance. Deficiency: hyponatremia. Excess: hypertension, edema. Normal plasma concentration: 135-145 mmol/L.",
            usage: "Food industry (30%), chemical industry (chlor-alkali - 60%), de-icing (5%), water softening, animal feed, textiles.",
            handlingPrecautions: "Normal laboratory precautions. For industrial quantities: dust control. Food grade: hygiene practices.",
            storageConditions: "Store in dry place. Food grade: protect from contamination. Industrial: bulk storage in silos.",
            firstAidMeasures: "INHALATION: Move to fresh air. Usually not serious. SKIN CONTACT: Wash with soap and water. Usually not serious. EYE CONTACT: Rinse with water. Usually not serious. INGESTION: Excessive: drink water, medical attention for electrolyte imbalance.",
            disposalMethod: "Can be disposed with regular waste. Large quantities: landfill acceptable. Environmental consideration for soil/water salinization."
        }
    },
    {
        id: 18,
        name: "Potassium Chloride",
        formula: "KCl",
        type: "salt",
        description: "Potassium chloride is a white crystalline salt that occurs naturally as the mineral sylvite. It's the primary source of potassium for fertilizers and is also used medically as a potassium supplement and in low-sodium salt substitutes. The compound has a bitter, salty taste and is highly soluble in water. Industrial production mainly comes from underground deposits or brine extraction. Beyond agriculture, it's used in water treatment, food processing, and as an electrolyte in medical solutions. Safety concerns include hyperkalemia from excessive intake, particularly in individuals with kidney impairment. First aid for overexposure involves monitoring potassium levels and medical management. The salt is generally safe but requires caution in medical applications.",
        details: {
            physicalState: "Colorless cubic crystals or white powder. Odorless, bitter-salty taste. Density: 1.98 g/cm³. MP: 770°C.",
            composition: "Pure KCl. Fertilizer grade: 95-99% KCl. Pharmaceutical grade: ≥99%.",
            function: "Potassium fertilizer, electrolyte supplement, salt substitute, water treatment, food processing, chemical raw material.",
            origin: "Mining: sylvite deposits (often with halite). Solution mining from brine. World production: ~45 million tons annually.",
            toxicity: "Low toxicity but potassium ion toxic in excess. LD50 (oral, rat): 2600 mg/kg. Hyperkalemia risk with kidney impairment.",
            flammability: "Non-flammable. Not combustible.",
            reactivity: "Generally unreactive. Similar to NaCl but more soluble. Electrolytes to potassium metal and chlorine gas.",
            acidity: "Neutral salt: pH ~7 in aqueous solution.",
            biologicalEffect: "Essential electrolyte for nerve/muscle function. Deficiency: hypokalemia (muscle weakness, arrhythmias). Excess: hyperkalemia (cardiac arrest). Normal plasma: 3.5-5.0 mmol/L.",
            usage: "Fertilizers (95%), chemical industry (5%), pharmaceuticals, food processing, water treatment, scientific applications.",
            handlingPrecautions: "Normal laboratory precautions. Dust control in industrial handling. Medical use requires monitoring.",
            storageConditions: "Store in dry place. Separate from strong oxidizing agents. Fertilizer: bulk storage.",
            firstAidMeasures: "INHALATION: Move to fresh air. Usually not serious. SKIN CONTACT: Wash with soap and water. Usually not serious. EYE CONTACT: Rinse with water. Usually not serious. INGESTION: Excessive: seek medical attention for potassium monitoring.",
            disposalMethod: "Can be disposed with regular waste. Fertilizer application to soil acceptable. No significant environmental hazards."
        }
    },
    {
        id: 19,
        name: "Ammonium Chloride (Sal Ammoniac)",
        formula: "NH₄Cl",
        type: "salt",
        description: "Ammonium chloride is a white crystalline salt with a cool, salty taste. It sublimates when heated (dissociates into ammonia and hydrogen chloride gases which recombine on cooling). Historically known as sal ammoniac, it's produced as a byproduct of the Solvay process for sodium carbonate. Major applications include fertilizer (nitrogen source), dry cell batteries (as electrolyte), flux for soldering and galvanizing, and expectorant in cough medicines. The compound is mildly acidic in solution due to ammonium ion hydrolysis. Safety concerns include irritation from dust and decomposition products when heated. First aid involves irrigation and removal from exposure. Industrial handling requires dust control and ventilation.",
        details: {
            physicalState: "White crystalline powder or granules. Odorless (but decomposes to ammonia odor when moist). Density: 1.53 g/cm³. Sublimes at 340°C.",
            composition: "Pure NH₄Cl. Technical grade: ≥99%. Often contains moisture.",
            function: "Fertilizer, battery electrolyte, soldering flux, expectorant, nitrogen source in yeast cultivation, laboratory reagent.",
            origin: "Byproduct of Solvay process. Also from reaction of ammonia with hydrochloric acid. Natural deposits rare.",
            toxicity: "Moderate toxicity. Irritant to respiratory tract, eyes, skin. LD50 (oral, rat): 1650 mg/kg. Decomposes to toxic gases when heated.",
            flammability: "Non-flammable but decomposes at 340°C producing toxic, corrosive gases (NH₃, HCl).",
            reactivity: "Sublimes without melting. Acidic in solution (ammonium ion hydrolysis). Reacts with strong bases releasing ammonia.",
            acidity: "Acidic salt: 0.1M solution pH ~5. Due to hydrolysis: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺.",
            biologicalEffect: "Expectorant: irritates bronchial mucosa increasing secretion. Systemic: acidosis, ammonia toxicity in large doses. Irritant to eyes, respiratory tract.",
            usage: "Fertilizers (70%), dry cell batteries (15%), metal processing (10%), pharmaceuticals, food additive, laboratory chemical.",
            handlingPrecautions: "Wear dust mask, goggles, gloves. Use local exhaust ventilation. Avoid heating. Store away from bases.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Protect from moisture. Separate from strong bases.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek medical attention if symptoms persist. SKIN CONTACT: Wash with plenty of soap and water. Seek medical attention if irritation persists. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth. Drink water. Seek medical attention if large amount ingested.",
            disposalMethod: "Dissolve in water, neutralize if desired, flush with plenty of water. Small quantities acceptable to sewer. Large quantities: professional disposal."
        }
    },
    {
        id: 20,
        name: "Copper Sulfate (Blue Vitriol)",
        formula: "CuSO₄·5H₂O",
        type: "salt",
        description: "Copper(II) sulfate pentahydrate is the most common copper compound, known for its bright blue color in hydrated form. When dehydrated, it becomes white (CuSO₄). The compound is produced from copper ore or scrap copper and sulfuric acid. Major applications include agricultural fungicide (Bordeaux mixture), algicide in water treatment, electroplating, animal feed additive, and educational chemistry demonstrations. Copper is an essential trace element but toxic in excess, particularly to aquatic life. Safety concerns include skin/eye irritation and systemic copper toxicity from ingestion. First aid emphasizes irrigation and medical evaluation for significant exposures. Environmental regulations restrict discharge due to aquatic toxicity.",
        details: {
            physicalState: "Bright blue triclinic crystals when hydrated, white powder when anhydrous. Odorless. Density: 2.28 g/cm³ (pentahydrate).",
            composition: "Typically pentahydrate CuSO₄·5H₂O. Anhydrous form also available. Technical grade: 98-99% pure.",
            function: "Fungicide, algicide, herbicide, electroplating, animal feed supplement, educational chemical, catalyst, wood preservative.",
            origin: "Production from copper metal or ore with sulfuric acid: Cu + 2H₂SO₄ + O₂ → CuSO₄ + 2H₂O + SO₂. Also byproduct of copper refining.",
            toxicity: "Harmful if swallowed. Irritant to eyes, skin, respiratory tract. Aquatic toxicity: highly toxic to fish. LD50 (oral, rat): 300 mg/kg.",
            flammability: "Non-flammable. Not combustible.",
            reactivity: "Soluble in water giving acidic solution. Dehydrates when heated. Oxidizing agent - reacts with metals (iron, zinc).",
            acidity: "Acidic salt: 0.1M solution pH ~4 due to copper ion hydrolysis: Cu²⁺ + 2H₂O ⇌ Cu(OH)⁺ + H₃O⁺.",
            biologicalEffect: "Essential trace element but toxic in excess. Acute: gastrointestinal irritation, hemolysis, liver/kidney damage. Chronic: Wilson's disease-like symptoms. Aquatic: toxic to gill-breathing organisms.",
            usage: "Agriculture (fungicides, fertilizers - 50%), water treatment (20%), animal feed (10%), chemical industry (10%), electroplating, education.",
            handlingPrecautions: "Wear gloves, goggles, dust mask. Avoid dust generation. Do not eat, drink, or smoke in area. Use local exhaust ventilation.",
            storageConditions: "Store in tightly closed containers in dry place. Separate from metals, reducing agents. Protect from moisture.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash with plenty of soap and water. Seek medical attention if irritation persists. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes. Seek medical attention. INGESTION: Rinse mouth. Do NOT induce vomiting. Drink water. Seek medical attention.",
            disposalMethod: "Precipitate as copper hydroxide with lime, then dispose as toxic waste. Never discharge to water bodies. Professional hazardous waste disposal required."
        }
    },
    {
        id: 21,
        name: "Zinc Sulfate",
        formula: "ZnSO₄",
        type: "salt",
        description: "Zinc sulfate is a colorless crystalline salt that exists in several hydrate forms, with heptahydrate (ZnSO₄·7H₂O) being most common. It's highly soluble in water and finds extensive use as a zinc supplement in fertilizers, animal feeds, and human nutrition. Other applications include electrolyte for zinc electroplating, mordant in dyeing, coagulant in rayon production, and preservative for wood and skins. Zinc is an essential micronutrient but excessive intake causes toxicity (nausea, vomiting, copper deficiency). First aid involves irrigation and supportive care. Industrial handling requires dust control. The compound is relatively safe compared to heavy metal salts but requires proper management.",
        details: {
            physicalState: "Colorless crystals (heptahydrate) or white powder (anhydrous). Odorless. Density: 1.96 g/cm³ (heptahydrate).",
            composition: "Typically heptahydrate ZnSO₄·7H₂O. Monohydrate and anhydrous forms also available. Technical grade: ≥98%.",
            function: "Zinc supplement in agriculture/animal feed/human nutrition, electroplating electrolyte, mordant, coagulant, preservative, laboratory reagent.",
            origin: "Production from zinc metal or zinc oxide with sulfuric acid: Zn + H₂SO₄ → ZnSO₄ + H₂. Also from roasting zinc sulfide ores.",
            toxicity: "Low to moderate toxicity. Irritant to eyes, skin, respiratory tract. Zinc toxicity: gastrointestinal, copper deficiency. LD50 (oral, rat): 2949 mg/kg.",
            flammability: "Non-flammable. Not combustible.",
            reactivity: "Soluble in water giving acidic solution. Reacts with bases precipitating zinc hydroxide. Less toxic than other heavy metal salts.",
            acidity: "Acidic salt: 0.1M solution pH ~4.5 due to zinc ion hydrolysis: Zn²⁺ + 2H₂O ⇌ Zn(OH)⁺ + H₃O⁺.",
            biologicalEffect: "Essential trace element (enzyme cofactor, immune function). Deficiency: growth retardation, immune dysfunction. Excess: nausea, vomiting, copper deficiency, immune suppression.",
            usage: "Agriculture/animal feed (60%), chemical industry (20%), pharmaceuticals (10%), textiles, electroplating, water treatment.",
            handlingPrecautions: "Wear gloves, goggles, dust mask. Avoid dust generation. Normal laboratory precautions adequate.",
            storageConditions: "Store in tightly closed containers in dry place. Heptahydrate may effloresce. Compatible with most materials.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek medical attention if symptoms persist. SKIN CONTACT: Wash with plenty of soap and water. Usually not serious. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth. Drink water. Seek medical attention if large amount ingested.",
            disposalMethod: "Neutralize with sodium carbonate, precipitate zinc as hydroxide, then dispose as solid waste. Small quantities acceptable to sewer with dilution."
        }
    },
    {
        id: 22,
        name: "Iron(II) Sulfate (Ferrous Sulfate)",
        formula: "FeSO₄",
        type: "salt",
        description: "Iron(II) sulfate, commonly as heptahydrate (FeSO₄·7H₂O), is a blue-green crystalline salt that oxidizes in air to yellow-brown iron(III) compounds. It's produced as a byproduct of steel pickling with sulfuric acid. Major applications include iron supplement for anemia treatment, fertilizer (iron deficiency chlorosis correction), water and wastewater treatment (phosphate removal, reduction of chromates), and as a reducing agent in chemical processes. The heptahydrate is known as green vitriol historically. Safety concerns include irritation from dust and gastrointestinal effects from ingestion. First aid involves irrigation and supportive care. The compound is relatively low in toxicity but requires proper handling to prevent oxidation.",
        details: {
            physicalState: "Blue-green crystals (heptahydrate), white powder (anhydrous). Odorless. Oxidizes to yellow-brown in air. Density: 1.90 g/cm³ (heptahydrate).",
            composition: "Typically heptahydrate FeSO₄·7H₂O. Monohydrate and anhydrous forms available. Pharmaceutical grade: ≥98%.",
            function: "Iron supplement, fertilizer, water treatment chemical, reducing agent, pigment precursor, wood preservative, laboratory reagent.",
            origin: "Byproduct of steel pickling with sulfuric acid. Also from dissolution of iron in sulfuric acid. Natural as melanterite mineral.",
            toxicity: "Low toxicity. Irritant to eyes, skin, respiratory tract. Ingestion: gastrointestinal irritation. LD50 (oral, rat): 1520 mg/kg.",
            flammability: "Non-flammable. Not combustible.",
            reactivity: "Reducing agent - oxidizes in air to iron(III). Acidic in solution. Reacts with alkalis precipitating iron(II) hydroxide.",
            acidity: "Acidic salt: 0.1M solution pH ~3.7 due to iron(II) ion hydrolysis.",
            biologicalEffect: "Essential for hemoglobin synthesis. Therapeutic: treatment of iron deficiency anemia. Excess: gastrointestinal irritation, iron overload (hemochromatosis) with chronic excessive intake.",
            usage: "Water/wastewater treatment (40%), fertilizers (30%), iron supplements (20%), chemical industry (10%), pigments, wood preservation.",
            handlingPrecautions: "Wear gloves, goggles, dust mask. Avoid dust generation. Store in airtight containers to prevent oxidation.",
            storageConditions: "Store in airtight containers in cool, dry place. Protect from air/moisture to prevent oxidation. Separate from oxidizers.",
            firstAidMeasures: "INHALATION: Move to fresh air. Usually not serious. SKIN CONTACT: Wash with plenty of soap and water. Usually not serious. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes. Usually not serious. INGESTION: Rinse mouth. Drink water. Usually not serious. Seek medical attention only if very large amount ingested.",
            disposalMethod: "Oxidize to iron(III) with hydrogen peroxide, then precipitate as hydroxide with lime. Small quantities acceptable to sewer with dilution."
        }
    },
    {
        id: 23,
        name: "Iron(III) Chloride (Ferric Chloride)",
        formula: "FeCl₃",
        type: "salt",
        description: "Iron(III) chloride is a yellow-brown crystalline solid that is highly soluble in water, producing acidic, yellow-brown solutions. The anhydrous form is deliquescent and hydrolyzes in moist air producing hydrogen chloride fumes. Major applications include water and wastewater treatment (coagulant for suspended solids), etching agent for printed circuit boards, catalyst in organic synthesis, and as a mordant in dyeing. The compound is corrosive due to its acidic nature and hydrolysis products. Safety concerns include skin/eye burns and respiratory irritation from hydrogen chloride fumes. First aid emphasizes immediate irrigation and medical attention for serious exposures. Industrial handling requires corrosion-resistant equipment and proper ventilation.",
        details: {
            physicalState: "Yellow-brown crystals (hexahydrate), dark green-black crystals (anhydrous). Pungent odor in moist air. Density: 2.90 g/cm³ (anhydrous).",
            composition: "Typically hexahydrate FeCl₃·6H₂O. Anhydrous form also available. Technical grade: 40-45% solution common.",
            function: "Water/wastewater coagulant, etching agent for electronics, catalyst, mordant, oxidizing agent, laboratory reagent.",
            origin: "Production from iron and chlorine: 2Fe + 3Cl₂ → 2FeCl₃. Or from iron oxide and hydrochloric acid: Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O.",
            toxicity: "Corrosive - causes burns. Hydrolyzes to HCl causing respiratory irritation. LD50 (oral, rat): 450 mg/kg.",
            flammability: "Non-flammable. Not combustible.",
            reactivity: "Hydrolyzes in water: Fe³⁺ + 3H₂O ⇌ Fe(OH)₃ + 3H⁺. Oxidizing agent. Corrosive to metals. Deliquescent.",
            acidity: "Strongly acidic: 0.1M solution pH ~2 due to hydrolysis. More acidic than Fe₂(SO₄)₃.",
            biologicalEffect: "Corrosive to tissues. Astringent (precipitates proteins). Low systemic toxicity due to poor absorption. Environmental: toxic to aquatic life.",
            usage: "Water treatment (60%), printed circuit board etching (20%), catalyst (10%), metal surface treatment, dyes, pharmaceuticals.",
            handlingPrecautions: "Wear chemical goggles, gloves (neoprene, nitrile), lab coat, face shield for concentrated solutions. Use in well-ventilated area. Avoid contact with metals.",
            storageConditions: "Store in airtight containers in cool, dry place. Anhydrous form requires protection from moisture. Use plastic or glass containers.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash with plenty of water for 15 minutes. Seek medical attention. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes. Seek medical attention. INGESTION: Rinse mouth. Drink water or milk. Do NOT induce vomiting. Seek medical attention.",
            disposalMethod: "Neutralize with sodium carbonate or lime, precipitate iron as hydroxide, then dispose as solid waste. Never discharge acidic solutions to sewer."
        }
    },
    {
        id: 24,
        name: "Lead Nitrate",
        formula: "Pb(NO₃)₂",
        type: "salt",
        description: "Lead nitrate is a white crystalline solid that is soluble in water and decomposes when heated, producing toxic nitrogen oxides. It's one of the few soluble lead compounds and is used primarily in lead-based pigments, matches, explosives (lead azide production), and as a heat stabilizer in nylon. The compound is highly toxic due to lead content, affecting multiple organ systems particularly the nervous system. Safety protocols are stringent, requiring engineering controls, personal protective equipment, and biological monitoring. First aid focuses on preventing further absorption and seeking immediate medical attention. Environmental regulations strictly control discharge due to lead's persistence and bioaccumulation.",
        details: {
            physicalState: "White cubic crystals. Odorless. Density: 4.53 g/cm³. Decomposes at 470°C producing NOx.",
            composition: "Pure Pb(NO₃)₂. Reagent grade: ≥99%. Often contains trace impurities.",
            function: "Lead source for pigments, matches, explosives, heat stabilizer, oxidizer in dye industry, laboratory reagent.",
            origin: "Production from lead metal or oxide with nitric acid: Pb + 4HNO₃ → Pb(NO₃)₂ + 2NO₂ + 2H₂O.",
            toxicity: "Highly toxic - lead affects nervous system, kidneys, blood. Carcinogenic (IARC 2B). TLV-TWA: 0.05 mg/m³ (as Pb). LD50 (oral, rat): 105 mg/kg.",
            flammability: "Non-flammable but strong oxidizer - may intensify fires. Decomposes producing oxygen.",
            reactivity: "Oxidizing agent. Reacts with reducing agents, combustible materials. Decomposes when heated.",
            acidity: "Slightly acidic: 0.1M solution pH ~4 due to lead ion hydrolysis.",
            biologicalEffect: "Lead toxicity: neurological effects (especially in children), anemia, kidney damage, hypertension, reproductive toxicity. Bioaccumulates. No safe exposure level established.",
            usage: "Pigments (50%), matches/explosives (25%), chemical manufacturing (15%), heat stabilizers, laboratory use.",
            handlingPrecautions: "Use in fume hood with HEPA filtration. Wear appropriate respirator, gloves, goggles, lab coat. No eating/drinking in area. Biological monitoring required.",
            storageConditions: "Store in tightly closed containers in secure, ventilated area. Separate from reducing agents, combustibles. Label as poisonous.",
            firstAidMeasures: "INHALATION: Move to fresh air immediately. Seek immediate medical attention. SKIN CONTACT: Remove contaminated clothing. Wash with plenty of soap and water. Seek immediate medical attention. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes. Seek immediate medical attention. INGESTION: Rinse mouth. Do NOT induce vomiting. Seek IMMEDIATE medical attention. Chelation therapy may be needed.",
            disposalMethod: "Precipitate as lead sulfide or sulfate, then dispose as hazardous waste. Never discharge to environment. Professional hazardous waste disposal required."
        }
    },
    {
        id: 25,
        name: "Silver Nitrate",
        formula: "AgNO₃",
        type: "salt",
        description: "Silver nitrate is a colorless crystalline solid that is highly soluble in water and photosensitive (turns gray-black upon exposure to light due to reduction to metallic silver). Historically known as lunar caustic, it's used in silver plating, mirrors, photographic emulsions, and as a cauterizing agent in medicine. The compound is corrosive and causes black stains on skin and tissues due to silver deposition. Safety concerns include skin/eye burns, argyria (permanent blue-gray skin discoloration) from chronic exposure, and environmental toxicity to aquatic organisms. First aid emphasizes immediate irrigation and medical evaluation. Industrial use has declined due to digital photography but medical and specialty applications continue.",
        details: {
            physicalState: "Colorless transparent crystals. Odorless. Turns gray-black in light. Density: 4.35 g/cm³. MP: 212°C.",
            composition: "Pure AgNO₃. Reagent grade: ≥99.8%. Photographic grade: ultra-pure.",
            function: "Silver source for plating/mirrors, photographic emulsion, cauterizing agent, analytical reagent, antiseptic, hair dye.",
            origin: "Production from silver metal with nitric acid: 3Ag + 4HNO₃ → 3AgNO₃ + NO + 2H₂O.",
            toxicity: "Corrosive - causes burns. Stains skin black. Chronic exposure: argyria (skin discoloration). LD50 (oral, rat): 50 mg/kg.",
            flammability: "Non-flammable but strong oxidizer - may intensify fires. Decomposes at 440°C producing toxic NOx.",
            reactivity: "Oxidizing agent. Photosensitive. Reacts with chlorides, bromides, iodides precipitating silver halides. Corrosive to metals.",
            acidity: "Slightly acidic: 0.1M solution pH ~5.5 due to silver ion hydrolysis.",
            biologicalEffect: "Corrosive to tissues. Antimicrobial. Chronic: argyria (irreversible blue-gray skin discoloration). Low systemic toxicity but expensive to treat argyria.",
            usage: "Photography (declining), electronics (30%), mirrors/plating (25%), medical applications (20%), analytical chemistry (15%), hair dyes.",
            handlingPrecautions: "Wear gloves, goggles, lab coat. Avoid skin contact (causes black stains). Use in subdued light. Store in dark containers.",
            storageConditions: "Store in amber bottles in cool, dark place. Separate from reducing agents, halides, combustibles. Protect from light.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash with plenty of soap and water. Stains may be permanent. Seek medical attention. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes. Seek medical attention. INGESTION: Rinse mouth. Drink water or milk. Do NOT induce vomiting. Seek medical attention.",
            disposalMethod: "Precipitate as silver chloride with sodium chloride, recover silver if economical. Never discharge to sewer (toxic to aquatic life). Hazardous waste disposal."
        }
    },
    {
        id: 26,
        name: "Sodium Nitrate (Chile Saltpeter)",
        formula: "NaNO₃",
        type: "salt",
        description: "Sodium nitrate is a white crystalline solid that is highly soluble in water. It occurs naturally in large deposits in Chile (Chile saltpeter) and was historically crucial for fertilizer and gunpowder production before the Haber-Bosch process for ammonia. Current applications include fertilizer (nitrogen source), food preservative (especially in cured meats), glass manufacturing, and heat transfer salts. The compound is an oxidizer and can form explosive mixtures with combustible materials. Safety concerns include methemoglobinemia from excessive ingestion (especially in infants) and fire/explosion hazards when mixed with fuels. First aid involves removal from exposure and medical evaluation for significant ingestions.",
        details: {
            physicalState: "White crystalline powder or granules. Odorless. Density: 2.26 g/cm³. MP: 307°C.",
            composition: "Pure NaNO₃. Technical grade: ≥98%. Food grade: ≥99% with strict purity requirements.",
            function: "Fertilizer, food preservative, oxidizer in pyrotechnics, glass manufacture, heat transfer salt, chemical intermediate.",
            origin: "Natural: Chile saltpeter deposits. Synthetic: from nitric acid and sodium carbonate. World production: ~1.6 million tons annually.",
            toxicity: "Low to moderate toxicity. Oxidizer - can cause methemoglobinemia. LD50 (oral, rat): 1267 mg/kg. GRAS as food additive (limited).",
            flammability: "Non-flammable but strong oxidizer - intensifies combustion of other materials. Forms explosive mixtures with organic materials.",
            reactivity: "Oxidizing agent. Decomposes at >380°C producing oxygen. Reacts with reducing agents, acids producing toxic NOx.",
            acidity: "Neutral salt: pH ~7 in aqueous solution.",
            biologicalEffect: "Nitrate ion reduces to nitrite causing methemoglobinemia (especially in infants). Chronic: potential nitrosamine formation (carcinogenic). Essential nitrogen source for plants.",
            usage: "Fertilizers (70%), food preservation (15%), glass (10%), explosives/pyrotechnics (5%), chemicals, heat transfer.",
            handlingPrecautions: "Wear gloves, goggles, dust mask. Avoid contact with combustible materials. Store away from fuels, reducing agents.",
            storageConditions: "Store in cool, dry place away from combustible materials. Separate from acids, reducing agents. Food grade: store separately.",
            firstAidMeasures: "INHALATION: Move to fresh air. Usually not serious. SKIN CONTACT: Wash with plenty of soap and water. Usually not serious. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes. Usually not serious. INGESTION: Rinse mouth. Drink water. Seek medical attention if large amount ingested (especially infants).",
            disposalMethod: "Dissolve in water, reduce biological oxygen demand may be high. Small quantities acceptable to sewer. Large quantities: landfill or incineration."
        }
    },
    {
        id: 27,
        name: "Potassium Nitrate (Saltpeter)",
        formula: "KNO₃",
        type: "salt",
        description: "Potassium nitrate is a white crystalline solid that has been historically vital as the oxidizer in black powder (gunpowder). It occurs naturally as nitre or saltpeter in certain soils. Modern applications include fertilizers (providing both potassium and nitrogen), food preservation (similar to sodium nitrate but with potassium ion benefits), fireworks, matches, and as a heat transfer salt. The compound is a strong oxidizer and requires careful handling when mixed with combustible materials. Safety concerns include methemoglobinemia risk and fire/explosion hazards. First aid involves irrigation and medical evaluation for significant exposures. Industrial production is primarily synthetic via ion exchange or from potassium chloride and nitric acid.",
        details: {
            physicalState: "White crystalline powder or colorless crystals. Odorless. Density: 2.11 g/cm³. MP: 334°C.",
            composition: "Pure KNO₃. Technical grade: ≥99%. Food/pharmaceutical grade: higher purity.",
            function: "Fertilizer, food preservative, oxidizer in explosives/pyrotechnics, heat treatment salt, toothpaste for sensitive teeth, laboratory reagent.",
            origin: "Historically from saltpeter beds (decomposing organic matter with potassium). Modern: ion exchange or reaction: KCl + HNO₃ → KNO₃ + HCl.",
            toxicity: "Low to moderate toxicity. Oxidizer - methemoglobinemia risk. LD50 (oral, rat): 3750 mg/kg. GRAS as food additive (limited).",
            flammability: "Non-flammable but strong oxidizer - intensifies combustion. Black powder: 75% KNO₃, 15% charcoal, 10% sulfur.",
            reactivity: "Strong oxidizing agent. Decomposes at 400°C producing oxygen. Reacts with reducing agents, acids producing toxic NOx.",
            acidity: "Neutral salt: pH ~7 in aqueous solution.",
            biologicalEffect: "Similar to sodium nitrate: methemoglobinemia risk. Potassium ion: beneficial for hypertension compared to sodium. Dental: reduces sensitivity.",
            usage: "Fertilizers (75%), food preservation (10%), pyrotechnics (10%), pharmaceuticals/dentistry (5%), heat treatment, matches.",
            handlingPrecautions: "Wear gloves, goggles, dust mask. Avoid contact with combustible materials. Store away from fuels, reducing agents.",
            storageConditions: "Store in cool, dry place away from combustible materials. Separate from acids, reducing agents, organic materials.",
            firstAidMeasures: "INHALATION: Move to fresh air. Usually not serious. SKIN CONTACT: Wash with plenty of soap and water. Usually not serious. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes. Usually not serious. INGESTION: Rinse mouth. Drink water. Seek medical attention if large amount ingested.",
            disposalMethod: "Dissolve in water, acceptable to sewer with dilution. Large quantities: landfill disposal acceptable. Consider recycling from fireworks."
        }
    },
    {
        id: 28,
        name: "Calcium Carbonate",
        formula: "CaCO₃",
        type: "salt",
        description: "Calcium carbonate is one of the most abundant minerals on Earth, occurring as limestone, marble, chalk, and in biological structures like shells and coral. It exists in three polymorphs: calcite, aragonite, and vaterite. Industrial applications are vast: construction materials (cement, aggregate), paper filling and coating, plastics reinforcement, pharmaceuticals (antacid, calcium supplement), food additive (flour treatment, acidity regulator), and environmental applications (flue gas desulfurization). The compound is essentially non-toxic but dust inhalation can cause respiratory irritation. First aid measures are minimal. Environmental considerations include carbon dioxide release during cement production and ocean acidification effects on marine organisms.",
        details: {
            physicalState: "White powder (precipitated) or various colored crystals (natural). Odorless. Density: 2.71 g/cm³ (calcite). Decomposes at 825°C.",
            composition: "Pure CaCO₃. Natural: various purity. Precipitated: high purity (≥98%). Different crystal forms with varying properties.",
            function: "Construction material, paper filler/coating, plastics filler, antacid/calcium supplement, food additive, environmental remediation, acid neutralizer.",
            origin: "Natural: limestone, marble, chalk deposits. Synthetic: precipitation from calcium hydroxide and CO₂. Biological: shells, coral.",
            toxicity: "Essentially non-toxic. Dust: respiratory irritant. LD50 (oral, rat): 6450 mg/kg. GRAS as food additive.",
            flammability: "Non-flammable. Not combustible. Actually used as fire retardant filler.",
            reactivity: "Reacts with acids producing CO₂. Decomposes at high temperature to CaO + CO₂. Stable in alkaline conditions.",
            acidity: "Basic salt: saturated solution pH ~9-10 due to carbonate hydrolysis: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻.",
            biologicalEffect: "Essential for bones/shells. Antacid: neutralizes stomach acid. Calcium source. Dust: respiratory irritation (pneumoconiosis in chronic exposure).",
            usage: "Construction (cement, aggregate - 70%), paper (15%), plastics (5%), environmental (5%), pharmaceuticals/food (5%), other.",
            handlingPrecautions: "Wear dust mask if handling powder. Normal laboratory precautions. Industrial: dust control measures.",
            storageConditions: "Store in dry place. No special requirements. Bulk storage in silos for industrial quantities.",
            firstAidMeasures: "INHALATION: Move to fresh air. Usually not serious. SKIN CONTACT: Wash with soap and water. Usually not serious. EYE CONTACT: Rinse with water. Usually not serious. INGESTION: Rinse mouth. Drink water. Usually not serious.",
            disposalMethod: "Can be disposed with regular waste. Landfill disposal acceptable. Actually beneficial for soil pH adjustment."
        }
    },
    {
        id: 29,
        name: "Magnesium Carbonate",
        formula: "MgCO₃",
        type: "salt",
        description: "Magnesium carbonate occurs naturally as the mineral magnesite and in hydrated forms (hydromagnesite). The compound is a white powder with low solubility in water. Major applications include antacids and laxatives (often as basic magnesium carbonate, a hydrated hydroxy-carbonate), drying agent (in gymnastics chalk, rock climbing), filler in plastics and rubber, food additive (acidity regulator, anti-caking agent), and fire retardant. Safety profile is excellent with very low toxicity. First aid measures are minimal. The compound decomposes when heated, releasing carbon dioxide and leaving magnesium oxide, a property utilized in fire protection. Industrial production is from magnesium-rich brines or minerals.",
        details: {
            physicalState: "White powder (light, fluffy). Odorless. Density: 2.96 g/cm³ (magnesite). Decomposes at 350°C.",
            composition: "Often basic carbonate: xMgCO₃·yMg(OH)₂·zH₂O. Pharmaceutical grade: specific compositions. Natural magnesite: nearly pure.",
            function: "Antacid/laxative, drying agent (gymnastics chalk), filler, food additive, fire retardant, magnesium source, insulation material.",
            origin: "Natural: magnesite deposits. Synthetic: precipitation from magnesium salts with sodium carbonate. From seawater or brine.",
            toxicity: "Very low toxicity. LD50 (oral, rat): >5000 mg/kg. GRAS as food additive. Dust: respiratory irritant.",
            flammability: "Non-flammable. Actually used as fire retardant - decomposes endothermically releasing CO₂ and water.",
            reactivity: "Reacts with acids producing CO₂. Decomposes when heated. Low solubility in water.",
            acidity: "Basic: saturated solution pH ~10-11 due to carbonate and hydroxide.",
            biologicalEffect: "Antacid: neutralizes stomach acid. Laxative: osmotic effect. Magnesium source. Very low systemic absorption. Dust: respiratory irritation.",
            usage: "Pharmaceuticals (antacids - 40%), industrial fillers (25%), food additive (15%), fire retardant (10%), sports/drying agent (10%).",
            handlingPrecautions: "Wear dust mask if handling powder. Normal laboratory precautions. Industrial: dust control.",
            storageConditions: "Store in dry place. Protect from moisture (hygroscopic). No special requirements.",
            firstAidMeasures: "INHALATION: Move to fresh air. Usually not serious. SKIN CONTACT: Wash with soap and water. Usually not serious. EYE CONTACT: Rinse with water. Usually not serious. INGESTION: Rinse mouth. Drink water. Therapeutic doses are safe.",
            disposalMethod: "Can be disposed with regular waste. Landfill disposal acceptable. Biodegradable."
        }
    },
    {
        id: 30,
        name: "Sodium Carbonate (Soda Ash)",
        formula: "Na₂CO₃",
        type: "salt",
        description: "Sodium carbonate, known as soda ash in its anhydrous form and washing soda as decahydrate, is one of the most important industrial chemicals. Historically produced via the Leblanc process and later the Solvay process, it's now mainly from natural trona deposits. Applications are diverse: glass manufacturing (50% of use), chemicals production, water treatment (softening), pulp and paper, soaps and detergents, and pH adjustment. The compound is alkaline and can cause irritation to skin, eyes, and respiratory tract. First aid involves irrigation and removal from exposure. Environmental considerations include energy consumption in production and effects on water pH. Modern production has shifted to more environmentally friendly natural sources.",
        details: {
            physicalState: "White powder (anhydrous) or transparent crystals (hydrates). Odorless. Density: 2.54 g/cm³. MP: 851°C.",
            composition: "Anhydrous Na₂CO₃ or decahydrate Na₂CO₃·10H₂O. Technical grade: 99% pure. Dense and light grades available.",
            function: "Glass manufacture, chemical production, water softening, pulp/paper, detergents, pH adjustment, food processing, metallurgy.",
            origin: "Natural: trona deposits (USA, Turkey). Synthetic: Solvay process (declining). World production: ~60 million tons annually.",
            toxicity: "Low to moderate toxicity. Alkaline - irritates eyes, skin, respiratory tract. LD50 (oral, rat): 4090 mg/kg.",
            flammability: "Non-flammable. Not combustible.",
            reactivity: "Alkaline - reacts with acids. Hygroscopic (anhydrous). Forms hydrates. Corrosive to aluminum, zinc.",
            acidity: "Basic salt: 1% solution pH ~11.5. Due to carbonate hydrolysis: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻.",
            biologicalEffect: "Alkaline irritation. Systemic: metabolic alkalosis if large amounts ingested. Generally low toxicity. Environmental: raises water pH.",
            usage: "Glass manufacture (50%), chemicals (25%), soaps/detergents (10%), water treatment (5%), pulp/paper (5%), other (5%).",
            handlingPrecautions: "Wear gloves, goggles, dust mask. Avoid dust generation. Industrial: dust control, ventilation.",
            storageConditions: "Store in dry place. Anhydrous: protect from moisture. Bulk storage in silos. Separate from acids.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek medical attention if symptoms persist. SKIN CONTACT: Wash with plenty of soap and water. Seek medical attention if irritation persists. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth. Drink water or milk. Seek medical attention if large amount ingested.",
            disposalMethod: "Dissolve in water, neutralize with acid if desired, flush with plenty of water. Large quantities: landfill disposal acceptable."
        }
    },
    {
        id: 31,
        name: "Sodium Bicarbonate (Baking Soda)",
        formula: "NaHCO₃",
        type: "salt",
        description: "Sodium bicarbonate is a white crystalline powder with alkaline taste, known universally as baking soda. It decomposes when heated (>50°C) releasing carbon dioxide, which causes leavening in baked goods. Beyond culinary uses, it serves as a mild antacid, cleaning agent, fire extinguisher (for Class B and C fires), pH buffer, and deodorizer. The compound is amphoteric (can act as weak acid or base) and has excellent buffering capacity around pH 8.3. Safety profile is excellent with very low toxicity. First aid measures are minimal. Environmental impact is benign. Industrial production is via the Solvay process or from natural trona deposits. The versatility and safety of sodium bicarbonate make it one of the most widely used chemicals in household and industry.",
        details: {
            physicalState: "White crystalline powder. Odorless, slightly alkaline taste. Density: 2.20 g/cm³. Decomposes at 50°C.",
            composition: "Pure NaHCO₃. Food grade: ≥99% pure. Technical grades available.",
            function: "Leavening agent, antacid, cleaning agent, fire extinguisher, pH buffer, deodorizer, chemical intermediate, medical uses.",
            origin: "Solvay process: NaCl + NH₃ + CO₂ + H₂O → NaHCO₃ + NH₄Cl. Also from natural trona. World production: ~2 million tons annually.",
            toxicity: "Very low toxicity. LD50 (oral, rat): 4220 mg/kg. GRAS as food additive. Excessive intake: metabolic alkalosis.",
            flammability: "Non-flammable. Actually used in fire extinguishers - decomposes releasing CO₂.",
            reactivity: "Amphoteric: reacts with acids (releasing CO₂) and strong bases (forming carbonate). Decomposes when heated: 2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O.",
            acidity: "Amphoteric: pKa₁ (HCO₃⁻/CO₃²⁻) = 10.3, pKa₂ (H₂CO₃/HCO₃⁻) = 6.4. Excellent buffer at pH ~8.3.",
            biologicalEffect: "Antacid: neutralizes stomach acid. Systemic: can cause metabolic alkalosis if excessive. Generally safe. Renal patients: sodium loading concern.",
            usage: "Food (baking - 30%), animal feed (25%), chemicals (20%), pharmaceuticals (10%), fire extinguishers (5%), other (10%).",
            handlingPrecautions: "Normal laboratory precautions. Wear dust mask if handling powder. Food grade: hygiene practices.",
            storageConditions: "Store in dry, cool place. Protect from moisture. No special requirements. Food grade: protect from contamination.",
            firstAidMeasures: "INHALATION: Move to fresh air. Usually not serious. SKIN CONTACT: Wash with soap and water. Usually not serious. EYE CONTACT: Rinse with water. Usually not serious. INGESTION: Rinse mouth. Drink water. Usually not serious.",
            disposalMethod: "Can be disposed with regular waste. Flush with water acceptable. Biodegradable. Environmentally benign."
        }
    },
    {
        id: 32,
        name: "Potassium Permanganate",
        formula: "KMnO₄",
        type: "salt",
        description: "Potassium permanganate is a dark purple crystalline solid that dissolves in water to give intense purple solutions. It's a strong oxidizing agent used in water treatment (disinfection, iron/manganese removal), analytical chemistry (redox titrations), organic synthesis (oxidation reactions), and as an antiseptic (dilute solutions). The compound stains skin and materials brown due to reduction to manganese dioxide. Safety concerns include skin/eye irritation, fire hazard when mixed with combustible materials, and environmental toxicity to aquatic life. First aid emphasizes irrigation and removal of contaminated clothing. Industrial handling requires precautions against dust inhalation and contamination with organic materials. The distinctive color makes accidental exposure obvious.",
        details: {
            physicalState: "Dark purple, almost black crystals with metallic sheen. Odorless. Density: 2.70 g/cm³. Decomposes at 240°C.",
            composition: "Pure KMnO₄. Reagent grade: ≥99%. Technical grade: 97-99%.",
            function: "Oxidizing agent for water treatment, analytical chemistry, organic synthesis, antiseptic, deodorizer, bleach, chemical reagent.",
            origin: "Production from manganese dioxide: 2MnO₂ + 4KOH + O₂ → 2K₂MnO₄ + 2H₂O, then electrolytic oxidation to KMnO₄.",
            toxicity: "Oxidizer - causes burns, stains skin brown. LD50 (oral, rat): 1090 mg/kg. Environmental: toxic to aquatic life.",
            flammability: "Non-flammable but strong oxidizer - may cause ignition of combustible materials. Forms explosive mixtures with organic compounds.",
            reactivity: "Strong oxidizing agent. Reacts violently with concentrated acids, reducing agents, organic materials. Decomposes in light, with heat.",
            acidity: "Neutral salt but oxidizing reactions often acidic. Standard electrode potential: +1.51 V (acidic), +0.59 V (basic).",
            biologicalEffect: "Oxidizes tissues - corrosive. Antiseptic in dilution (0.1%). Stains skin/mucous membranes brown (manganese dioxide). Systemic: manganese toxicity possible.",
            usage: "Water treatment (40%), chemicals (30%), analytical chemistry (15%), pharmaceuticals (10%), other (5%).",
            handlingPrecautions: "Wear gloves, goggles, lab coat (stains!). Avoid contact with organic materials, acids. Use in well-ventilated area.",
            storageConditions: "Store in tightly closed containers in cool, dark place. Separate from organic materials, reducing agents, acids. Label as oxidizer.",
            firstAidMeasures: "INHALATION: Move to fresh air. If breathing difficult, give oxygen. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash with plenty of soap and water. Stains may be difficult to remove. Seek medical attention. EYE CONTACT: Rinse immediately with gently flowing water for 15 minutes. Seek medical attention. INGESTION: Rinse mouth. Do NOT induce vomiting. Drink water. Seek medical attention.",
            disposalMethod: "Reduce with sodium bisulfite or hydrogen peroxide in acidic medium to manganese(II). Never discharge purple solutions. Hazardous waste disposal."
        }
    },
    {
        id: 33,
        name: "Sodium Thiosulfate (Hypo)",
        formula: "Na₂S₂O₃",
        type: "salt",
        description: "Sodium thiosulfate is a colorless crystalline solid typically encountered as pentahydrate. It's known historically as 'hypo' in photography (fixing agent that removes unexposed silver halides). Other applications include cyanide antidote, chlorine removal in water treatment, gold extraction (forms soluble complex), and iodometric titrations. The compound decomposes in acid producing sulfur dioxide and elemental sulfur. Safety profile is good with low toxicity. First aid measures are minimal. Industrial handling requires protection against dust. The compound is reducing agent and finds use in bleaching, dechlorination, and analytical chemistry. Environmental impact is minimal due to low toxicity and biodegradability.",
        details: {
            physicalState: "Colorless monoclinic crystals (pentahydrate) or white powder (anhydrous). Odorless. Density: 1.67 g/cm³ (pentahydrate).",
            composition: "Typically pentahydrate Na₂S₂O₃·5H₂O. Anhydrous form available. Reagent grade: ≥99%.",
            function: "Photographic fixing agent, cyanide antidote, chlorine neutralizer, gold leaching, iodometric titrations, bleaching, medical uses.",
            origin: "Production from sodium sulfite and sulfur: Na₂SO₃ + S → Na₂S₂O₃. Or from sodium sulfide and sulfur.",
            toxicity: "Low toxicity. LD50 (oral, rat): >5000 mg/kg. Decomposes in stomach acid producing sulfur dioxide.",
            flammability: "Non-flammable. Not combustible.",
            reactivity: "Decomposes in acid: S₂O₃²⁻ + 2H⁺ → S + SO₂ + H₂O. Reducing agent. Forms complexes with metals (Ag, Au).",
            acidity: "Neutral salt: pH ~7 in aqueous solution.",
            biologicalEffect: "Low toxicity. Cyanide antidote: converts to thiocyanate. Dechlorination agent. Some laxative effect in large doses.",
            usage: "Photography (declining), water treatment (30%), mining (gold extraction - 25%), chemicals (20%), medical (10%), other (15%).",
            handlingPrecautions: "Normal laboratory precautions. Wear dust mask if handling powder. Avoid contact with strong acids.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Protect from moisture. Separate from acids.",
            firstAidMeasures: "INHALATION: Move to fresh air. Usually not serious. SKIN CONTACT: Wash with soap and water. Usually not serious. EYE CONTACT: Rinse with water. Usually not serious. INGESTION: Rinse mouth. Drink water. Usually not serious.",
           {
        id: 34,
        name: "Ferric Sulfate",
        formula: "Fe₂(SO₄)₃",
        type: "salt",
        description: "Ferric sulfate is a yellow, rhombic crystalline solid or grayish-white powder that dissolves readily in water to form acidic solutions due to hydrolysis. This inorganic salt is primarily manufactured by oxidizing ferrous sulfate with sulfuric acid and an oxidizing agent like nitric acid or hydrogen peroxide. Industrial applications are dominated by water and wastewater treatment, where it serves as an effective coagulant for removing suspended solids, phosphorus, and color compounds through formation of iron(III) hydroxide flocs. Additional uses include soil amendment for pH adjustment, pigment manufacturing, etching aluminum, and as a mordant in textile dyeing. The compound exhibits moderate toxicity with primary hazards arising from its acidic nature and potential for dust irritation. Environmental considerations involve careful management of iron discharge to prevent ecosystem disruption, though iron is an essential micronutrient. First aid protocols emphasize thorough irrigation for eye and skin exposure, with medical evaluation recommended for significant inhalational or ingestional incidents.",
        details: {
            physicalState: "Yellow to grayish-white hygroscopic crystals or powder. Typically exists as hydrate (Fe₂(SO₄)₃·9H₂O). Odorless. Density: 3.10 g/cm³. Melting point: 480°C (decomposition). Soluble in water (440 g/L at 20°C), insoluble in organic solvents.",
            composition: "Anhydrous Fe₂(SO₄)₃ or various hydrates. Commercial grades often contain 20-23% iron. May contain trace impurities of other metals depending on production method. Technical grade solutions typically 40-50% concentration.",
            function: "Primary use as coagulant in water/wastewater treatment (removes phosphorus, suspended solids, color). Secondary applications include soil pH adjustment, pigment production (iron oxide), etching agent for aluminum, mordant in dyeing, and laboratory reagent for analytical chemistry.",
            origin: "Industrial production via oxidation of ferrous sulfate: 2FeSO₄ + H₂SO₄ + [O] → Fe₂(SO₄)₃ + H₂O. Oxidation achieved with nitric acid, hydrogen peroxide, or chlorates. Also produced as byproduct from titanium dioxide manufacture via sulfate process. World production approximately 600,000 tons annually.",
            toxicity: "Moderate acute toxicity (oral LD50 rat: 500 mg/kg). Causes irritation to eyes, skin, and respiratory tract. Chronic exposure may lead to respiratory issues. Not classified as carcinogen. Environmental toxicity: LC50 (fish, 96h): 100-300 mg/L. Iron accumulation can cause ecosystem disruption.",
            flammability: "Non-flammable solid. Does not support combustion. However, may decompose at high temperatures (above 480°C) releasing sulfur oxides. No explosive properties.",
            reactivity: "Highly soluble in water with exothermic dissolution. Solutions are acidic due to hydrolysis: Fe³⁺ + 3H₂O ⇌ Fe(OH)₃ + 3H⁺. Acts as oxidizing agent. Reacts with bases, carbonates, and sulfides. Corrosive to many metals including steel, aluminum, and copper. Incompatible with strong reducing agents.",
            acidity: "Strongly acidic in aqueous solution. 0.1 M solution has pH approximately 2.5. Hydrolysis constant Kh = 6×10⁻³. More acidic than aluminum sulfate due to stronger hydrolysis of Fe³⁺ compared to Al³⁺.",
            biologicalEffect: "Acute exposure causes irritation of mucous membranes, eyes, and skin. Ingestion may lead to gastrointestinal distress. Chronic exposure can cause respiratory irritation. Iron is essential nutrient but excess causes oxidative stress. Environmental: beneficial as micronutrient at low concentrations but toxic at high levels to aquatic organisms.",
            usage: "Water/wastewater treatment (75%), soil amendment and fertilizers (15%), pigments and dyes (5%), metal surface treatment (3%), laboratory and analytical applications (2%). Market value approximately $200 million annually.",
            handlingPrecautions: "Wear chemical-resistant gloves (nitrile or neoprene), safety goggles, and lab coat. Use local exhaust ventilation or respiratory protection when handling powder. Avoid contact with eyes, skin, and clothing. Do not eat, drink, or smoke in handling area. Use corrosion-resistant equipment (plastic, rubber-lined, or stainless steel 316).",
            storageConditions: "Store in tightly sealed containers in cool, dry, well-ventilated area away from incompatible materials. Keep away from moisture to prevent caking. Store separately from bases, reducing agents, and reactive metals. Temperature should not exceed 30°C. Shelf life: 2 years in proper storage.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. If breathing is difficult, administer oxygen. Seek medical attention if symptoms persist. SKIN CONTACT: Remove contaminated clothing. Wash affected area thoroughly with soap and water for at least 15 minutes. Seek medical attention if irritation develops. EYE CONTACT: Immediately flush eyes with gently flowing water for at least 20 minutes, holding eyelids open. Seek immediate medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Give 1-2 glasses of water to drink. Never give anything by mouth to unconscious person. Seek immediate medical attention. Note: Iron poisoning treatment may involve chelation therapy if significant absorption occurs.",
            disposalMethod: "Small quantities: neutralize with sodium carbonate or lime to pH 6.5-8.5, then dilute and flush to sewer with plenty of water (check local regulations). Large quantities: precipitate as iron hydroxide by adjusting to pH 8-9 with lime, then dispose of sludge in approved landfill. Never discharge untreated to natural water bodies. Consider recycling iron content where feasible."
        }
    },
    {
        id: 35,
        name: "Barium Chloride",
        formula: "BaCl₂",
        type: "salt",
        description: "Barium chloride is a white crystalline inorganic salt that exists most commonly as the dihydrate (BaCl₂·2H₂O). It is highly soluble in water and one of the most important water-soluble barium compounds. Industrial production typically involves reaction of barium carbonate or barium sulfide with hydrochloric acid. Primary applications include analytical chemistry for sulfate determination (forming insoluble barium sulfate), heat treatment salts for steel processing, manufacturing of other barium compounds, and as a precursor for barium titanate in electronics. The compound is severely toxic due to barium ion, which acts as a potent potassium channel blocker affecting skeletal, smooth, and cardiac muscle function. Safety protocols require stringent controls including engineering measures, personal protective equipment, and prohibition of eating/drinking in work areas. First aid for ingestion involves immediate medical attention and administration of sulfate salts to precipitate insoluble barium sulfate in the gut. Environmental discharge is strictly regulated due to barium's toxicity to aquatic life.",
        details: {
            physicalState: "White orthorhombic crystals (dihydrate) or cubic crystals (anhydrous). Odorless. Dihydrate density: 3.10 g/cm³. Melting point: 962°C (anhydrous), dihydrate loses water at 113°C. Soluble in water (358 g/L at 20°C), moderately soluble in methanol, insoluble in most organic solvents.",
            composition: "Typically dihydrate BaCl₂·2H₂O, but anhydrous form also commercially available. Reagent grade ≥99% purity. May contain trace impurities of strontium, calcium, and iron.",
            function: "Analytical chemistry (qualitative and quantitative sulfate analysis), heat treatment salt for steel, manufacturing of other barium compounds (barium carbonate, titanate), water treatment, fireworks (green color), leather tanning, and laboratory reagent.",
            origin: "Produced from barium carbonate: BaCO₃ + 2HCl → BaCl₂ + CO₂ + H₂O. Alternatively from barium sulfide: BaS + 2HCl → BaCl₂ + H₂S. World production approximately 50,000 tons annually, mainly in China, India, and Germany.",
            toxicity: "Highly toxic (oral LD50 rat: 118 mg/kg). Barium ion is potassium channel blocker causing hypokalemia, muscle paralysis, cardiac arrhythmias. TLV-TWA: 0.5 mg/m³ (as Ba). Not classifiable as carcinogen (IARC Group 3). Environmental: very toxic to aquatic life (LC50 fish: 10-100 mg/L).",
            flammability: "Non-flammable solid. Does not support combustion. No explosive properties when pure. May decompose at high temperatures (>962°C) releasing chlorine gas.",
            reactivity: "Highly soluble in water. Reacts with sulfates forming insoluble BaSO₄. Also reacts with carbonates, phosphates, chromates forming corresponding precipitates. Reacts with sulfuric acid producing HCl gas. Incompatible with strong oxidizers.",
            acidity: "Neutral salt in aqueous solution (pH ≈7). Does not hydrolyze significantly. Barium ion has minimal acidic character.",
            biologicalEffect: "Barium ion blocks voltage-gated potassium channels causing: 1) Initial muscle stimulation (tingling, muscle twitching), 2) Progressive paralysis (including respiratory muscles), 3) Cardiac effects (hypertension followed by hypotension, arrhythmias), 4) Hypokalemia. Treatment involves intravenous potassium and magnesium sulfate administration. Chronic exposure may cause baritosis (benign pneumoconiosis).",
            usage: "Analytical chemistry and laboratories (40%), chemical manufacturing (30%), metal treatment (15%), water treatment (10%), other (5%). Declining use due to toxicity concerns.",
            handlingPrecautions: "Use only in chemical fume hood with appropriate containment. Wear appropriate respirator (P100 filters), impermeable gloves (butyl rubber), chemical goggles, and protective clothing. Implement strict hygiene measures: no eating/drinking in area, separate work clothes. Engineering controls: local exhaust ventilation, closed systems. Monitor airborne barium levels. Medical surveillance recommended for workers.",
            storageConditions: "Store in tightly sealed containers in cool, dry, well-ventilated, secure area. Clearly label with poison symbols. Store separately from food, beverages, and sulfate compounds. Secondary containment recommended. Temperature should not exceed 25°C. Shelf life: indefinite if kept dry.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen if breathing difficult. Seek IMMEDIATE medical attention. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water for at least 15 minutes. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for at least 20 minutes, holding eyelids open. Seek immediate medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. If conscious, give 1-2 glasses of water. Administer magnesium sulfate or sodium sulfate solution (30 g in 250 mL water) if available and instructed by medical personnel. Seek IMMEDIATE medical attention - monitor ECG and serum potassium. Never give anything by mouth to unconscious person.",
            disposalMethod: "Convert to insoluble barium sulfate by treatment with excess sodium sulfate solution. Filter precipitate, dry, and dispose as hazardous waste in approved landfill. Never discharge to sewer or water bodies. Small quantities for laboratories: collect in designated containers for hazardous waste disposal. Consider barium recovery for economic and environmental benefits."
        }
    },
    {
        id: 36,
        name: "Magnesium Sulfate (Epsom Salt)",
        formula: "MgSO₄",
        type: "salt",
        description: "Magnesium sulfate, commonly known as Epsom salt when hydrated, is a colorless crystalline inorganic compound that occurs naturally as several minerals including epsomite (heptahydrate) and kieserite (monohydrate). The heptahydrate (MgSO₄·7H₂O) is most familiar for household and medical use. Industrial production derives from mining natural deposits or chemical synthesis from magnesium compounds and sulfuric acid. Applications span agriculture (magnesium and sulfur fertilizer), medicine (treatment of magnesium deficiency, eclampsia, constipation), personal care (bath salts), brewing (water adjustment), and as a drying agent. The compound exhibits very low toxicity with an excellent safety profile, classified as Generally Recognized As Safe (GRAS) by FDA. First aid measures are minimal, primarily involving irrigation for eye exposure. Environmental impact is benign as magnesium and sulfate are natural components of seawater and soil. Magnesium sulfate's versatility, safety, and low cost ensure continued widespread use across multiple sectors.",
        details: {
            physicalState: "Colorless orthorhombic crystals (heptahydrate) or white powder (anhydrous). Odorless with bitter-salty taste. Heptahydrate density: 1.68 g/cm³. Melting point: anhydrous decomposes at 1124°C; heptahydrate loses water at 150°C. Highly soluble in water (710 g/L at 20°C for heptahydrate), sparingly soluble in ethanol, insoluble in most organic solvents.",
            composition: "Exists in multiple hydrate forms: heptahydrate (MgSO₄·7H₂O, Epsom salt), monohydrate, and anhydrous. Pharmaceutical grade ≥99.5% pure. May contain trace calcium, sodium, potassium impurities.",
            function: "Agriculture (magnesium and sulfur fertilizer), medicine (magnesium replacement therapy, anticonvulsant for eclampsia, osmotic laxative), bath salts and personal care, brewing water adjustment, textile processing, cement retarder, laboratory reagent, and drying agent.",
            origin: "Natural: mining of epsomite, kieserite, langbeinite. Synthetic: reaction of magnesium oxide/hydroxide/carbonate with sulfuric acid: MgO + H₂SO₄ → MgSO₄ + H₂O. Also byproduct from seawater magnesia production. World production approximately 2.5 million tons annually.",
            toxicity: "Very low toxicity (oral LD50 rat: 5000 mg/kg). Generally Recognized As Safe (GRAS) as food additive. Excessive medical doses can cause hypermagnesemia with symptoms: flushing, hypotension, CNS depression, respiratory depression, cardiac arrest. No evidence of carcinogenicity, mutagenicity, or reproductive toxicity.",
            flammability: "Non-flammable solid. Does not support combustion. Actually used in some fire extinguishing formulations. No explosive properties.",
            reactivity: "Highly soluble in water with endothermic dissolution. Forms various hydrates. Reacts with strong bases precipitating magnesium hydroxide. Anhydrous form is hygroscopic. Stable under normal conditions.",
            acidity: "Slightly acidic in aqueous solution (0.1 M pH ≈6.0) due to weak hydrolysis: Mg²⁺ + H₂O ⇌ MgOH⁺ + H⁺. pKa for Mg²⁺ hydrolysis = 11.4.",
            biologicalEffect: "Essential mineral involved in >300 enzymatic reactions. Medical uses: 1) Anticonvulsant (eclampsia) via CNS depression, 2) Laxative (osmotic effect), 3) Magnesium replacement. Toxicity from overdose: hypermagnesemia causing CNS depression, respiratory depression, hypotension, cardiac arrest. Treatment: calcium gluconate, supportive care, dialysis if severe.",
            usage: "Agriculture (fertilizers - 55%), pharmaceuticals and medical (25%), industrial applications (10%), personal care (bath salts - 8%), food and brewing (2%). Market value approximately $300 million annually.",
            handlingPrecautions: "Normal laboratory precautions adequate. Wear dust mask when handling powder to avoid respiratory irritation. Use gloves and safety glasses if handling large quantities. No special ventilation required. Maintain good hygiene practices.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Anhydrous form requires protection from moisture. No special segregation needed. Temperature range: 0-40°C. Shelf life: indefinite if kept dry.",
            firstAidMeasures: "INHALATION: Remove to fresh air. Usually no treatment needed. SKIN CONTACT: Wash with soap and water. No special treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: For accidental small ingestions, no treatment needed. For massive intentional overdose (medical context), seek immediate medical attention - monitor magnesium levels, ECG, provide supportive care including calcium gluconate administration if symptomatic.",
            disposalMethod: "Can be disposed with regular waste or flushed to sewer with plenty of water. No environmental restrictions. Actually beneficial for soil application. For large quantities, consider agricultural use as fertilizer. Biodegradable and non-persistent in environment."
        }
    },
    {
        id: 37,
        name: "Aluminum Sulfate (Alum)",
        formula: "Al₂(SO₄)₃",
        type: "salt",
        description: "Aluminum sulfate, commonly but inaccurately called 'alum' (true alums are double sulfates), is a white crystalline inorganic compound typically encountered with varying water of crystallization (often Al₂(SO₄)₃·18H₂O). Industrial production involves reaction of aluminum hydroxide with sulfuric acid or processing of bauxite or clay. The compound's dominant application is as a coagulant in water and wastewater treatment, where it hydrolyzes to form aluminum hydroxide floc that traps suspended particles, phosphorus, and color compounds. Additional uses include paper sizing, firefighting foam, gardening (soil acidifier), dyeing mordant, and deodorizer. Safety concerns center on its acidic properties causing irritation and aluminum's potential neurotoxicity at high exposures. First aid involves thorough irrigation and medical evaluation for significant exposures. Environmental considerations include aluminum toxicity to aquatic life, particularly in acidic waters, and potential soil acidification from agricultural use.",
        details: {
            physicalState: "White crystalline solid, granules, or powder. Odorless. Commercial forms often contain 14-18 water molecules. Density: 2.71 g/cm³ (anhydrous). Melting point: 770°C (decomposition). Soluble in water (870 g/L at 20°C for octadecahydrate), insoluble in organic solvents.",
            composition: "Typically octadecahydrate Al₂(SO₄)₃·18H₂O, but other hydrates exist. Technical grade often 17% Al₂O₃. May contain iron impurities giving yellowish tint. Food grade has strict purity specifications.",
            function: "Water/waste treatment coagulant (primary use), paper sizing agent, firefighting foam component, soil acidifier and aluminum source for plants, mordant in dyeing, deodorizer, catalyst support, and laboratory reagent.",
            origin: "Production from aluminum hydroxide: 2Al(OH)₃ + 3H₂SO₄ → Al₂(SO₄)₃ + 6H₂O. Alternative sources: bauxite, clay, or aluminum scrap. World production approximately 4 million tons annually, with major producers in China, USA, and Europe.",
            toxicity: "Low to moderate toxicity (oral LD50 rat: 6207 mg/kg). Primary hazard is irritation from acidic hydrolysis products. Aluminum exposure concerns: potential neurotoxicity (controversial), bone disease. TLV-TWA: 2 mg/m³ (as Al). Environmental: toxic to fish at low pH (LC50: 0.1-1 mg/L as Al at pH <6).",
            flammability: "Non-flammable solid. Does not support combustion. May decompose at high temperatures (>200°C) releasing sulfur oxides. No explosive properties.",
            reactivity: "Hydrolyzes in water: Al³⁺ + 3H₂O ⇌ Al(OH)₃ + 3H⁺ producing acidic solutions. Forms basic salts with incomplete hydrolysis. Reacts with carbonates, bicarbonates releasing CO₂. Corrosive to metals (steel, aluminum paradoxically). Incompatible with strong bases.",
            acidity: "Strongly acidic in solution (1% solution pH ≈3.5). Hydrolysis constant for Al³⁺: Kh = 1.4×10⁻⁵. More acidic than most trivalent metal sulfates.",
            biologicalEffect: "Irritant to eyes, skin, respiratory tract. Aluminum concerns: potential association with Alzheimer's disease (controversial), osteomalacia at high exposures. Environmental: aluminum toxic to fish at pH <6 (gill damage). Essential micronutrient for some plants.",
            usage: "Water and wastewater treatment (70%), paper industry (15%), other industrial (10%), agriculture and gardening (5%). Market value approximately $800 million annually.",
            handlingPrecautions: "Wear chemical-resistant gloves (nitrile), safety goggles, and dust mask. Use local exhaust ventilation when handling powder. Avoid contact with eyes, skin, and clothing. Use corrosion-resistant equipment (rubber-lined, plastic, or special alloys). Implement good hygiene practices.",
            storageConditions: "Store in tightly closed containers in cool, dry, well-ventilated area. Keep away from moisture to prevent caking. Store separately from bases and reactive metals. Temperature should not exceed 30°C. Shelf life: 1-2 years.",
            firstAidMeasures: "INHALATION: Remove to fresh air. If breathing difficult, administer oxygen. Seek medical attention if symptoms persist. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water for 15 minutes. Seek medical attention if irritation develops. EYE CONTACT: Immediately flush eyes with gently flowing water for at least 20 minutes, holding eyelids open. Seek medical attention. INGESTION: Rinse mouth with water. Give 1-2 glasses of water to drink. Do NOT induce vomiting. Seek medical attention if large amount ingested or symptoms develop.",
            disposalMethod: "Small quantities: neutralize with sodium carbonate or lime to pH 6.5-7.5, then dilute and flush to sewer with plenty of water. Large quantities: precipitate as aluminum hydroxide by adjusting to pH 6-7 with lime, settle, and dispose sludge in approved landfill. Consider aluminum recovery for economic value. Never discharge acidic solutions to natural waters."
        }
    },
    {
        id: 38,
        name: "Sodium Acetate",
        formula: "CH₃COONa",
        type: "salt",
        description: "Sodium acetate is the sodium salt of acetic acid, existing as colorless crystals in trihydrate form (CH₃COONa·3H₂O) or white powder in anhydrous form. It is best known for its use in reusable hot packs, where a supersaturated solution releases heat upon crystallization when triggered. Industrial production involves neutralization of acetic acid with sodium carbonate or hydroxide. Applications span food industry (preservative, acidity regulator), buffer solutions, concrete treatment, textile dyeing, and pharmaceuticals. The compound exhibits excellent safety profile with very low toxicity, classified as Generally Recognized As Safe (GRAS) by FDA. First aid measures are minimal, primarily irrigation for eye exposure. Sodium acetate is biodegradable and environmentally benign, breaking down to sodium, acetate (metabolized to bicarbonate), and water. Its unique property of releasing heat upon crystallization makes it valuable for educational demonstrations and commercial thermal products.",
        details: {
            physicalState: "Colorless deliquescent crystals (trihydrate) or white hygroscopic powder (anhydrous). Odorless or faint acetic acid odor. Trihydrate density: 1.45 g/cm³. Melting point: trihydrate 58°C (decomposes to anhydrous), anhydrous 324°C. Highly soluble in water (762 g/L at 20°C), soluble in ethanol (≈50 g/L).",
            composition: "Anhydrous CH₃COONa or trihydrate CH₃COONa·3H₂O. Food grade ≥99% purity. May contain trace sodium carbonate from hydrolysis. Technical grades vary in purity.",
            function: "Food additive (preservative, acidity regulator, flavor enhancer), buffer component, concrete sealant and accelerator, textile dyeing auxiliary, pharmaceutical applications, hot packs (heat release upon crystallization), and laboratory reagent.",
            origin: "Production by neutralization: CH₃COOH + NaOH → CH₃COONa + H₂O or 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + CO₂ + H₂O. Also byproduct from cellulose acetate production. World production approximately 100,000 tons annually.",
            toxicity: "Very low toxicity (oral LD50 rat: 3530 mg/kg). Generally Recognized As Safe (GRAS) as food additive. No evidence of carcinogenicity, mutagenicity, or reproductive toxicity. May cause irritation at high concentrations.",
            flammability: "Combustible solid but not readily flammable. Dust may form explosive mixtures with air. Decomposes when heated (>400°C) producing carbonaceous residue and sodium carbonate.",
            reactivity: "Alkaline in aqueous solution due to acetate ion hydrolysis. Forms supersaturated solutions easily. Reacts with strong acids releasing acetic acid. Hygroscopic. Stable under normal conditions.",
            acidity: "Basic salt in solution (0.1 M pH ≈8.9). Hydrolysis: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻. pKb for acetate = 9.24. Excellent buffer capacity when combined with acetic acid (pKa 4.76).",
            biologicalEffect: "Essentially non-toxic. Acetate is normal metabolite converted to bicarbonate in liver. Used in intravenous solutions as buffer. Excessive intake may cause electrolyte imbalance. No significant adverse effects at normal exposure levels.",
            usage: "Food industry (preservatives, seasonings - 40%), industrial applications (concrete, textiles - 30%), hot packs and heating devices (20%), pharmaceuticals and laboratories (10%). Growing market in thermal energy storage applications.",
            handlingPrecautions: "Normal laboratory precautions adequate. Wear dust mask when handling powder to avoid respiratory irritation. Use gloves and safety glasses if handling large quantities. No special ventilation required. For food grade, maintain hygiene standards.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Anhydrous form requires protection from moisture. No special segregation needed. Temperature range: 0-30°C. Shelf life: 3 years if kept dry.",
            firstAidMeasures: "INHALATION: Remove to fresh air. No treatment usually needed. SKIN CONTACT: Wash with soap and water. No special treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Drink water. No special treatment needed unless massive amount ingested.",
            disposalMethod: "Can be disposed with regular waste or flushed to sewer with plenty of water. Biodegradable - acetate degrades rapidly in environment. No environmental restrictions. Consider composting for large organic quantities."
        }
    },
    {
        id: 39,
        name: "Potassium Dichromate",
        formula: "K₂Cr₂O₇",
        type: "salt",
        description: "Potassium dichromate is an orange-red crystalline inorganic compound that serves as a powerful oxidizing agent. It contains hexavalent chromium, which is highly toxic, carcinogenic, and a potent sensitizer. Industrial production involves processing chromite ore with alkali and acid. Historical applications included cleaning solutions for glassware, leather tanning, wood preservation, photography, and analytical chemistry. However, due to severe toxicity and carcinogenicity, many uses have been discontinued or heavily regulated. Current limited applications exist in specialized industrial processes under strict controls. Safety protocols are extremely stringent, requiring engineering controls, personal protective equipment, medical surveillance, and environmental monitoring. First aid for exposure involves immediate decontamination and medical evaluation. Environmental regulations strictly control discharge due to chromium's persistence, bioaccumulation potential, and toxicity to aquatic life.",
        details: {
            physicalState: "Bright orange-red triclinic crystals. Odorless. Density: 2.68 g/cm³. Melting point: 398°C (with decomposition). Soluble in water (130 g/L at 20°C), insoluble in ethanol. Aqueous solutions are orange.",
            composition: "Pure K₂Cr₂O₇. Reagent grade ≥99.5% purity. May contain trace sulfate, chloride, and sodium impurities. Technical grades typically 98-99% pure.",
            function: "Historical: oxidizing agent for cleaning, leather tanning, wood preservation, photography, analytical chemistry. Current limited use: specialized oxidation processes, corrosion inhibitor in closed systems, laboratory reagent under strict controls. Being replaced by less toxic alternatives.",
            origin: "Production from chromite (FeCr₂O₄): roasting with sodium carbonate and lime, leaching with water to give sodium chromate, acidification to dichromate, then conversion to potassium salt. World production declining, currently <50,000 tons annually due to restrictions.",
            toxicity: "Extremely toxic (oral LD50 rat: 25 mg/kg). Hexavalent chromium: confirmed human carcinogen (IARC Group 1), potent sensitizer (chromium allergy), corrosive. TLV-TWA: 0.05 mg/m³ (as CrO₃). Environmental: very toxic to aquatic life (LC50 fish: 1-10 mg/L).",
            flammability: "Non-flammable solid but strong oxidizer - may cause ignition of combustible materials. Decomposes at >500°C releasing oxygen. Forms explosive mixtures with organic compounds.",
            reactivity: "Powerful oxidizing agent (E° = +1.33 V in acid). Reacts violently with reducing agents, organic materials, alcohols, hydrazines. Acidic in solution: Cr₂O₇²⁻ + H₂O ⇌ 2HCrO₄⁻. Corrosive to metals. Light sensitive.",
            acidity: "Acidic in aqueous solution (0.1 M pH ≈4). Acts as source of chromic acid (H₂Cr₂O₇) in acid medium. Dichromate-chromate equilibrium depends on pH.",
            biologicalEffect: "Hexavalent chromium enters cells via sulfate transporters, reduces to trivalent chromium intracellularly generating reactive oxygen species. Effects: corrosive burns, allergic contact dermatitis, nasal septum perforation, asthma, lung cancer (latency 10-20 years). Systemic: kidney and liver damage. Mutagenic and clastogenic.",
            usage: "Limited to specialized applications under strict control: metal treatment (40%), laboratory and analytical (30%), residual use in pigments and dyes (20%), other (10%). Declining rapidly due to regulations.",
            handlingPrecautions: "Use only in enclosed systems or fume hoods with appropriate filtration (HEPA). Wear appropriate respirator (P100 with organic vapor cartridge for dust/vapor), impermeable gloves (butyl rubber), chemical goggles, face shield, and protective clothing. Implement strict hygiene: no eating/drinking, separate work clothes, shower after work. Engineering controls: local exhaust ventilation, closed processes. Biological monitoring (urinary chromium) required for workers.",
            storageConditions: "Store in tightly sealed containers in cool, dry, well-ventilated, secure area with restricted access. Clearly label with poison, carcinogen, and oxidizer symbols. Store separately from organic materials, reducing agents, acids, and combustible materials. Secondary containment required. Temperature should not exceed 25°C. Shelf life: indefinite if kept dry.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen if breathing difficult. Seek IMMEDIATE medical attention - inform of hexavalent chromium exposure. SKIN CONTACT: Remove contaminated clothing immediately. Wash thoroughly with soap and water for at least 20 minutes. Seek IMMEDIATE medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for at least 30 minutes, holding eyelids open. Seek IMMEDIATE medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. If conscious, give 1-2 glasses of water or milk. Seek IMMEDIATE medical attention - gastric lavage may be indicated. Never give anything by mouth to unconscious person.",
            disposalMethod: "Must be reduced to trivalent chromium before disposal. Treatment: reduce with sulfur dioxide, sodium bisulfite, or iron(II) sulfate at acidic pH (pH 2-3) until orange color disappears (converts to green Cr³⁺). Then neutralize to pH 8-9 with lime to precipitate chromium hydroxide. Filter and dispose sludge as hazardous waste in approved landfill. Never discharge hexavalent chromium to sewer or environment. Consider professional hazardous waste services."
        }
    },
    {
        id: 40,
        name: "Potassium Ferrocyanide (Yellow Prussiate)",
        formula: "K₄[Fe(CN)₆]",
        type: "salt",
        description: "Potassium ferrocyanide is a lemon-yellow crystalline coordination compound containing iron in the +2 oxidation state coordinated to six cyanide ligands. Despite containing cyanide groups, it exhibits very low toxicity because the cyanide is tightly bound to iron in a stable octahedral complex that resists dissociation under physiological conditions. Industrial production historically derived from gas works but now involves direct synthesis from hydrogen cyanide, iron, and potassium hydroxide. Major applications include anti-caking agent in table salt and other powdered foods, pigment production (Prussian blue), case hardening of steel, and chemical synthesis. Safety concerns are minimal for the intact compound but significant if heated strongly or treated with concentrated acids, which can release hydrogen cyanide. First aid measures are straightforward for normal handling but require immediate action if decomposition occurs. Environmental impact is low due to low toxicity and degradation to iron and cyanide complexes that are further broken down.",
        details: {
            physicalState: "Lemon-yellow monoclinic crystals (trihydrate) or pale yellow powder (anhydrous). Odorless. Trihydrate density: 1.85 g/cm³. Melting point: decomposes at >100°C (loses water), then at >400°C decomposes to KCN, Fe, C, N₂. Soluble in water (330 g/L at 20°C), insoluble in ethanol.",
            composition: "Typically trihydrate K₄[Fe(CN)₆]·3H₂O. Anhydrous form also available. Food grade ≥99% purity. May contain trace potassium chloride or sulfate.",
            function: "Anti-caking agent in table salt and other food powders (primary use), precursor to pigments (Prussian blue, Turnbull's blue), case hardening of steel, chemical synthesis, laboratory reagent, electroplating additive.",
            origin: "Production from hydrogen cyanide: 6HCN + Fe + 4KOH → K₄[Fe(CN)₆] + 4H₂O. Historically from gas works (reaction of iron with coal gas containing HCN and NH₃). World production approximately 80,000 tons annually.",
            toxicity: "Very low toxicity intact (oral LD50 rat: 6400 mg/kg). Generally Recognized As Safe (GRAS) as food additive. However, decomposes to toxic products with strong acids or heat: releases HCN. Not carcinogenic or mutagenic. Environmental: low toxicity to aquatic life.",
            flammability: "Non-flammable solid. Decomposes when heated (>400°C) producing toxic gases including hydrogen cyanide, nitrogen oxides, and carbon monoxide. Dust may form explosive mixtures with air.",
            reactivity: "Stable complex under normal conditions. Decomposes with concentrated acids: [Fe(CN)₆]⁴⁻ + 6H⁺ → Fe²⁺ + 6HCN. Oxidizes to ferricyanide with chlorine, hydrogen peroxide. Forms insoluble salts with heavy metals (copper, zinc). Photosensitive.",
            acidity: "Neutral salt in aqueous solution (pH ≈7). Complex anion does not hydrolyze significantly. Potassium ion is spectator.",
            biologicalEffect: "Very low toxicity due to stable complex - minimal cyanide release in gastrointestinal tract. Metabolized to thiocyanate by rhodanese if any cyanide released. Chronic exposure at very high doses may cause thyroid effects due to thiocyanate. Generally considered safe at food use levels.",
            usage: "Food industry (anti-caking in salt - 60%), pigments and dyes (20%), metal treatment (10%), chemical manufacturing (5%), other (5%). Stable market due to essential function in salt production.",
            handlingPrecautions: "Normal laboratory precautions adequate. Wear dust mask when handling powder. Avoid contact with strong acids. Use in well-ventilated area. No special ventilation required for normal handling. For food grade, maintain hygiene standards.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Protect from light and moisture. Store separately from strong acids. Temperature should not exceed 30°C. Shelf life: 3 years.",
            firstAidMeasures: "INHALATION (normal dust): Remove to fresh air. No treatment usually needed. INHALATION (decomposition fumes): Remove to fresh air immediately. Administer oxygen. If HCN exposure suspected, use cyanide antidote kit (amyl nitrite, sodium nitrite, sodium thiosulfate) under medical supervision. Seek IMMEDIATE medical attention. SKIN CONTACT: Wash with soap and water. No special treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Drink water. Seek medical attention only if massive amount ingested or symptoms develop.",
            disposalMethod: "Small quantities: dissolve in water, oxidize with hypochlorite solution (household bleach) to convert cyanide to cyanate, then flush to sewer with plenty of water. Large quantities: treat with alkaline chlorination or hydrogen peroxide oxidation, then neutralize and dispose. Consider recovery for economic value."
        }
    },
   {
        id: 41,
        name: "Potassium Ferricyanide (Red Prussiate)",
        formula: "K₃[Fe(CN)₆]",
        type: "salt",
        description: "Potassium ferricyanide is a bright red crystalline coordination compound containing iron in the +3 oxidation state coordinated to six cyanide ligands, forming a stable octahedral complex. Despite containing cyanide groups, it exhibits low toxicity because the cyanide is tightly bound to iron, resisting dissociation under normal conditions. The compound is produced by oxidation of potassium ferrocyanide using chlorine or hydrogen peroxide. Primary applications include photography (cyanotype process, blueprints), electroplating, etching, analytical chemistry (redox titrations), and as a mild oxidizing agent in organic synthesis. Safety concerns are minimal for the intact compound but include potential cyanide release with strong acids or UV light exposure. First aid measures are straightforward for normal handling but require immediate action if decomposition occurs. Environmental impact is low due to low toxicity and photodegradation. While some applications have declined with digital technology, specialty uses continue in photography, electronics, and analytical chemistry.",
        details: {
            physicalState: "Bright red monoclinic crystals. Odorless. Density: 1.89 g/cm³. Decomposes at >300°C. Soluble in water (330 g/L at 20°C), slightly soluble in ethanol. Aqueous solutions are yellow-green and photosensitive.",
            composition: "Pure K₃[Fe(CN)₆]. Reagent grade ≥99% purity. Often contains 0.5-1% moisture. May contain trace chloride, sulfate impurities.",
            function: "Photography (cyanotypes, blueprints), electroplating (gold, silver), etching (circuit boards), analytical chemistry (redox indicator, titrations), mild oxidizing agent in organic synthesis, laboratory reagent.",
            origin: "Production by oxidation of potassium ferrocyanide: 2K₄[Fe(CN)₆] + Cl₂ → 2K₃[Fe(CN)₆] + 2KCl. Alternative oxidants: hydrogen peroxide, potassium permanganate. World production approximately 5,000 tons annually.",
            toxicity: "Low toxicity intact (oral LD50 rat: 2970 mg/kg). However, decomposes to toxic products with strong acids or UV light: releases HCN. Not classified as carcinogen. Skin sensitizer in some individuals. Environmental: moderately toxic to aquatic life (LC50 fish: 50-100 mg/L).",
            flammability: "Non-flammable solid. Decomposes when heated (>300°C) producing toxic gases including hydrogen cyanide, nitrogen oxides. Dust may form explosive mixtures with air.",
            reactivity: "Mild oxidizing agent (E° = +0.36 V). Decomposes with concentrated acids: 2[Fe(CN)₆]³⁻ + 12H⁺ → 2Fe³⁺ + 12HCN. Also decomposes with UV light. Forms Prussian blue with iron(II) salts: 3[Fe(CN)₆]³⁻ + 4Fe²⁺ → Fe₄[Fe(CN)₆]₃. Reacts with reducing agents.",
            acidity: "Neutral salt in aqueous solution (pH ≈7). Complex anion does not hydrolyze significantly. Potassium ion is spectator.",
            biologicalEffect: "Low toxicity due to stable complex - minimal cyanide release under normal conditions. May cause skin sensitization (allergic contact dermatitis). If decomposition occurs, cyanide toxicity symptoms: headache, dizziness, nausea, respiratory distress, convulsions, coma. Treatment: cyanide antidote kit.",
            usage: "Photography and blueprinting (40%, declining), electroplating and electronics (30%), analytical chemistry (20%), other (10%). Market stable but small due to specialized applications.",
            handlingPrecautions: "Wear gloves, safety goggles, and lab coat. Avoid contact with strong acids. Use in well-ventilated area. Protect from light (store in amber containers). No eating, drinking, or smoking in handling area. For large quantities, use local exhaust ventilation.",
            storageConditions: "Store in tightly closed amber containers in cool, dry, well-ventilated area. Protect from light and moisture. Store separately from strong acids, reducing agents. Temperature should not exceed 25°C. Shelf life: 2 years.",
            firstAidMeasures: "INHALATION (dust): Remove to fresh air. Usually no treatment needed. INHALATION (decomposition fumes): Remove to fresh air immediately. Administer oxygen. If HCN exposure suspected, use cyanide antidote kit under medical supervision. Seek IMMEDIATE medical attention. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water for 15 minutes. Seek medical attention if irritation or sensitization develops. EYE CONTACT: Immediately flush eyes with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Do NOT induce vomiting. Drink water. Seek medical attention - monitor for cyanide symptoms.",
            disposalMethod: "Small quantities: dissolve in water, treat with alkaline hypochlorite solution (household bleach) to oxidize cyanide to cyanate, then flush to sewer with plenty of water. Large quantities: alkaline chlorination or hydrogen peroxide oxidation followed by neutralization. Consider recovery for valuable components. Never discharge untreated to environment."
        }
    },

    // D. INDICATORS (42-50)
    {
        id: 42,
        name: "Phenolphthalein",
        formula: "C₂₀H₁₄O₄",
        type: "indicator",
        description: "Phenolphthalein is a synthetic organic compound that serves as one of the most commonly used pH indicators in chemistry education and laboratory practice. It appears as white to pale yellow crystals and is famous for its dramatic color change from colorless in acidic and neutral solutions (pH < 8.2) to pink/fuchsia in basic solutions (pH 8.2-10.0), becoming colorless again in strongly basic solutions (pH > 10). Historically, it was widely used as an over-the-counter laxative (Ex-Lax) but has been largely withdrawn due to carcinogenicity concerns. The compound is synthesized from phthalic anhydride and phenol in the presence of sulfuric acid. Current applications are primarily limited to educational demonstrations and some analytical chemistry uses, with safer alternatives preferred where possible. Safety concerns include potential carcinogenicity and allergenicity. First aid involves irrigation and medical evaluation for significant exposures.",
        details: {
            physicalState: "White to pale yellow crystalline powder. Odorless. Melting point: 258-263°C. Slightly soluble in water (400 mg/L at 20°C), soluble in ethanol (≈50 g/L), acetone, and ether.",
            composition: "Pure C₂₀H₁₄O₄. Indicator solutions typically 0.5-1% in ethanol. May contain stabilizers in commercial preparations.",
            function: "pH indicator (colorless in acid/neutral, pink in base), educational demonstrations, limited analytical chemistry applications, former laxative (discontinued).",
            origin: "Synthesis from phthalic anhydride and phenol with concentrated sulfuric acid catalyst (Friedel-Crafts acylation followed by condensation). Industrial scale production in chemical plants.",
            toxicity: "Suspected carcinogen (IARC Group 2B). Former laxative: withdrawn due to cancer concerns (intestinal tumors in animal studies). Oral LD50 rat: >5000 mg/kg but carcinogenic at lower chronic doses. May cause allergic reactions. Not mutagenic in standard tests.",
            flammability: "Combustible solid. Dust may form explosive mixtures with air. Solutions in ethanol are flammable. Decomposes when heated producing acrid smoke.",
            reactivity: "pH-dependent color change due to lactone ring opening/closing. Decolorizes in strong base (pH > 10) due to further structural changes. Oxidizes slowly in air. Light sensitive. Stable in acid.",
            acidity: "Weak acid itself. Indicator transition range: pH 8.2 (colorless) to 10.0 (pink). pKa = 9.7. Colorless form is lactone, pink form is dianion.",
            biologicalEffect: "Former laxative: stimulates colon motility via prostaglandin E2 induction and inhibition of Na⁺/K⁺ ATPase. Carcinogenic: increases risk of intestinal tumors with long-term use. Allergenic reactions possible. No essential biological function.",
            usage: "Educational chemistry demonstrations (95%), limited analytical chemistry (5%). Pharmaceutical use discontinued. Market small but stable due to educational demand.",
            handlingPrecautions: "Wear gloves, safety goggles, and dust mask. Avoid skin contact and ingestion. Use in well-ventilated area. Consider using less hazardous alternatives (bromothymol blue, universal indicator) where possible. Implement good laboratory practices.",
            storageConditions: "Store in tightly closed containers in cool, dark, dry place. Solutions should be in amber bottles. Separate from food, pharmaceuticals. Label if pure compound. Temperature should not exceed 30°C. Shelf life: 3 years for solid, 1 year for solutions.",
            firstAidMeasures: "INHALATION: Remove to fresh air. If breathing difficult, administer oxygen. Seek medical attention if symptoms persist. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water for 15 minutes. Seek medical attention if irritation develops. EYE CONTACT: Immediately flush eyes with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention. INGESTION: Rinse mouth with water. Do NOT induce vomiting. Give 1-2 glasses of water to drink. Seek medical attention - inform of phenolphthalein exposure.",
            disposalMethod: "Small quantities: dissolve in combustible solvent (ethanol, acetone) and incinerate in approved facility. Large quantities: hazardous waste disposal due to carcinogenicity. Never discharge to sewer. Consider using up in educational demonstrations to minimize waste."
        }
    },
    {
        id: 43,
        name: "Methyl Orange",
        formula: "C₁₄H₁₄N₃SO₃",
        type: "indicator",
        description: "Methyl orange is a synthetic azo dye used as a pH indicator, changing color from red in acidic solutions (pH < 3.1) to yellow in basic solutions (pH > 4.4). Chemically, it is the sodium salt of 4-dimethylaminoazobenzene-4'-sulfonic acid. The compound appears as orange powder and is primarily used in acid-base titrations, particularly for strong acid-strong base titrations where the endpoint is around pH 4. It is synthesized via diazotization of sulfanilic acid followed by coupling with dimethylaniline. Safety concerns are relatively low but include potential allergenicity and irritation. First aid involves irrigation and removal from exposure. While largely replaced by digital pH meters in industrial applications, methyl orange remains valuable in educational settings due to its sharp color change and historical significance. Environmental impact is minimal due to low usage volumes and biodegradability.",
        details: {
            physicalState: "Orange crystalline powder. Odorless. Decomposes at >300°C. Soluble in water (50 g/L at 20°C), sparingly soluble in ethanol. Aqueous solutions are orange-yellow.",
            composition: "Sodium 4-dimethylaminoazobenzene-4'-sulfonate. Molecular weight: 327.33 g/mol. Indicator solutions typically 0.1% in water. May contain inert salts as diluents.",
            function: "pH indicator for acid-base titrations (red in acid, yellow in base), educational demonstrations, limited analytical chemistry applications.",
            origin: "Synthesis via diazotization: sulfanilic acid + NaNO₂ + HCl → diazonium salt, then coupling with N,N-dimethylaniline. Industrial production in chemical plants.",
            toxicity: "Low toxicity (oral LD50 rat: 60 mg/kg, though some sources report higher values). Irritant to eyes, skin, respiratory tract. Possible allergen (azo dye sensitivity). Not classified as carcinogen (though some azo dyes are). Environmental: low toxicity to aquatic life.",
            flammability: "Combustible solid. Dust may form explosive mixtures with air. Decomposes when heated producing toxic fumes (nitrogen oxides, sulfur oxides).",
            reactivity: "pH-dependent color change due to protonation/deprotonation of dimethylamino group. May decompose in strong acid or base. Light sensitive. Reduces with reducing agents cleaving azo bond.",
            acidity: "Acid-base indicator. Transition range: pH 3.1 (red) to 4.4 (yellow). Useful for strong acid-strong base titrations (endpoint ~pH 4). pKa = 3.7. Red form is protonated, yellow form is deprotonated.",
            biologicalEffect: "Low acute toxicity. May cause irritation. Some azo dyes can be metabolized to aromatic amines (potential carcinogens), but methyl orange is sulfonated reducing this risk. No essential biological function.",
            usage: "Educational chemistry (80%), analytical chemistry (15%), other (5%). Declining use in professional labs but stable in education.",
            handlingPrecautions: "Wear gloves and safety goggles. Avoid dust generation. Use in well-ventilated area. Normal laboratory precautions adequate. Wash hands after handling.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Protect from light. No special segregation needed. Temperature should not exceed 30°C. Shelf life: 5 years.",
            firstAidMeasures: "INHALATION: Remove to fresh air. Usually no treatment needed. SKIN CONTACT: Wash with soap and water. Usually no treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Drink water. Seek medical attention only if large amount ingested.",
            disposalMethod: "Small quantities: flush to sewer with plenty of water. Large quantities: mix with combustible material and incinerate in approved facility. Dye may color water temporarily. Biodegradable under aerobic conditions."
        }
    },
    {
        id: 44,
        name: "Methyl Red",
        formula: "C₁₅H₁₅N₃O₂",
        type: "indicator",
        description: "Methyl red is a synthetic azo dye used as a pH indicator, changing color from red in acidic solutions (pH < 4.4) to yellow in basic solutions (pH > 6.2). Chemically, it is 2-(N,N-dimethyl-4-aminophenyl)azobenzenecarboxylic acid. The compound appears as dark red crystals or powder and is used in both general acid-base titrations and specifically in microbiology for the methyl red test (differentiates Escherichia coli from Enterobacter based on glucose fermentation acid production). It is synthesized via diazotization of anthranilic acid followed by coupling with dimethylaniline. Safety concerns are low but include potential irritation and allergenicity. First aid involves irrigation and removal from exposure. While largely replaced by digital pH meters in industrial applications, methyl red remains important in microbiological diagnostics and educational settings. Environmental impact is minimal.",
        details: {
            physicalState: "Dark red crystalline powder. Odorless. Melting point: 179-182°C. Slightly soluble in water (0.2 g/L at 20°C), soluble in ethanol, acetone, acetic acid. Aqueous solutions are red in acid, yellow in base.",
            composition: "2-(N,N-Dimethyl-4-aminophenyl)azobenzenecarboxylic acid. Molecular weight: 269.30 g/mol. Indicator solutions typically 0.1% in ethanol. May contain stabilizers.",
            function: "pH indicator (red in acid, yellow in base), methyl red test in microbiology (differentiates enteric bacteria), educational demonstrations, limited analytical chemistry.",
            origin: "Synthesis via diazotization: anthranilic acid + NaNO₂ + HCl → diazonium salt, then coupling with N,N-dimethylaniline. Industrial production in chemical plants.",
            toxicity: "Low toxicity (oral LD50 rat: 100 mg/kg). Irritant to eyes, skin, respiratory tract. Possible allergen. Not classified as carcinogen. Environmental: low toxicity to aquatic life.",
            flammability: "Combustible solid. Dust may form explosive mixtures with air. Solutions in ethanol are flammable. Decomposes when heated producing toxic fumes.",
            reactivity: "pH-dependent color change due to protonation/deprotonation of carboxylic acid and dimethylamino groups. May decompose in strong acid or base. Light sensitive. Reduces with reducing agents cleaving azo bond.",
            acidity: "Acid-base indicator. Transition range: pH 4.4 (red) to 6.2 (yellow). Useful for weak acid-strong base titrations. pKa = 5.1. Red form is zwitterion, yellow form is carboxylate.",
            biologicalEffect: "Low acute toxicity. Used in microbiological media at low concentrations (15 mg/L). No significant health effects at indicator concentrations. Some azo dyes can be metabolized to aromatic amines, but risk is low due to low exposure.",
            usage: "Microbiology (methyl red test - 50%), educational chemistry (40%), analytical chemistry (10%). Stable niche market due to specific microbiological use.",
            handlingPrecautions: "Wear gloves and safety goggles. Avoid dust generation. Use in well-ventilated area. Normal laboratory precautions adequate. For microbiology, maintain sterile techniques.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Protect from light. Solutions in ethanol should be in amber bottles. Temperature should not exceed 25°C. Shelf life: 5 years for solid, 2 years for solutions.",
            firstAidMeasures: "INHALATION: Remove to fresh air. Usually no treatment needed. SKIN CONTACT: Wash with soap and water. Usually no treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Drink water. Seek medical attention only if large amount ingested.",
            disposalMethod: "Small quantities: flush to sewer with plenty of water. Large quantities: mix with combustible material and incinerate in approved facility. Microbiological media containing methyl red should be autoclaved before disposal."
        }
    },
    {
        id: 45,
        name: "Bromothymol Blue",
        formula: "C₂₇H₂₈Br₂O₅S",
        type: "indicator",
        description: "Bromothymol blue is a sulfonephthalein dye used as a pH indicator, showing yellow in acidic solutions (pH < 6.0), blue in basic solutions (pH > 7.6), and green at neutral pH (transition range 6.0-7.6). Chemically, it is 3',3''-dibromothymolsulfonephthalein. The compound appears as pink crystalline powder when dry and is particularly useful for indicating neutral pH ranges. It is famous in educational demonstrations of carbon dioxide absorption (turns from blue to yellow as CO₂ forms carbonic acid) and in aquarium water testing. Bromothymol blue is synthesized from thymolsulfonephthalein by bromination. Safety concerns are low but include potential irritation. First aid involves irrigation and removal from exposure. While largely replaced by digital pH meters in professional applications, it remains popular in education, aquarium maintenance, and some biological applications. Environmental impact is minimal.",
        details: {
            physicalState: "Pink to reddish-brown crystalline powder when dry. Odorless. Melting point: 202°C (decomposition). Slightly soluble in water (0.4 g/L at 20°C), soluble in ethanol, ether, dilute alkali solutions. Aqueous solutions: yellow (acid), green (neutral), blue (base).",
            composition: "3',3''-Dibromothymolsulfonephthalein. Molecular weight: 624.38 g/mol. Indicator solutions typically 0.1% in ethanol or water with NaOH. Often used as sodium salt.",
            function: "pH indicator (yellow in acid, blue in base, green neutral), CO₂ detection in biology experiments, aquarium water testing, educational demonstrations, respiratory physiology experiments.",
            origin: "Synthesis from thymolsulfonephthalein by bromination with bromine in acetic acid. Industrial production in chemical plants.",
            toxicity: "Low toxicity (oral LD50 rat: >5000 mg/kg). Irritant to eyes. Not classified as carcinogen, mutagen, or reproductive toxin. Environmental: low toxicity to aquatic life.",
            flammability: "Combustible solid. Dust may form explosive mixtures with air. Solutions in ethanol are flammable. Decomposes when heated producing toxic bromine compounds.",
            reactivity: "pH-dependent color change due to structural changes in sulfonephthalein ring system. Stable in solution if protected from light. May precipitate in hard water. Reacts with strong oxidizers.",
            acidity: "Acid-base indicator. Transition range: pH 6.0 (yellow) to 7.6 (blue). Particularly useful for neutral range. pKa = 7.1. Color changes due to successive deprotonations.",
            biologicalEffect: "Low toxicity. Used in biological experiments at low concentrations. May cause eye irritation. No significant systemic effects. Used in some medical diagnostics (respiratory function tests).",
            usage: "Educational chemistry and biology (70%), aquarium testing (20%), medical and biological research (5%), other (5%). Stable market due to educational demand.",
            handlingPrecautions: "Wear gloves and safety goggles. Avoid eye contact. Use in well-ventilated area. Normal laboratory precautions adequate. For aquarium use, follow product instructions.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Protect from light. Solutions should be in amber bottles. Temperature should not exceed 25°C. Shelf life: 5 years for solid, 2 years for solutions.",
            firstAidMeasures: "INHALATION: Remove to fresh air. Usually no treatment needed. SKIN CONTACT: Wash with soap and water. Usually no treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Drink water. Seek medical attention only if large amount ingested.",
            disposalMethod: "Small quantities: flush to sewer with plenty of water. Large quantities: mix with combustible material and incinerate in approved facility. Biodegradable."
        }
    },
    {
        id: 46,
        name: "Litmus Solution",
        formula: "Natural Dye Mixture",
        type: "indicator",
        description: "Litmus is a natural pH indicator extracted from various lichen species, primarily Roccella tinctoria. It represents one of the oldest known chemical indicators, used since at least the 1300s. Litmus paper turns red in acidic solutions (pH < 4.5) and blue in basic solutions (pH > 8.3), with a purple color at neutral. The active components are complex mixtures of polyhydroxyanthraquinones, primarily azolitmin and erythrolitmin. Litmus is sensitive not only to pH but also to reducing agents and certain gases like sulfur dioxide. Safety profile is excellent with no significant hazards. First aid measures are minimal. While largely replaced by more precise synthetic indicators and digital pH meters in professional applications, litmus remains valuable in educational settings for teaching basic acid-base concepts and in some qualitative testing applications. Environmental impact is negligible.",
        details: {
            physicalState: "Blue aqueous solution (alkaline form) or red solution (acidic form). Paper form: strips impregnated with dye. Powder form also available. Characteristic lichen odor in concentrated forms.",
            composition: "Complex mixture of 10-15 different polyhydroxyanthraquinone derivatives extracted from lichens. Main components: azolitmin (C₉H₁₀NO₅), erythrolitmin, spaniolitmin, lecanoric acid. Inert components: sugars, proteins from lichen extraction.",
            function: "Simple pH indicator (red=acid, blue=base), educational demonstrations, qualitative acid-base testing, historical chemical reagent.",
            origin: "Extraction from lichens (Roccella, Dendrographa, Lecanora, Umbilicaria species) with ammonia and potassium carbonate, then exposure to air for oxidation. Traditional production in Netherlands, Portugal, Canary Islands. Modern production limited.",
            toxicity: "Very low toxicity. Essentially non-toxic. Oral LD50 not established but expected >5000 mg/kg. No known carcinogenicity, mutagenicity, or reproductive toxicity. Historically used as food coloring. No significant hazards.",
            flammability: "Solutions not flammable. Paper may be combustible. No explosive properties.",
            reactivity: "Changes color with pH. Sensitive to reducing agents (turns red). Bleached by chlorine, hypochlorite. Fades in strong light. Stable if protected from light and air.",
            acidity: "Approximate transition: pH 4.5 (red) to 8.3 (blue). Not precise for quantitative work. Multiple pKa values due to mixture of compounds.",
            biologicalEffect: "Non-toxic. Historically used as food coloring and in traditional medicine. No adverse effects at indicator concentrations. Some components have mild antimicrobial properties.",
            usage: "Educational chemistry (95%), simple qualitative testing (5%). Declining but persistent use in education. Market very small.",
            handlingPrecautions: "No special precautions needed. Normal laboratory hygiene adequate. May stain clothing and skin (blue or red). Wash hands after handling.",
            storageConditions: "Store in tightly closed containers in cool, dark place. Solutions should be in amber bottles. Paper should be kept dry. Temperature should not exceed 30°C. Shelf life: 2 years for solutions, 5 years for paper.",
            firstAidMeasures: "INHALATION: No treatment needed. SKIN CONTACT: Wash with soap and water if staining occurs. EYE CONTACT: Rinse with water if irritation occurs. INGESTION: No treatment needed for small amounts.",
            disposalMethod: "Can be disposed with regular waste or flushed to sewer. Biodegradable. Paper can be composted. No environmental concerns."
        }
    },
    {
        id: 47,
        name: "Universal Indicator",
        formula: "Dye Mixture",
        type: "indicator",
        description: "Universal indicator is a mixture of several pH indicators that exhibits a continuous range of colors across the pH scale, typically showing red at strongly acidic (pH 0-3), orange/yellow at weakly acidic (pH 4-6), green at neutral (pH 7), blue at weakly basic (pH 8-10), and violet at strongly basic (pH 11-14). Commercial formulations contain 4-8 different indicators including thymol blue, methyl red, bromothymol blue, and phenolphthalein. The mixture appears as dark brown solution or impregnated paper strips. Universal indicator provides approximate pH values through color comparison with a standard chart. It is synthesized by mixing precise proportions of individual indicators. Safety concerns depend on the specific components but are generally low. First aid involves irrigation for eye exposure. Universal indicator is widely used in educational settings and for approximate pH measurements where digital meters are unavailable. Environmental impact is minimal due to low usage volumes.",
        details: {
            physicalState: "Dark brown to green solution (depending on pH). Paper form: strips with multiple color zones. Powder form rarely used. Solutions often in water or ethanol.",
            composition: "Proprietary mixtures typically containing: thymol blue (pH 1.2-2.8), methyl orange (pH 3.1-4.4), methyl red (pH 4.4-6.2), bromothymol blue (pH 6.0-7.6), thymol blue again (pH 8.0-9.6), phenolphthalein (pH 8.2-10.0). Exact formulations vary by manufacturer.",
            function: "Approximate pH measurement across full range (0-14), educational demonstrations, qualitative acid-base testing, aquarium and pool testing, soil testing.",
            origin: "Formulation by mixing precise proportions of individual synthetic indicators. First developed by Yamada in 1933. Commercial production by chemical suppliers worldwide.",
            toxicity: "Low toxicity overall. Components individually have low toxicity (except phenolphthalein carcinogenicity concerns). Solutions in ethanol are flammable. May cause irritation. Not classified as carcinogen as mixture.",
            flammability: "Solutions in ethanol are flammable (flash point ≈13°C). Aqueous solutions not flammable. Paper may be combustible.",
            reactivity: "Shows continuous color changes with pH. May precipitate in hard water. Light sensitive. Components may interact with specific ions (metal complexation).",
            acidity: "Covers full pH range: red (pH 0-3), orange (4), yellow (5-6), green (7), blue (8-10), violet (11-14). Approximate only (±0.5 pH units).",
            biologicalEffect: "Low toxicity. May cause irritation at high concentrations. No significant systemic effects. Some components may be allergens in sensitive individuals.",
            usage: "Educational chemistry (80%), approximate pH testing in field applications (15%), aquarium/pool testing (5%). Stable market due to educational demand.",
            handlingPrecautions: "Wear gloves and safety goggles. Avoid contact with eyes. Use in well-ventilated area if using ethanol solutions. Normal laboratory precautions adequate.",
            storageConditions: "Store in tightly closed amber containers in cool, dark place. Solutions in ethanol should be kept away from flames. Temperature should not exceed 25°C. Shelf life: 2 years for solutions, 3 years for paper.",
            firstAidMeasures: "INHALATION: Remove to fresh air. Usually no treatment needed. SKIN CONTACT: Wash with soap and water. Usually no treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Drink water. Seek medical attention only if large amount ingested.",
            disposalMethod: "Small quantities: flush to sewer with plenty of water. Large quantities: mix with combustible material and incinerate in approved facility. Paper can be disposed with regular waste."
        }
    },
    {
        id: 48,
        name: "Starch Solution",
        formula: "(C₆H₁₀O₅)ₙ",
        type: "indicator",
        description: "Starch solution is a colloidal suspension of starch polymers in water, used primarily as an indicator in iodine-starch tests where it forms an intense blue-black complex with iodine. Starch is a natural polysaccharide consisting of amylose (linear) and amylopectin (branched) glucose polymers. It is extracted from plant sources like corn, potato, wheat, or rice. Beyond its indicator function, starch serves as a thickening agent in food, binder in pharmaceuticals, and sizing agent in paper and textiles. As an indicator, it is crucial in iodometric titrations for determining oxidizing agents. Safety profile is excellent as starch is a common food component. First aid measures are minimal. Environmental impact is benign as starch is biodegradable. The iodine-starch reaction remains one of the most sensitive and specific color tests in analytical chemistry.",
        details: {
            physicalState: "White cloudy suspension when fresh, clear solution when properly prepared (requires heating). Odorless. Viscous depending on concentration. Dried starch is white powder. Gelatinizes at 60-75°C depending on source.",
            composition: "Mixture of amylose (20-30%, linear α-1,4 glucan) and amylopectin (70-80%, branched α-1,4 and α-1,6 glucan). Source affects ratio: waxy maize has almost 100% amylopectin. May contain trace proteins, lipids from extraction.",
            function: "Indicator for iodine (blue-black complex), thickening agent in food, binder in pharmaceuticals, sizing in paper/textiles, substrate in enzyme assays, laboratory reagent.",
            origin: "Extraction from plant sources: corn (maize), potato, wheat, rice, tapioca. Process involves steeping, grinding, separation, drying. World production >100 million tons annually.",
            toxicity: "Essentially non-toxic. Food grade safe for consumption. May cause dust explosion hazard as powder. No known carcinogenicity, mutagenicity, or reproductive toxicity. Rare allergic reactions (wheat starch).",
            flammability: "Powder form: combustible dust, may form explosive mixtures with air (minimum explosive concentration 40 g/m³). Solutions not flammable.",
            reactivity: "Forms intense blue-black complex with iodine (iodine atoms inside amylose helix). Hydrolyzes with acids or enzymes to sugars. Gelatinizes with heat. Retrogrades (recrystallizes) on cooling and storage.",
            acidity: "Neutral (pH ≈7). May become acidic if contaminated with microbial growth. No acid-base indicator properties.",
            biologicalEffect: "Digestible carbohydrate providing 4 kcal/g. Safe for consumption. Dust inhalation may cause respiratory irritation. No toxic effects.",
            usage: "Food industry (80%), paper and textiles (10%), pharmaceuticals (5%), laboratory and analytical (5%). Indicator use is tiny fraction of total.",
            handlingPrecautions: "For powder: wear dust mask to avoid inhalation. Normal precautions for solutions. Prepare fresh solutions regularly as they support microbial growth. For food grade, maintain hygiene.",
            storageConditions: "Store powder in tightly closed containers in cool, dry place. Solutions should be refrigerated and used within 1-2 days. Protect from moisture and pests. Temperature: powder <25°C, solutions 2-8°C. Shelf life: powder 2 years, solutions 2 days.",
            firstAidMeasures: "INHALATION (dust): Remove to fresh air. Usually no treatment needed. SKIN CONTACT: Wash with soap and water. No treatment needed. EYE CONTACT: Rinse with water. No treatment needed. INGESTION: No treatment needed.",
            disposalMethod: "Can be disposed with regular waste or flushed to sewer. Biodegradable. Compostable. No environmental concerns."
        }
    },
    {
        id: 49,
        name: "Ferric Alum",
        formula: "NH₄Fe(SO₄)₂·12H₂O",
        type: "indicator",
        description: "Ferric alum, properly called ammonium iron(III) sulfate dodecahydrate, is a double salt that serves as both a chemical reagent and an indicator in analytical chemistry. It appears as pale violet octahedral crystals due to the presence of iron(III). The compound is produced by mixing equimolar solutions of ammonium sulfate and iron(III) sulfate. Primary applications include indicator in redox titrations (particularly with dichromate), water purification (coagulant), dyeing mordant, and laboratory reagent. As an indicator in dichromate titrations, it forms a deep violet complex with excess dichromate. Safety concerns include irritation from acidic hydrolysis products and potential for iron overload with chronic exposure. First aid involves irrigation and medical evaluation for significant exposures. Environmental impact is moderate due to iron and sulfate content. While somewhat replaced by other indicators, ferric alum remains in use for specific analytical methods.",
        details: {
            physicalState: "Pale violet octahedral crystals. Odorless. Density: 1.71 g/cm³. Melting point: 39-41°C (loses water), decomposes at >230°C. Soluble in water (1240 g/L at 20°C), insoluble in ethanol.",
            composition: "NH₄Fe(SO₄)₂·12H₂O. Molecular weight: 482.19 g/mol. Typically ≥99% pure. May contain trace aluminum, magnesium impurities.",
            function: "Indicator in redox titrations (dichromate titrations), water treatment coagulant, mordant in dyeing, laboratory reagent, alum for pickling, analytical chemistry.",
            origin: "Production by crystallization from mixed solutions of ammonium sulfate and iron(III) sulfate in stoichiometric ratio. Industrial production in chemical plants.",
            toxicity: "Low to moderate toxicity (oral LD50 rat: 3250 mg/kg). Irritant due to acidic hydrolysis. Iron overload possible with chronic high exposure. Not classified as carcinogen. Environmental: iron toxic to aquatic life at low pH.",
            flammability: "Non-flammable solid. Decomposes when heated producing toxic fumes (ammonia, sulfur oxides). No explosive properties.",
            reactivity: "Acidic in solution due to hydrolysis: Fe³⁺ + 3H₂O ⇌ Fe(OH)₃ + 3H⁺. Oxidizing agent. Forms violet complex with dichromate. Corrosive to metals. Light sensitive (slow reduction).",
            acidity: "Acidic in solution (0.1 M pH ≈2.5). Due to iron(III) hydrolysis. Ammonium ion also hydrolyzes weakly.",
            biologicalEffect: "Irritant to eyes, skin, respiratory tract. Ingestion may cause gastrointestinal distress. Chronic exposure: possible iron accumulation. Used medically as astringent and styptic historically.",
            usage: "Analytical chemistry (40%), water treatment (30%), dyeing and textiles (20%), other (10%). Declining use but persistent in specific applications.",
            handlingPrecautions: "Wear gloves, safety goggles, and dust mask. Avoid contact with eyes and skin. Use in well-ventilated area. Avoid contact with metals. Wash hands after handling.",
            storageConditions: "Store in tightly closed containers in cool, dry, dark place. Protect from moisture. Store separately from bases, reducing agents. Temperature should not exceed 25°C. Shelf life: 3 years.",
            firstAidMeasures: "INHALATION: Remove to fresh air. If breathing difficult, administer oxygen. Seek medical attention if symptoms persist. SKIN CONTACT: Wash thoroughly with soap and water for 15 minutes. Seek medical attention if irritation develops. EYE CONTACT: Immediately flush eyes with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention. INGESTION: Rinse mouth with water. Do NOT induce vomiting. Drink water. Seek medical attention if large amount ingested.",
            disposalMethod: "Small quantities: neutralize with sodium carbonate, then flush to sewer with plenty of water. Large quantities: precipitate as iron hydroxide with lime, then dispose sludge in approved landfill. Consider iron recovery."
        }
    },
    {
        id: 50,
        name: "Mohr's Salt",
        formula: "FeSO₄·(NH₄)₂SO₄·6H₂O",
        type: "indicator",
        description: "Mohr's salt, properly called ammonium iron(II) sulfate hexahydrate, is a double salt that serves as a primary standard in redox titrations due to its high purity and stability. It appears as light green monoclinic crystals and contains iron in the +2 oxidation state. The compound is produced by crystallization from mixed solutions of iron(II) sulfate and ammonium sulfate. Primary applications include primary standard for permanganate and dichromate titrations, iron supplement, analytical chemistry reagent, and educational demonstrations. As a reducing agent, it is stable against air oxidation compared to simple iron(II) salts due to the ammonium sulfate. Safety concerns include irritation and potential for iron overload with chronic exposure. First aid involves irrigation and medical evaluation for significant exposures. Environmental impact is moderate due to iron, ammonium, and sulfate content. Mohr's salt remains important in analytical chemistry education and practice.",
        details: {
            physicalState: "Light green monoclinic crystals. Odorless. Density: 1.86 g/cm³. Melting point: 100-110°C (loses water), decomposes at >230°C. Soluble in water (269 g/L at 20°C), insoluble in ethanol.",
            composition: "FeSO₄·(NH₄)₂SO₄·6H₂O. Molecular weight: 392.14 g/mol. Primary standard grade ≥99.5% pure. May contain trace manganese, zinc impurities.",
            function: "Primary standard for redox titrations (permanganate, dichromate), iron(II) source in analytical chemistry, educational demonstrations, laboratory reagent, limited medicinal use.",
            origin: "Production by crystallization from equimolar solutions of iron(II) sulfate and ammonium sulfate. Industrial production in chemical plants for analytical reagent market.",
            toxicity: "Low toxicity (oral LD50 rat: 1520 mg/kg). Irritant to eyes, skin, respiratory tract. Iron overload possible with chronic high exposure. Ammonium ion may cause metabolic effects at high doses. Not carcinogenic.",
            flammability: "Non-flammable solid. Decomposes when heated producing toxic fumes (ammonia, sulfur oxides). No explosive properties.",
            reactivity: "Reducing agent (Fe²⁺ → Fe³⁺ + e⁻). More stable against air oxidation than FeSO₄ alone. Acidic in solution due to hydrolysis. Oxidizes slowly in air. Light sensitive.",
            acidity: "Slightly acidic in solution (0.1 M pH ≈4). Due to iron(II) and ammonium hydrolysis.",
            biologicalEffect: "Irritant. Iron is essential nutrient but excess causes oxidative stress. Ammonium ion toxic at high levels (converts to ammonia). Used as iron supplement historically.",
            usage: "Analytical chemistry (primary standard - 60%), educational chemistry (30%), other (10%). Niche but important market.",
            handlingPrecautions: "Wear gloves, safety goggles, and dust mask. Avoid contact with eyes and skin. Use in well-ventilated area. Store away from oxidizers. Wash hands after handling.",
            storageConditions: "Store in tightly closed amber containers in cool, dry place. Protect from air and light to prevent oxidation. Store separately from oxidizers. Temperature should not exceed 25°C. Shelf life: 2 years if properly stored.",
            firstAidMeasures: "INHALATION: Remove to fresh air. Usually no treatment needed. SKIN CONTACT: Wash with soap and water. Usually no treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Drink water. Seek medical attention only if large amount ingested.",
            disposalMethod: "Small quantities: oxidize with hydrogen peroxide to iron(III), neutralize with sodium carbonate, then flush to sewer with plenty of water. Large quantities: oxidize, precipitate as hydroxide, dispose sludge in approved landfill."
        }
    },

    // E. ORGANIC CHEMICALS (51-67)
    {
        id: 51,
        name: "Ethanol",
        formula: "C₂H₅OH",
        type: "organic",
        description: "Ethanol is a clear, colorless volatile liquid with a characteristic pleasant odor and burning taste. It is the type of alcohol found in alcoholic beverages and is produced both by fermentation of sugars by yeasts and synthetically from ethylene. Industrial ethanol is often denatured with additives to make it unsuitable for drinking. Applications are extremely diverse: alcoholic beverages, solvent in pharmaceuticals, cosmetics, and industrial processes, fuel (gasoline additive), antiseptic, chemical intermediate, and recreational intoxicant. Safety concerns include flammability, central nervous system depression when ingested, and potential for addiction. First aid involves removal from exposure, supportive care, and never inducing vomiting for ingestion due to aspiration risk. Environmental impact includes biodegradability but also potential water pollution from industrial discharge. Ethanol represents one of humanity's oldest known and most important organic chemicals.",
        details: {
            physicalState: "Clear colorless liquid. Characteristic pleasant odor. Density: 0.789 g/cm³. Boiling point: 78.37°C. Melting point: -114.1°C. Miscible with water and most organic solvents.",
            composition: "Anhydrous ethanol ≥99.5% or various hydrous grades (95%, 70%). Denatured ethanol contains additives (methanol, isopropanol, denatonium) to make undrinkable. Absolute ethanol: ≤0.1% water.",
            function: "Alcoholic beverages, solvent (pharmaceuticals, cosmetics, inks), fuel (E10, E85 gasoline), antiseptic (hand sanitizers), chemical intermediate, recreational drug, extractant.",
            origin: "Fermentation: yeast converts sugars (from grains, sugarcane, corn) to ethanol + CO₂. Synthetic: hydration of ethylene (C₂H₄ + H₂O → C₂H₅OH). World production: ~100 billion liters annually (80% fermentation, 20% synthetic).",
            toxicity: "Moderate toxicity (oral LD50 rat: 7060 mg/kg). CNS depressant: causes intoxication, impairment, addiction. Chronic: liver cirrhosis, pancreatitis, neurological damage, fetal alcohol syndrome. Not classified as carcinogen (IARC Group 1 for alcoholic beverages). Flammable liquid.",
            flammability: "Highly flammable liquid (flash point: 13°C). Autoignition temperature: 363°C. Explosive limits in air: 3.3-19%. Vapors heavier than air, can travel to ignition sources.",
            reactivity: "Undergoes oxidation to acetaldehyde then acetic acid. Forms esters with acids. Dehydrates to ethylene (acid catalyst). Reacts with alkali metals producing hydrogen. Forms azeotrope with water (95.6% ethanol).",
            acidity: "Very weak acid (pKa = 15.9, similar to water). Slightly more acidic than water but still very weak. Forms alkoxides with strong bases.",
            biologicalEffect: "CNS depressant: enhances GABA inhibition, inhibits NMDA receptors. Acute: intoxication, impaired coordination, nausea, respiratory depression at high doses. Chronic: addiction, liver damage (fatty liver → hepatitis → cirrhosis), pancreatitis, neurological damage, cancer risk. Therapeutic: antidote for methanol/ethylene glycol poisoning.",
            usage: "Alcoholic beverages (45%), fuel (35%), industrial solvent (10%), chemicals manufacturing (5%), pharmaceuticals and cosmetics (5%). Market value >$500 billion including beverages.",
            handlingPrecautions: "Use in well-ventilated area away from ignition sources. Wear gloves and safety goggles. Ground containers to prevent static sparks. Store in approved flammable liquid cabinets. No smoking in area. For laboratory use, minimize quantities.",
            storageConditions: "Store in tightly closed containers in cool, well-ventilated area away from heat, sparks, flames. Use explosion-proof equipment. Keep away from oxidizers, acids. Store in flammable liquid storage cabinet if >10 L. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air. If breathing difficult, administer oxygen. Seek medical attention if symptoms severe. SKIN CONTACT: Remove contaminated clothing. Wash with soap and water. No special treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Do NOT induce vomiting (aspiration risk). Rinse mouth with water. If conscious, give water to drink. Seek medical attention if large amount ingested or symptoms severe. For intoxication: supportive care, monitor breathing.",
            disposalMethod: "Small quantities: evaporate in fume hood or mix with combustible solvent for incineration. Large quantities: recover by distillation for reuse. Never pour down drain in large quantities (fire hazard, environmental impact). Denatured ethanol requires hazardous waste disposal."
        }
    },
    {
        id: 52,
        name: "Methanol (Wood Alcohol)",
        formula: "CH₃OH",
        type: "organic",
        description: "Methanol is the simplest alcohol, appearing as a clear, colorless volatile liquid with a characteristic odor slightly sweeter than ethanol. Historically called wood alcohol due to production from wood distillation, modern production is primarily via catalytic synthesis from carbon monoxide and hydrogen. Applications include chemical feedstock for formaldehyde, acetic acid, and other chemicals; solvent; antifreeze; denaturant for ethanol; and fuel (racing cars, biodiesel production). Methanol is severely toxic when ingested, metabolized to formaldehyde then formic acid, causing metabolic acidosis, visual disturbances, and potentially death. Safety protocols are stringent due to both toxicity and flammability. First aid for ingestion involves immediate medical attention and administration of ethanol or fomepizole as antidotes. Environmental impact includes high biodegradability but toxicity to aquatic life.",
        details: {
            physicalState: "Clear colorless liquid. Characteristic odor (slightly sweet). Density: 0.791 g/cm³. Boiling point: 64.7°C. Melting point: -97.6°C. Miscible with water and most organic solvents.",
            composition: "Industrial grade typically ≥99.5% pure. May contain trace acetone, ethanol, water. Denatured grades contain bitterants. Fuel grade has specific additives.",
            function: "Chemical feedstock (formaldehyde, acetic acid, MTBE), solvent, antifreeze, denaturant for ethanol, fuel (racing, biodiesel), laboratory reagent.",
            origin: "Synthesis from syngas: CO + 2H₂ → CH₃OH (catalyzed by Cu/ZnO/Al₂O₃ at 50-100 atm, 200-300°C). Historically from wood distillation. World production: ~100 million tons annually.",
            toxicity: "Highly toxic (oral LD50 rat: 5600 mg/kg but human toxicity much higher due to metabolism). Metabolizes to formic acid causing metabolic acidosis, visual disturbances, blindness, death. TLV-TWA: 200 ppm (260 mg/m³). Suspected human carcinogen (IARC Group 2B). Flammable liquid.",
            flammability: "Highly flammable liquid (flash point: 12°C). Autoignition temperature: 464°C. Explosive limits in air: 6-36%. Burns with invisible flame (dangerous).",
            reactivity: "Oxidizes to formaldehyde then formic acid. Forms esters with acids. Dehydrates to dimethyl ether. Reacts with alkali metals producing hydrogen. Forms azeotrope with water.",
            acidity: "Slightly more acidic than ethanol (pKa = 15.5). Still very weak acid. Forms methoxides with strong bases.",
            biologicalEffect: "Metabolized by alcohol dehydrogenase to formaldehyde, then by aldehyde dehydrogenase to formic acid. Formic acid inhibits cytochrome oxidase causing metabolic acidosis and optic nerve damage. Symptoms: initial intoxication similar to ethanol, then 12-24 hour latency, followed by visual disturbances (snowfield vision), abdominal pain, metabolic acidosis, coma, death. Treatment: ethanol or fomepizole to block metabolism, bicarbonate for acidosis, hemodialysis if severe.",
            usage: "Chemical manufacturing (formaldehyde - 40%, other chemicals - 30%), fuel applications (20%), solvent and other (10%). Market value ~$30 billion.",
            handlingPrecautions: "Use in fume hood or with adequate ventilation. Wear chemical-resistant gloves (nitrile, butyl), safety goggles, lab coat. No eating, drinking, or smoking in area. Ground containers. Use explosion-proof equipment. Monitor air concentrations if used regularly.",
            storageConditions: "Store in tightly closed containers in cool, well-ventilated area away from heat, sparks, flames. Use flammable liquid storage cabinet. Keep away from oxidizers, acids. Store in fire-resistant area. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen if breathing difficult. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water for 15 minutes. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Seek IMMEDIATE medical attention - inform of methanol ingestion. Antidotes: ethanol (competitive inhibition) or fomepizole (ADH inhibitor). Monitor blood gases, electrolytes, methanol levels.",
            disposalMethod: "Small quantities: evaporate in fume hood or mix with combustible solvent for incineration. Large quantities: recover by distillation for reuse. Never pour down drain. Hazardous waste disposal required due to toxicity."
        }
    },
    {
        id: 53,
        name: "Propanol",
        formula: "C₃H₇OH",
        type: "organic",
        description: "Propanol refers to two isomeric alcohols: 1-propanol (n-propanol, primary alcohol) and 2-propanol (isopropanol, secondary alcohol). 1-Propanol is a colorless liquid with a mild alcohol odor, used primarily as a solvent and chemical intermediate. 2-Propanol (isopropyl alcohol) is more common, appearing as a colorless liquid with a characteristic sharp odor, widely used as rubbing alcohol, solvent, disinfectant, and chemical feedstock. Both are produced via hydration of propylene or fermentation. Safety concerns include flammability, central nervous system depression upon ingestion or inhalation, and irritation. First aid involves removal from exposure, supportive care, and irrigation for eye/skin contact. Environmental impact includes high biodegradability but potential aquatic toxicity. 2-Propanol's disinfectant properties make it particularly important in healthcare settings.",
        details: {
            physicalState: "1-Propanol: colorless liquid, mild odor. 2-Propanol (isopropanol): colorless liquid, sharp characteristic odor. Density: 0.785 g/cm³ (2-propanol). Boiling point: 82.6°C (2-propanol). Miscible with water and organic solvents.",
            composition: "1-Propanol: CH₃CH₂CH₂OH. 2-Propanol: (CH₃)₂CHOH. Commercial grades: 70%, 91%, 99% (rubbing alcohol is 70% with additives). May contain trace acetone (2-propanol oxidation product).",
            function: "1-Propanol: solvent, chemical intermediate. 2-Propanol: disinfectant (rubbing alcohol), solvent (electronics, cosmetics), chemical intermediate (acetone), antiseptic, dehydrating agent, fuel additive.",
            origin: "1-Propanol: hydroformylation of ethylene then reduction, or fermentation. 2-Propanol: hydration of propylene (CH₃CH=CH₂ + H₂O → (CH₃)₂CHOH) or hydrogenation of acetone. World production: ~3 million tons annually (mainly 2-propanol).",
            toxicity: "Moderate toxicity (oral LD50 rat: 5045 mg/kg for 2-propanol). CNS depressant similar to ethanol but more potent. Metabolizes to acetone (2-propanol) causing longer CNS depression. Irritant to eyes, respiratory tract. Not classified as carcinogen. Flammable liquid.",
            flammability: "Highly flammable liquid (flash point: 12°C for 2-propanol). Autoignition temperature: 399°C (2-propanol). Explosive limits in air: 2-12% (2-propanol). Vapors heavier than air.",
            reactivity: "2-Propanol oxidizes to acetone. Forms esters with acids. Dehydrates to propene (acid catalyst). Reacts with oxidizing agents. Forms azeotrope with water (87.9% for 2-propanol).",
            acidity: "Similar to ethanol (pKa ≈16 for 2-propanol). Secondary alcohol slightly less acidic than primary. Forms alkoxides with strong bases.",
            biologicalEffect: "CNS depressant: more potent than ethanol. 2-Propanol metabolizes to acetone causing prolonged CNS depression. Symptoms: dizziness, headache, nausea, vomiting, coma at high doses. No metabolic acidosis (unlike methanol). Treatment: supportive care, monitor for respiratory depression. Topical: drying effect on skin, disinfectant at 70% concentration.",
            usage: "2-Propanol: disinfectant and antiseptic (40%), solvent (30%), chemical manufacturing (20%), other (10%). 1-Propanol: niche applications. Market value ~$5 billion.",
            handlingPrecautions: "Use in well-ventilated area away from ignition sources. Wear gloves and safety goggles. Ground containers. Store in flammable liquid cabinets. For disinfectant use, follow product instructions.",
            storageConditions: "Store in tightly closed containers in cool, well-ventilated area away from heat, sparks, flames. Use flammable liquid storage cabinet if >10 L. Keep away from oxidizers. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air. If breathing difficult, administer oxygen. Seek medical attention if symptoms severe. SKIN CONTACT: Remove contaminated clothing. Wash with soap and water. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Do NOT induce vomiting. Rinse mouth with water. If conscious, give water to drink. Seek medical attention if large amount ingested. Monitor for respiratory depression.",
            disposalMethod: "Small quantities: evaporate in fume hood or mix with combustible solvent for incineration. Large quantities: recover by distillation for reuse. Rubbing alcohol can be diluted and flushed to sewer in small quantities. Never pour large quantities down drain."
        }
    },
    {
        id: 54,
        name: "Butanol",
        formula: "C₄H₉OH",
        type: "organic",
        description: "Butanol refers to four isomeric alcohols: n-butanol (1-butanol), sec-butanol (2-butanol), isobutanol (2-methyl-1-propanol), and tert-butanol (2-methyl-2-propanol). n-Butanol is the most industrially important, appearing as a colorless liquid with a characteristic banana-like odor. Industrial production is primarily via hydroformylation of propylene (Oxo process) or fermentation from biomass (biobutanol). Applications include solvent for coatings, resins, and inks; chemical intermediate for butyl acrylate, glycol ethers, and plasticizers; and fuel additive. Safety concerns include flammability, irritation to eyes and respiratory tract, and central nervous system depression. First aid involves removal from exposure, supportive care, and irrigation. Environmental impact includes moderate biodegradability and potential aquatic toxicity. Butanol's properties as a less volatile solvent compared to lower alcohols make it valuable in industrial applications.",
        details: {
            physicalState: "n-Butanol: colorless liquid, characteristic banana-like odor. Density: 0.810 g/cm³. Boiling point: 117.7°C. Melting point: -89.8°C. Partially soluble in water (73 g/L), miscible with organic solvents.",
            composition: "n-Butanol: CH₃(CH₂)₃OH. Commercial grades: ≥99% pure. May contain trace butyraldehyde, butyric acid. Biobutanol from fermentation contains isomers.",
            function: "Solvent for coatings, resins, inks; chemical intermediate (butyl acrylate, glycol ethers, plasticizers); extractant; fuel additive; perfume ingredient; laboratory reagent.",
            origin: "Oxo process: hydroformylation of propylene to butyraldehyde, then hydrogenation to butanol. Fermentation: Clostridium acetobutylicum converts sugars to acetone-butanol-ethanol (ABE fermentation). World production: ~5 million tons annually (mostly synthetic).",
            toxicity: "Moderate toxicity (oral LD50 rat: 790 mg/kg). Irritant to eyes, skin, respiratory tract. CNS depressant. Prolonged skin contact may cause dermatitis. Not classified as carcinogen. TLV-TWA: 50 ppm (150 mg/m³). Flammable liquid.",
            flammability: "Flammable liquid (flash point: 35°C). Autoignition temperature: 340°C. Explosive limits in air: 1.4-11.2%. Vapors heavier than air.",
            reactivity: "Oxidizes to butyraldehyde then butyric acid. Forms esters with acids. Dehydrates to butenes. Reacts with oxidizing agents. Forms azeotropes with water.",
            acidity: "Similar to other alcohols (pKa ≈16). Primary alcohol. Forms butoxides with strong bases.",
            biologicalEffect: "CNS depressant: headache, dizziness, nausea. Irritant to mucous membranes. Prolonged skin contact: defatting, dermatitis. Metabolic pathway similar to ethanol but slower. Less toxic than methanol but more than ethanol.",
            usage: "Solvents (coatings, inks - 50%), chemical intermediates (40%), other (10%). Growing interest in biobutanol as biofuel. Market value ~$7 billion.",
            handlingPrecautions: "Use in well-ventilated area away from ignition sources. Wear chemical-resistant gloves (nitrile), safety goggles, lab coat. Ground containers. Store in flammable liquid cabinets. Monitor air concentrations in industrial settings.",
            storageConditions: "Store in tightly closed containers in cool, well-ventilated area away from heat, sparks, flames. Use flammable liquid storage cabinet. Keep away from oxidizers, acids. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air. If breathing difficult, administer oxygen. Seek medical attention if symptoms severe. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water for 15 minutes. Seek medical attention if irritation develops. EYE CONTACT: Immediately flush eyes with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. If conscious, give water to drink. Seek medical attention if large amount ingested.",
            disposalMethod: "Small quantities: mix with combustible solvent for incineration. Large quantities: recover by distillation for reuse. Never pour down drain (toxic to aquatic life). Hazardous waste disposal if contaminated."
        }
    },
    {
        id: 55,
        name: "Acetone",
        formula: "(CH₃)₂CO",
        type: "organic",
        description: "Acetone is the simplest and most important ketone, appearing as a clear, colorless volatile liquid with a characteristic sweet, pungent odor. It is produced both synthetically via cumene process (as co-product with phenol) and by fermentation. Acetone is an excellent solvent for many plastics, resins, and organic compounds, making it invaluable in nail polish remover, paint thinners, adhesive removers, and laboratory applications. Additional uses include chemical intermediate for methyl methacrylate (PMMA), bisphenol A, and pharmaceuticals. Safety concerns include high flammability, central nervous system depression upon inhalation, and irritation. First aid involves removal from exposure, supportive care, and irrigation. Environmental impact includes high biodegradability but potential for groundwater contamination due to mobility. Acetone's excellent solvent properties and relatively low toxicity ensure continued widespread use.",
        details: {
            physicalState: "Clear colorless liquid. Characteristic sweet, pungent odor. Density: 0.791 g/cm³. Boiling point: 56.05°C. Melting point: -94.7°C. Miscible with water and most organic solvents.",
            composition: "Pure acetone ≥99.5%. May contain trace water, methanol, methyl ethyl ketone. Technical grades slightly less pure.",
            function: "Solvent (nail polish remover, paints, adhesives, cleaning), chemical intermediate (methyl methacrylate, bisphenol A), laboratory reagent, pharmaceutical excipient, extractant.",
            origin: "Cumene process: co-produced with phenol from benzene and propylene. Alternative: fermentation (ABE process gives acetone-butanol-ethanol). Direct oxidation of propylene. World production: ~7 million tons annually.",
            toxicity: "Low to moderate toxicity (oral LD50 rat: 5800 mg/kg). CNS depressant upon inhalation. Irritant to eyes, respiratory tract. Not classified as carcinogen. TLV-TWA: 500 ppm (1180 mg/m³). Highly flammable liquid.",
            flammability: "Extremely flammable liquid (flash point: -20°C). Autoignition temperature: 465°C. Explosive limits in air: 2.6-12.8%. Vapors heavier than air, can travel to ignition sources.",
            reactivity: "Ketone: undergoes nucleophilic addition. Forms bisulfite addition compound. Can form peroxides upon long storage with air (dangerous). Reduces to isopropanol. Forms aldol condensation products with base.",
            acidity: "Very weak acid (pKa = 19.2). Forms enolate with strong bases. α-hydrogens are somewhat acidic.",
            biologicalEffect: "CNS depressant at high concentrations: dizziness, headache, confusion, unconsciousness. Irritant to eyes and respiratory tract. Metabolic pathway: converted to pyruvate then normal metabolism. Not metabolized to toxic products. Prolonged skin contact: defatting, dermatitis.",
            usage: "Solvent applications (60%), chemical manufacturing (35%), pharmaceuticals and cosmetics (5%). Market value ~$6 billion.",
            handlingPrecautions: "Use in well-ventilated area away from ignition sources. Wear chemical-resistant gloves (nitrile), safety goggles, lab coat. Ground containers. Store in flammable liquid cabinets. Check for peroxides if stored long-term.",
            storageConditions: "Store in tightly closed containers in cool, well-ventilated area away from heat, sparks, flames. Use flammable liquid storage cabinet. Keep away from oxidizers, strong bases. Store in fire-resistant area. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. If breathing difficult, administer oxygen. Seek medical attention if symptoms severe. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water for 15 minutes. EYE CONTACT: Immediately flush eyes with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention if irritation persists. INGESTION: Do NOT induce vomiting. Rinse mouth with water. If conscious, give water to drink. Seek medical attention if large amount ingested.",
            disposalMethod: "Small quantities: evaporate in fume hood or mix with combustible solvent for incineration. Large quantities: recover by distillation for reuse. Never pour down drain in large quantities (fire hazard). Can be biodegraded in wastewater treatment."
        }
    },
    {
        id: 56,
        name: "Formaldehyde",
        formula: "CH₂O",
        type: "organic",
        description: "Formaldehyde is the simplest aldehyde, appearing as a colorless gas with a strong, pungent, suffocating odor. It is typically handled as an aqueous solution (formalin, 37-40% with methanol stabilizer) or in solid polymeric forms (paraformaldehyde, trioxane). Industrial production is via catalytic oxidation of methanol. Applications are extensive: resins (urea-formaldehyde, phenol-formaldehyde, melamine-formaldehyde) for wood products; disinfectant and biocide; preservative for biological specimens; chemical intermediate; and textile treatment. Formaldehyde is a known human carcinogen (nasopharyngeal cancer) and potent sensitizer. Safety protocols are extremely stringent. First aid involves immediate removal from exposure and medical evaluation. Environmental impact includes high biodegradability but toxicity to aquatic life. Despite toxicity concerns, formaldehyde remains essential due to its unique chemical properties.",
        details: {
            physicalState: "Colorless gas with strong pungent odor. Solutions: clear colorless liquid (formalin). Solid polymers: white powder (paraformaldehyde). Gas density: 1.04 (air=1). Boiling point: -19°C. Very soluble in water.",
            composition: "Formalin: 37-40% formaldehyde, 10-15% methanol stabilizer, water. Paraformaldehyde: (CH₂O)ₙ where n=8-100. Trioxane: (CH₂O)₃ cyclic trimer.",
            function: "Resin production (urea-formaldehyde, phenol-formaldehyde, melamine-formaldehyde), disinfectant and biocide, preservative (biological specimens), chemical intermediate, textile treatment, embalming fluid.",
            origin: "Catalytic oxidation of methanol: CH₃OH + ½O₂ → CH₂O + H₂O (silver or iron-molybdenum oxide catalysts). World production: ~30 million tons annually.",
            toxicity: "Known human carcinogen (IARC Group 1, nasopharyngeal cancer). Potent sensitizer (allergic contact dermatitis, asthma). Irritant to eyes, respiratory tract (TLV-TWA: 0.3 ppm). Oral LD50 rat: 100 mg/kg. Flammable gas (solutions flammable).",
            flammability: "Flammable gas (solutions flammable). Explosive limits in air: 7-73%. Autoignition temperature: 430°C. Formalin flash point: 50-85°C depending on methanol content.",
            reactivity: "Reactive aldehyde: undergoes nucleophilic addition, polymerization. Forms hydrates in water. Polymerizes easily (needs stabilizer). Reacts with amines forming Schiff bases. Oxidizes to formic acid.",
            acidity: "Not acidic. Carbonyl carbon is electrophilic.",
            biologicalEffect: "Carcinogenic: DNA-protein crosslinks, chromosomal damage. Sensitizer: allergic reactions, asthma. Irritant: eyes, nose, throat, lungs. Metabolic pathway: converted to formic acid then CO₂. Acute exposure: burning sensation, cough, chest tightness, pulmonary edema. Chronic: cancer, sensitization.",
            usage: "Resins for wood products (70%), chemicals (20%), disinfectants and preservatives (10%). Market value ~$12 billion.",
            handlingPrecautions: "Use in fume hood or with adequate local exhaust ventilation. Wear appropriate respirator (organic vapor cartridge), impermeable gloves (butyl rubber), chemical goggles, protective clothing. Monitor air concentrations. No eating, drinking, or smoking in area. Use closed systems where possible.",
            storageConditions: "Store in tightly closed containers in cool, well-ventilated area away from heat, sparks, flames. Formalin should be at 15-25°C to prevent polymerization. Store away from oxidizers, bases, acids. Label as carcinogen.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen if breathing difficult. Seek IMMEDIATE medical attention - inform of formaldehyde exposure. SKIN CONTACT: Remove contaminated clothing immediately. Wash thoroughly with soap and water for 15 minutes. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 20 minutes, holding eyelids open. Seek IMMEDIATE medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. If conscious, give water to drink. Seek IMMEDIATE medical attention.",
            disposalMethod: "Small quantities: dilute greatly with water, treat with sodium bisulfite to form bisulfite addition compound, then flush to sewer with plenty of water. Large quantities: incinerate in approved hazardous waste incinerator with afterburner and scrubber. Never discharge untreated."
        }
    },
    {
        id: 57,
        name: "Acetaldehyde",
        formula: "CH₃CHO",
        type: "organic",
        description: "Acetaldehyde is a colorless volatile liquid with a characteristic pungent, fruity odor. It is an important intermediate in chemical industry and also a natural metabolite of ethanol (causes hangover symptoms). Industrial production is primarily via oxidation of ethylene (Wacker process) or dehydrogenation of ethanol. Applications include chemical feedstock for acetic acid, pyridine derivatives, pentaerythritol, and various resins; flavoring agent; and formerly as a precursor to acetic anhydride. Safety concerns include high flammability, suspected carcinogenicity, and irritation. First aid involves removal from exposure, supportive care, and irrigation. Environmental impact includes high biodegradability but potential for photochemical smog formation. Acetaldehyde's reactivity makes it valuable for chemical synthesis but requires careful handling due to hazards.",
        details: {
            physicalState: "Colorless liquid. Pungent, fruity odor. Density: 0.788 g/cm³. Boiling point: 20.2°C. Melting point: -123.5°C. Miscible with water and organic solvents.",
            composition: "Pure acetaldehyde ≥99%. Often contains stabilizers (amines, antioxidants) to prevent polymerization. May contain trace acetic acid, crotonaldehyde.",
            function: "Chemical intermediate (acetic acid, pyridines, pentaerythritol, resins), flavoring agent, formerly for silver mirrors, laboratory reagent.",
            origin: "Wacker process: oxidation of ethylene (C₂H₄ + ½O₂ → CH₃CHO) with PdCl₂/CuCl₂ catalyst. Alternative: dehydrogenation of ethanol, hydration of acetylene. World production: ~1 million tons annually.",
            toxicity: "Suspected carcinogen (IARC Group 2B). Irritant to eyes, respiratory tract. CNS effects at high concentrations. Metabolite of ethanol (causes hangover). Oral LD50 rat: 1930 mg/kg. Highly flammable liquid.",
            flammability: "Extremely flammable liquid (flash point: -39°C). Autoignition temperature: 185°C. Explosive limits in air: 4-60%. Vapors heavier than air, can form explosive mixtures at room temperature.",
            reactivity: "Reactive aldehyde: undergoes nucleophilic addition, oxidation, reduction, polymerization. Forms acetals with alcohols. Aldol condensation with base. Polymerizes to paraldehyde (cyclic trimer) or metaldehyde.",
            acidity: "Not acidic. α-hydrogens somewhat acidic (pKa ≈17). Forms enolate with strong bases.",
            biologicalEffect: "Metabolite of ethanol via alcohol dehydrogenase. Causes hangover symptoms: flushing, tachycardia, nausea, headache. Carcinogenic: DNA adduct formation. Irritant to mucous membranes. Chronic exposure may increase cancer risk.",
            usage: "Chemical manufacturing (90%), flavoring (5%), other (5%). Declining due to replacement by other routes to acetic acid. Market value ~$1 billion.",
            handlingPrecautions: "Use in fume hood or with adequate ventilation. Wear appropriate respirator if handling significant quantities, impermeable gloves (butyl rubber), chemical goggles, face shield. Ground all equipment. Use explosion-proof equipment. Keep away from ignition sources.",
            storageConditions: "Store in tightly closed containers under nitrogen atmosphere in refrigerated conditions (-20°C recommended). Keep away from heat, sparks, flames. Store separately from oxidizers, acids, bases. Use approved flammable liquid storage. Temperature should not exceed 0°C for pure acetaldehyde.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen if breathing difficult. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water for 15 minutes. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. If conscious, give water to drink. Seek medical attention.",
            disposalMethod: "Small quantities: dilute greatly with water, treat with sodium bisulfite to form addition compound, then flush to sewer with plenty of water. Large quantities: incinerate in approved hazardous waste incinerator. Never discharge untreated."
        }
    },
    {
        id: 58,
        name: "Benzaldehyde",
        formula: "C₆H₅CHO",
        type: "organic",
        description: "Benzaldehyde is the simplest aromatic aldehyde, appearing as a colorless to yellow liquid with a characteristic almond-like odor. It occurs naturally in bitter almonds, peach kernels, and other stone fruits. Industrial production is via oxidation of toluene or hydrolysis of benzal chloride. Applications include flavoring agent (almond flavor), fragrance, chemical intermediate for dyes, pharmaceuticals, and plastics; and solvent. Benzaldehyde is the precursor to mandelic acid, cinnamic acid, and various pharmaceuticals. Safety concerns include moderate toxicity, irritation, and potential for cyanide release from amygdalin in natural sources (not synthetic). First aid involves removal from exposure, supportive care, and irrigation. Environmental impact includes moderate biodegradability and potential aquatic toxicity. Benzaldehyde's pleasant aroma and reactivity ensure continued use in food, fragrance, and chemical industries.",
        details: {
            physicalState: "Colorless to yellow liquid. Characteristic almond odor. Density: 1.044 g/cm³. Boiling point: 178.1°C. Melting point: -57°C. Slightly soluble in water (6.9 g/L), miscible with organic solvents.",
            composition: "Pure benzaldehyde ≥99%. May contain trace benzoic acid (oxidation product). Natural benzaldehyde from almonds contains trace hydrogen cyanide from amygdalin hydrolysis.",
            function: "Flavoring agent (almond flavor), fragrance, chemical intermediate (dyes, pharmaceuticals, plastics), solvent, laboratory reagent.",
            origin: "Industrial: oxidation of toluene with air or hydrolysis of benzal chloride (C₆H₅CHCl₂ + H₂O → C₆H₅CHO + 2HCl). Natural: extraction from bitter almonds, peach kernels. World production: ~20,000 tons annually.",
            toxicity: "Moderate toxicity (oral LD50 rat: 1300 mg/kg). Irritant to eyes, skin, respiratory tract. May cause allergic reactions. Natural benzaldehyde may contain trace HCN. Not classified as carcinogen. TLV-TWA: none established.",
            flammability: "Combustible liquid (flash point: 63°C). Autoignition temperature: 192°C. Not highly flammable but will burn.",
            reactivity: "Aromatic aldehyde: less reactive than aliphatic aldehydes. Undergoes oxidation to benzoic acid. Cannizzaro reaction with strong base. Forms cyanohydrins with HCN. Reduces to benzyl alcohol.",
            acidity: "Not acidic. Aromatic ring deactivates carbonyl.",
            biologicalEffect: "Moderate toxicity. Metabolized to benzoic acid then hippuric acid excreted in urine. May cause allergic reactions in sensitive individuals. Natural source: amygdalin hydrolysis yields HCN (toxic). Synthetic: no cyanide risk.",
            usage: "Flavor and fragrance (60%), chemical manufacturing (35%), other (5%). Market value ~$200 million.",
            handlingPrecautions: "Wear gloves, safety goggles, lab coat. Use in well-ventilated area. Avoid contact with eyes and skin. Normal laboratory precautions adequate. For food grade, maintain hygiene.",
            storageConditions: "Store in tightly closed amber containers in cool, dark, well-ventilated area. Protect from air to prevent oxidation to benzoic acid. Keep away from oxidizers, strong bases. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air. Usually no treatment needed. SKIN CONTACT: Wash with soap and water. Usually no treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Drink water. Seek medical attention if large amount ingested.",
            disposalMethod: "Small quantities: mix with combustible solvent for incineration. Large quantities: recover by distillation for reuse. Can be biodegraded in wastewater treatment. No special environmental concerns."
        }
    },
    {
        id: 59,
        name: "Benzoic Acid",
        formula: "C₆H₅COOH",
        type: "organic",
        description: "Benzoic acid is the simplest aromatic carboxylic acid, appearing as white crystalline solid or powder with a faint pleasant odor. It occurs naturally in many plants and resins, particularly in gum benzoin. Industrial production is via oxidation of toluene with air or via hydrolysis of benzotrichloride. Applications include food preservative (inhibits mold, yeast, bacteria), chemical intermediate for phenol, caprolactam, and benzoyl chloride; pH adjuster; and medicinal uses. As a food preservative, it is used as sodium benzoate salt. Safety concerns include irritation, potential for allergic reactions, and formation of benzene with ascorbic acid in acidic beverages (controversial). First aid involves irrigation and medical evaluation for significant exposures. Environmental impact includes moderate biodegradability and low aquatic toxicity. Benzoic acid's antimicrobial properties and low cost ensure continued widespread use.",
        details: {
            physicalState: "White crystalline solid or powder. Faint pleasant odor. Density: 1.32 g/cm³. Melting point: 122°C. Boiling point: 249°C. Slightly soluble in water (2.9 g/L at 20°C), soluble in organic solvents.",
            composition: "Pure benzoic acid ≥99.5%. May contain trace benzaldehyde, benzyl alcohol. Food grade has strict purity specifications.",
            function: "Food preservative (as sodium benzoate), chemical intermediate (phenol, caprolactam, benzoyl chloride), pH adjuster, medicinal (antifungal, urinary antiseptic), laboratory reagent.",
            origin: "Industrial: oxidation of toluene with air (catalyzed by cobalt naphthenate) or hydrolysis of benzotrichloride. Natural: extraction from gum benzoin. World production: ~700,000 tons annually.",
            toxicity: "Low toxicity (oral LD50 rat: 2530 mg/kg). Generally Recognized As Safe (GRAS) as food additive. Irritant to eyes, skin, respiratory tract. May cause allergic reactions. Not classified as carcinogen. Concern: reaction with ascorbic acid in acidic beverages may form benzene (trace amounts).",
            flammability: "Combustible solid. Dust may form explosive mixtures with air. Not highly flammable.",
            reactivity: "Carboxylic acid: forms salts with bases, esters with alcohols, acid chlorides with thionyl chloride. Decarboxylates at high temperature to benzene + CO₂. Brominates in ring (ortho/para directing).",
            acidity: "Moderately strong acid for organic acid (pKa = 4.20). More acidic than aliphatic carboxylic acids due to resonance stabilization of benzoate anion.",
            biologicalEffect: "Preservative: inhibits mold, yeast, bacteria by acidifying cell interior. Metabolized to hippuric acid in liver, excreted in urine. Generally safe at food use levels (0.1%). Some individuals sensitive (urticaria, asthma).",
            usage: "Food preservative (as sodium benzoate - 60%), chemical manufacturing (35%), other (5%). Market value ~$800 million.",
            handlingPrecautions: "Wear dust mask, gloves, safety goggles. Avoid dust generation. Use in well-ventilated area. Normal laboratory precautions adequate. For food grade, maintain hygiene.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Protect from moisture. No special segregation needed. Temperature should not exceed 30°C. Shelf life: 3 years.",
            firstAidMeasures: "INHALATION: Remove to fresh air. Usually no treatment needed. SKIN CONTACT: Wash with soap and water. Usually no treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Drink water. Usually no treatment needed.",
            disposalMethod: "Small quantities: flush to sewer with plenty of water. Large quantities: mix with combustible material and incinerate. Biodegradable in wastewater treatment."
        }
    },
    {
        id: 60,
        name: "Aniline",
        formula: "C₆H₅NH₂",
        type: "organic",
        description: "Aniline is the simplest aromatic amine, appearing as a colorless to brown oily liquid with a characteristic amine odor. Industrial production is via reduction of nitrobenzene or amination of phenol. Aniline is a crucial intermediate in chemical industry, primarily for production of methylene diphenyl diisocyanate (MDI) for polyurethanes, rubber chemicals, dyes, pharmaceuticals, and agrochemicals. Safety concerns are severe: aniline is toxic, causing methemoglobinemia (converts hemoglobin to methemoglobin unable to carry oxygen), and is a suspected human carcinogen. First aid involves immediate removal from exposure, oxygen administration, and specific treatment with methylene blue for methemoglobinemia. Environmental impact includes toxicity to aquatic life and persistence. Despite hazards, aniline remains essential due to its role in polyurethane production, with strict controls in place.",
        details: {
            physicalState: "Colorless to brown oily liquid. Characteristic amine odor (fishy). Density: 1.02 g/cm³. Boiling point: 184°C. Melting point: -6°C. Slightly soluble in water (34 g/L), miscible with organic solvents.",
            composition: "Pure aniline ≥99.5%. May contain trace nitrobenzene, cyclohexylamine. Often stabilized with antioxidants.",
            function: "Chemical intermediate for MDI (polyurethanes), rubber chemicals, dyes, pharmaceuticals, agrochemicals, laboratory reagent.",
            origin: "Reduction of nitrobenzene with iron and HCl (Bechamp process) or catalytic hydrogenation. Amination of phenol with ammonia. World production: ~6 million tons annually (mostly for MDI).",
            toxicity: "Highly toxic (oral LD50 rat: 250 mg/kg). Causes methemoglobinemia: oxidizes hemoglobin Fe²⁺ to Fe³⁺, reducing oxygen carrying capacity. Suspected carcinogen (IARC Group 3). Skin absorption significant. TLV-TWA: 2 ppm (8 mg/m³).",
            flammability: "Combustible liquid (flash point: 70°C). Autoignition temperature: 615°C. Not highly flammable but will burn.",
            reactivity: "Aromatic amine: weak base (pKb = 9.4). Undergoes diazotization, acylation, alkylation. Oxidizes in air turning brown. Forms salts with acids. Reacts with nitrous acid forming diazonium salt.",
            acidity: "Very weak base compared to aliphatic amines. pKa of anilinium ion = 4.6. Amino group strongly deactivates benzene ring.",
            biologicalEffect: "Methemoglobinemia: cyanosis (blue skin), headache, dizziness, weakness, tachycardia, coma at high levels. Treatment: methylene blue (reduces methemoglobin). Chronic exposure: bladder cancer risk, anemia. Skin absorption significant.",
            usage: "MDI production for polyurethanes (85%), rubber chemicals (8%), dyes and pigments (5%), other (2%). Market value ~$10 billion.",
            handlingPrecautions: "Use in fume hood or with adequate local exhaust ventilation. Wear appropriate respirator (organic vapor cartridge), impermeable gloves (butyl rubber), chemical goggles, protective clothing. Monitor air concentrations. No skin contact. Use closed systems where possible.",
            storageConditions: "Store in tightly closed amber containers under nitrogen atmosphere in cool, well-ventilated area. Protect from air and light to prevent oxidation. Store away from oxidizers, acids. Label as toxic. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen. If cyanosis (blue skin/lips) present, suspect methemoglobinemia. Seek IMMEDIATE medical attention - methylene blue may be needed. SKIN CONTACT: Remove contaminated clothing immediately. Wash thoroughly with soap and water for 15 minutes. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Seek IMMEDIATE medical attention - monitor for methemoglobinemia.",
            disposalMethod: "Small quantities: dissolve in combustible solvent, treat with hypochlorite to oxidize, then incinerate. Large quantities: recover by distillation for reuse. Never discharge to sewer (toxic to aquatic life). Hazardous waste disposal required."
        }
    },
    {
        id: 61,
        name: "Phenol",
        formula: "C₆H₅OH",
        type: "organic",
        description: "Phenol is the simplest aromatic alcohol, appearing as white crystalline solid that turns pink or red on exposure to air and light. It has a distinct sweet, tarry odor. Industrial production is primarily via cumene process (co-produced with acetone) or from coal tar. Applications include production of phenolic resins (Bakelite), bisphenol A (for polycarbonates and epoxy resins), caprolactam (nylon), pharmaceuticals, and as a disinfectant. Safety concerns are severe: phenol is corrosive, toxic, and rapidly absorbed through skin causing systemic toxicity. First aid involves immediate removal from exposure, irrigation with polyethylene glycol (not water initially for skin), and medical evaluation. Environmental impact includes toxicity to aquatic life and persistence. Despite hazards, phenol remains essential in polymer and chemical industries.",
        details: {
            physicalState: "White crystalline solid, turns pink/red on exposure. Sweet, tarry odor. Density: 1.07 g/cm³. Melting point: 40.5°C. Boiling point: 181.7°C. Soluble in water (83 g/L), organic solvents.",
            composition: "Pure phenol ≥99%. May contain trace water, cresols. Often contains stabilizers to prevent coloration.",
            function: "Production of phenolic resins (Bakelite), bisphenol A (polycarbonates, epoxies), caprolactam (nylon), pharmaceuticals, disinfectant, chemical intermediate.",
            origin: "Cumene process: co-produced with acetone from benzene and propylene. Extraction from coal tar. Hydrolysis of chlorobenzene. World production: ~10 million tons annually.",
            toxicity: "Highly toxic and corrosive (oral LD50 rat: 317 mg/kg). Rapid skin absorption causing systemic toxicity. Corrosive to tissues. Suspected carcinogen (IARC Group 3). TLV-TWA: 5 ppm (19 mg/m³).",
            flammability: "Combustible solid (flash point: 79°C). Autoignition temperature: 715°C. Not highly flammable but will burn.",
            reactivity: "Weak acid (pKa = 9.95). Undergoes electrophilic substitution (ortho/para directing). Forms esters, ethers. Oxidizes to quinones. Reacts with formaldehyde forming resins.",
            acidity: "Weak acid compared to carboxylic acids but stronger than alcohols. pKa = 9.95. Forms phenoxide salts with bases.",
            biologicalEffect: "Corrosive: chemical burns. Rapid skin absorption: CNS depression, cardiovascular collapse, renal failure. Characteristic: white blanching of skin followed by brown discoloration. Chronic: liver/kidney damage, dark urine. Treatment: decontamination with polyethylene glycol (PEG) for skin, supportive care.",
            usage: "Phenolic resins (40%), bisphenol A (35%), caprolactam (15%), other (10%). Market value ~$15 billion.",
            handlingPrecautions: "Use in fume hood. Wear appropriate respirator if handling powder, impermeable gloves (butyl rubber), chemical goggles, face shield, protective clothing. No skin contact. Use closed systems. Have polyethylene glycol available for decontamination.",
            storageConditions: "Store in tightly closed amber containers under nitrogen atmosphere in cool, dark place. Protect from air and light. Store away from oxidizers, bases. Label as corrosive, toxic. Temperature: 15-25°C (above melting point requires careful handling).",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen. Seek IMMEDIATE medical attention. SKIN CONTACT: Remove contaminated clothing immediately. Wipe excess with absorbent material. Wash with polyethylene glycol (PEG 300 or 400) for at least 15 minutes, then with soap and water. Water initially may increase absorption. Seek IMMEDIATE medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes, holding eyelids open. Seek IMMEDIATE medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. If conscious, give water or milk to drink. Seek IMMEDIATE medical attention.",
            disposalMethod: "Small quantities: dissolve in combustible solvent, treat with oxidizing agent (hypochlorite), then incinerate. Large quantities: recover by distillation for reuse. Never discharge to sewer. Hazardous waste disposal required."
        }
    },
    {
        id: 62,
        name: "Chloroform",
        formula: "CHCl₃",
        type: "organic",
        description: "Chloroform is a dense, clear, volatile liquid with a characteristic sweet odor. Historically famous as a surgical anesthetic, its use for this purpose has been abandoned due to toxicity. Modern production is via chlorination of methane or methanol. Applications include chemical intermediate for fluorocarbons (HCFC-22), solvent in pharmaceutical manufacturing, laboratory reagent, and formerly in cough syrups and toothpastes. Safety concerns are severe: chloroform is toxic to liver and kidneys, suspected carcinogen, and decomposes to phosgene (chemical warfare agent) when exposed to light and air. First aid involves removal from exposure, supportive care, and never inducing vomiting due to aspiration risk. Environmental impact includes persistence, bioaccumulation potential, and ozone depletion potential (from HCFC-22 production). Strict regulations limit use.",
        details: {
            physicalState: "Clear colorless dense liquid. Sweet characteristic odor. Density: 1.48 g/cm³. Boiling point: 61.2°C. Melting point: -63.5°C. Slightly soluble in water (8 g/L), miscible with organic solvents.",
            composition: "Stabilized chloroform contains 0.5-1% ethanol or amylene to prevent phosgene formation. Pure chloroform decomposes in light/air.",
            function: "Chemical intermediate for HCFC-22, solvent (pharmaceuticals), laboratory reagent, formerly anesthetic, cough syrups, toothpastes.",
            origin: "Chlorination of methane: CH₄ + 3Cl₂ → CHCl₃ + 3HCl. Or from methanol: CH₃OH + 3Cl₂ → CHCl₃ + 3HCl + H₂O. World production: ~700,000 tons annually (declining).",
            toxicity: "Toxic to liver and kidneys (oral LD50 rat: 908 mg/kg). Suspected carcinogen (IARC Group 2B). CNS depressant (former anesthetic). Decomposes to phosgene (toxic). TLV-TWA: 10 ppm (49 mg/m³). Not flammable.",
            flammability: "Non-flammable liquid. Will not support combustion. Decomposes at high temperatures producing toxic phosgene, hydrogen chloride.",
            reactivity: "Undergoes nucleophilic substitution. Decomposes in light/air to phosgene (COCl₂) and hydrogen chloride. Reacts with strong bases producing dichlorocarbene. Forms azeotrope with water.",
            acidity: "Not acidic. α-hydrogens somewhat acidic (pKa ≈24). Forms carbanion with very strong bases.",
            biologicalEffect: "CNS depressant: dizziness, headache, unconsciousness (former anesthetic). Hepatotoxic and nephrotoxic. Metabolized to phosgene in liver causing cellular damage. Carcinogenic in animal studies (liver, kidney tumors). Treatment: supportive care, monitor liver/kidney function.",
            usage: "HCFC-22 production (80%), laboratory and pharmaceutical (15%), other (5%). Declining due to environmental concerns.",
            handlingPrecautions: "Use in fume hood. Wear appropriate respirator if handling significant quantities, impermeable gloves (nitrile, butyl), chemical goggles. Protect from light. Use stabilized chloroform. No eating, drinking, or smoking in area.",
            storageConditions: "Store in tightly closed amber containers in cool, dark, well-ventilated area. Stabilized with ethanol or amylene. Store away from light, heat, bases. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen if breathing difficult. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water for 15 minutes. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention. INGESTION: Do NOT induce vomiting (aspiration risk). Rinse mouth with water. Seek medical attention - monitor liver/kidney function.",
            disposalMethod: "Small quantities: evaporate in fume hood or mix with combustible solvent for incineration. Large quantities: recover by distillation for reuse. Never discharge to sewer (persistent). Hazardous waste disposal required."
        }
    },
    {
        id: 63,
        name: "Carbon Tetrachloride",
        formula: "CCl₄",
        type: "organic",
        description: "Carbon tetrachloride is a clear, colorless, dense volatile liquid with a sweet characteristic odor. Once widely used as a solvent, dry cleaning agent, fire extinguisher, and refrigerant, its use has been largely banned due to severe toxicity and environmental persistence. Modern production is minimal, primarily for chemical feedstock. Carbon tetrachloride is severely toxic to liver and kidneys, suspected human carcinogen, and depletes stratospheric ozone. First aid involves immediate removal from exposure and medical evaluation, with no specific antidote available. Environmental impact includes extreme persistence, bioaccumulation potential, and ozone depletion. The compound serves as a classic example of a chemical whose useful properties were outweighed by unacceptable hazards, leading to near-complete phase-out under the Montreal Protocol.",
        details: {
            physicalState: "Clear colorless dense liquid. Sweet characteristic odor. Density: 1.59 g/cm³. Boiling point: 76.7°C. Melting point: -22.9°C. Very slightly soluble in water (0.8 g/L), miscible with organic solvents.",
            composition: "Pure carbon tetrachloride. May contain trace chloroform, carbon disulfide. No longer commercially available in most countries.",
            function: "Formerly: solvent, dry cleaning, fire extinguisher, refrigerant. Currently: limited chemical feedstock, laboratory reagent (restricted), ozone-depleting substance regulated.",
            origin: "Chlorination of methane: CH₄ + 4Cl₂ → CCl₄ + 4HCl. Or from carbon disulfide: CS₂ + 3Cl₂ → CCl₄ + S₂Cl₂. World production: minimal (<10,000 tons annually) for essential uses exempted from Montreal Protocol.",
            toxicity: "Severely toxic to liver and kidneys (oral LD50 rat: 2350 mg/kg). Suspected human carcinogen (IARC Group 2B). CNS depressant. Causes hepatic necrosis, renal failure. TLV-TWA: 5 ppm (31 mg/m³). Not flammable.",
            flammability: "Non-flammable liquid. Actually used in fire extinguishers historically. Decomposes at high temperatures producing toxic phosgene, chlorine.",
            reactivity: "Inert under normal conditions. Decomposes at high temperatures or with metals producing phosgene. Reacts with strong bases. Photodecomposes in atmosphere producing chlorine radicals (ozone depletion).",
            acidity: "Not acidic. No acidic hydrogens.",
            biologicalEffect: "Hepatotoxic and nephrotoxic: centrilobular hepatic necrosis, renal tubular necrosis. CNS depression: dizziness, headache, unconsciousness. Carcinogenic in animal studies (liver tumors). No specific antidote. Treatment: supportive care, monitor liver/kidney function, possibly N-acetylcysteine.",
            usage: "Essentially banned. Minimal use as chemical feedstock under Montreal Protocol exemptions. Historical uses discontinued.",
            handlingPrecautions: "AVOID USE. If essential use required: use in fume hood with appropriate filtration. Wear appropriate respirator (organic vapor cartridge), impermeable gloves (butyl rubber), chemical goggles, protective clothing. Monitor air concentrations. Use closed systems only.",
            storageConditions: "Store in tightly closed containers in cool, well-ventilated, secure area. Label as toxic, ozone-depleting substance. Keep records of use. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen. Seek IMMEDIATE medical attention. SKIN CONTACT: Remove contaminated clothing immediately. Wash thoroughly with soap and water for 15 minutes. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 15 minutes, holding eyelids open. Seek medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Seek IMMEDIATE medical attention - monitor liver/kidney function.",
            disposalMethod: "Must be handled as hazardous waste. Small quantities: absorb on vermiculite, package, send for hazardous waste incineration. Large quantities: professional hazardous waste disposal with destruction efficiency >99.99%. Never discharge to environment."
        }
    },
    {
        id: 64,
        name: "Ether (Diethyl Ether)",
        formula: "(C₂H₅)₂O",
        type: "organic",
        description: "Diethyl ether, commonly called ether, is a clear, colorless, highly volatile liquid with a characteristic sweet, pungent odor. Historically famous as a surgical anesthetic, it has been largely replaced by safer agents but remains important as a laboratory solvent. Industrial production is via acid-catalyzed dehydration of ethanol. Applications include solvent for Grignard reactions, extractions, and chemical synthesis; starting fluid for diesel engines; and formerly as anesthetic. Safety concerns are extreme: highly flammable, forms explosive peroxides upon storage, and causes central nervous system depression. First aid involves removal from exposure, supportive care, and never using water on ether fires (use alcohol-resistant foam). Environmental impact includes high volatility contributing to smog formation but relatively low toxicity.",
        details: {
            physicalState: "Clear colorless liquid. Characteristic sweet, pungent odor. Density: 0.713 g/cm³. Boiling point: 34.6°C. Melting point: -116°C. Slightly soluble in water (69 g/L), miscible with organic solvents.",
            composition: "Anhydrous diethyl ether. May contain ethanol stabilizer (2-3%) to prevent peroxide formation. Must be tested for peroxides before use.",
            function: "Laboratory solvent (Grignard reactions, extractions), chemical synthesis, starting fluid for diesel engines, formerly anesthetic, formulation solvent.",
            origin: "Dehydration of ethanol with sulfuric acid: 2C₂H₅OH → (C₂H₅)₂O + H₂O. World production: ~50,000 tons annually (declining).",
            toxicity: "Low acute toxicity (oral LD50 rat: 1215 mg/kg). CNS depressant (former anesthetic). Causes nausea, vomiting post-anesthesia. Not classified as carcinogen. TLV-TWA: 400 ppm (1200 mg/m³). EXTREMELY FLAMMABLE.",
            flammability: "Extremely flammable liquid (flash point: -45°C). Autoignition temperature: 160°C. Explosive limits in air: 1.9-48%. Vapors heavier than air, can travel along floors to ignition sources. Forms explosive peroxides upon storage with air.",
            reactivity: "Ether: relatively inert. Forms peroxides with air (dangerous explosion hazard). Cleaves with strong acids. Forms coordination complexes. Volatile - evaporates rapidly.",
            acidity: "Not acidic. Ether oxygen is basic (Lewis base). Forms oxonium salts with strong acids.",
            biologicalEffect: "CNS depressant: induction of anesthesia, respiratory depression at high doses. Causes nausea and vomiting post-exposure. Not metabolized to toxic products. Chronic exposure: tolerance, dependence (ether was addictive).",
            usage: "Laboratory solvent (70%), chemical manufacturing (20%), other (10%). Declining due to flammability and peroxide hazards.",
            handlingPrecautions: "Use in fume hood away from ALL ignition sources (including static). Wear flame-resistant lab coat, safety goggles, gloves. Ground all equipment. Test for peroxides before use or distillation. Store over sodium wire to prevent peroxides. Use smallest quantities possible.",
            storageConditions: "Store in tightly closed containers in explosion-proof refrigerator or flammable liquid storage cabinet. Must contain stabilizer (BHT, ethanol) and be tested regularly for peroxides. Store under nitrogen if possible. Keep away from light, heat, oxidizers. Temperature should not exceed 0°C recommended.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. If breathing difficult, administer oxygen. Seek medical attention if unconscious. SKIN CONTACT: Remove contaminated clothing. Wash with soap and water. No special treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Do NOT induce vomiting (aspiration risk). Rinse mouth with water. Seek medical attention if large amount ingested. FIRE: Use alcohol-resistant foam, CO₂, dry chemical. DO NOT USE WATER (spreads fire).",
            disposalMethod: "Small quantities: evaporate in fume hood (check local regulations). Test for peroxides first - if peroxides present, treat with reducing agent (ferrous sulfate) before disposal. Large quantities: recover by distillation for reuse. Never pour down drain (fire hazard)."
        }
    },
    {
        id: 65,
        name: "Urea",
        formula: "CH₄N₂O",
        type: "organic",
        description: "Urea is a colorless crystalline organic compound that is the primary nitrogenous waste product of protein metabolism in mammals. It appears as white crystals or powder and is synthesized industrially from ammonia and carbon dioxide under high pressure (Bosch-Meiser process). Applications are dominated by fertilizers (46% nitrogen content), but also include resin production (urea-formaldehyde), animal feed additive, de-icing agent, cosmetics, pharmaceuticals, and selective catalytic reduction (SCR) for diesel exhaust. Safety profile is excellent with very low toxicity. First aid measures are minimal. Environmental impact includes potential for eutrophication if over-applied as fertilizer but otherwise benign. Urea represents one of the most important nitrogen compounds globally, with massive production supporting world agriculture.",
        details: {
            physicalState: "White crystals or powder. Odorless. Density: 1.32 g/cm³. Melting point: 133°C (decomposes). Soluble in water (1080 g/L at 20°C), glycerol, slightly soluble in ethanol.",
            composition: "Pure urea ≥99%. Fertilizer grade: 46% N. May contain trace biuret (toxic to plants at >2%). Coated forms for slow release.",
            function: "Fertilizer (nitrogen source), resin production (urea-formaldehyde), animal feed, de-icing agent, cosmetics (moisturizer), pharmaceuticals, diesel exhaust fluid (DEF/AdBlue), laboratory reagent.",
            origin: "Bosch-Meiser process: 2NH₃ + CO₂ → NH₂CONH₂ + H₂O at 150-200°C, 150-250 atm. World production: ~200 million tons annually (largest organic chemical by production).",
            toxicity: "Very low toxicity (oral LD50 rat: 8471 mg/kg). Not classified as hazardous. May cause irritation at high concentrations. Biuret impurity (>2%) toxic to plants. No carcinogenicity, mutagenicity.",
            flammability: "Not flammable. Decomposes when heated producing toxic gases (ammonia, cyanic acid, nitrogen oxides).",
            reactivity: "Hydrolyzes to ammonia and carbon dioxide (enzymatically or with heat). Forms complexes with many compounds. Condenses with formaldehyde forming resins. Forms biuret on heating.",
            acidity: "Very weakly basic (pKb ≈13.9). Forms salts with strong acids. Not acidic.",
            biologicalEffect: "Natural metabolite excreted in urine. Used as moisturizer in cosmetics (keratolytic). At very high concentrations: osmotic diuresis. No significant toxicity. Fertilizer: provides nitrogen for plant growth.",
            usage: "Fertilizers (90%), resins and adhesives (5%), animal feed (3%), other (2%). Market value ~$60 billion.",
            handlingPrecautions: "Normal laboratory precautions. Wear dust mask if handling powder. No special requirements. For fertilizer handling, dust control measures.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Protect from moisture to prevent caking. No special segregation. Temperature should not exceed 30°C. Shelf life: 6-12 months for fertilizer (hygroscopic).",
            firstAidMeasures: "INHALATION: Remove to fresh air. No treatment needed. SKIN CONTACT: Wash with soap and water. No treatment needed. EYE CONTACT: Rinse with water. No treatment needed. INGESTION: Rinse mouth with water. Drink water. No treatment needed.",
            disposalMethod: "Can be disposed with regular waste or used as fertilizer. Flush to sewer acceptable (acts as nitrogen source for wastewater treatment). Biodegradable. No environmental restrictions except eutrophication concern if large quantities to water bodies."
        }
    },
    {
        id: 66,
        name: "Glucose",
        formula: "C₆H₁₂O₆",
        type: "organic",
        description: "Glucose, also known as dextrose, is a simple sugar (monosaccharide) that is the primary energy source for most living organisms. It appears as white crystalline powder or granules with a sweet taste. Glucose occurs naturally in fruits, honey, and as the building block of starch and cellulose. Industrial production is via enzymatic hydrolysis of starch (from corn, wheat, potatoes). Applications include food and beverage sweetener, intravenous fluids in medicine, fermentation substrate, and chemical feedstock. Safety profile is excellent as it is a fundamental biological molecule. First aid measures are minimal. Environmental impact is benign as glucose is rapidly biodegraded. Glucose represents the most important carbohydrate in biochemistry and has numerous industrial and medical applications.",
        details: {
            physicalState: "White crystalline powder or granules. Odorless, sweet taste. Density: 1.54 g/cm³. Melting point: 146°C (anhydrous), 83°C (monohydrate). Very soluble in water (910 g/L at 25°C), slightly soluble in ethanol.",
            composition: "D-glucose (dextrose). Anhydrous or monohydrate. Food grade ≥99.5% pure. May contain trace oligosaccharides from incomplete hydrolysis.",
            function: "Food and beverage sweetener, intravenous fluid (dextrose solution), fermentation substrate (ethanol, citric acid), chemical feedstock, laboratory reagent, energy source in sports drinks.",
            origin: "Enzymatic hydrolysis of starch (from corn, wheat, potatoes) using amylases and glucoamylases. Also by acid hydrolysis (older method). World production: ~20 million tons annually.",
            toxicity: "Very low toxicity (oral LD50 rat: 25800 mg/kg). Essential nutrient. Intravenous use: hyperglycemia if excessive. Not carcinogenic, mutagenic. Food grade safe.",
            flammability: "Combustible solid. Dust may form explosive mixtures with air. Not highly flammable.",
            reactivity: "Reducing sugar: reduces Fehling's, Benedict's solutions. Undergoes Maillard reaction with amino acids. Ferments to ethanol. Forms glycosides. Mutarotation in solution (α/β anomers).",
            acidity: "Very weak acid (pKa ≈12-13). Enol form more acidic. Not significant acid-base properties.",
            biologicalEffect: "Primary energy source (4 kcal/g). Regulated by insulin/glucagon. Medical: dextrose solutions for hydration, hypoglycemia treatment. Excessive intake: obesity, diabetes risk. Essential for brain function.",
            usage: "Food and beverages (70%), pharmaceutical (15%), chemical industry (10%), other (5%). Market value ~$5 billion.",
            handlingPrecautions: "Normal laboratory precautions. Wear dust mask if handling powder. For food grade, maintain hygiene. No special requirements.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Protect from moisture (hygroscopic). No special segregation. Temperature should not exceed 25°C. Shelf life: 3 years.",
            firstAidMeasures: "INHALATION: No treatment needed. SKIN CONTACT: Wash with soap and water. No treatment needed. EYE CONTACT: Rinse with water. No treatment needed. INGESTION: No treatment needed (it's food).",
            disposalMethod: "Can be disposed with regular waste or flushed to sewer. Biodegradable - excellent food source for microorganisms. Compostable. No environmental concerns."
        }
    },
    {
        id: 67,
        name: "Glycerol (Glycerin)",
        formula: "C₃H₈O₃",
        type: "organic",
        description: "Glycerol is a colorless, odorless, viscous liquid with a sweet taste. It is a triol (three hydroxyl groups) and occurs naturally as triglycerides in fats and oils. Industrial production is primarily as a byproduct of biodiesel production (transesterification) or from hydrolysis of fats (soap making). Applications are extremely diverse: humectant in foods, cosmetics, and tobacco; plasticizer; sweetener; pharmaceutical formulations; antifreeze; and chemical intermediate for explosives (nitroglycerin), polymers, and resins. Safety profile is excellent with very low toxicity. First aid measures are minimal. Environmental impact is benign as glycerol is readily biodegradable. Glycerol's unique combination of properties - hygroscopicity, viscosity, sweetness, and low toxicity - ensures continued widespread use across multiple industries.",
        details: {
            physicalState: "Clear colorless viscous liquid. Odorless, sweet taste. Density: 1.26 g/cm³. Boiling point: 290°C (decomposes). Melting point: 17.8°C. Miscible with water, soluble in ethanol, insoluble in hydrocarbons.",
            composition: "Pure glycerol ≥99.5%. USP grade for pharmaceuticals, food grade, technical grade. May contain trace water, salts, MONG (matter organic non-glycerol).",
            function: "Humectant (foods, cosmetics, tobacco), plasticizer, sweetener, pharmaceutical formulations, antifreeze, chemical intermediate (nitroglycerin, alkyd resins), laboratory reagent.",
            origin: "Biodiesel byproduct: transesterification of vegetable oils gives glycerol + methyl esters. Saponification of fats (soap making). Synthesis from propylene. World production: ~3 million tons annually (increasing with biodiesel).",
            toxicity: "Very low toxicity (oral LD50 rat: 12600 mg/kg). Generally Recognized As Safe (GRAS) as food additive. May cause mild irritation at high concentrations. Not carcinogenic, mutagenic.",
            flammability: "Combustible liquid (flash point: 160°C). Autoignition temperature: 370°C. Not highly flammable. Dust may be explosive if dried and powdered.",
            reactivity: "Triol: forms esters, ethers, acetals. Dehydrates to acrolein. Oxidizes to glyceraldehyde, dihydroxyacetone. Forms complexes with borates. Hygroscopic.",
            acidity: "Very weak acid (pKa ≈14-15). Similar to alcohols. Forms alkoxides with strong bases.",
            biologicalEffect: "Metabolized to glucose or oxidized for energy. Osmotic agent: used in cerebral edema treatment. Laxative effect at high doses. Humectant: draws moisture to skin. No significant toxicity.",
            usage: "Food, pharmaceuticals, cosmetics (60%), chemical manufacturing (30%), tobacco (5%), other (5%). Market value ~$3 billion.",
            handlingPrecautions: "Normal laboratory precautions. Wear gloves if handling large quantities (hygroscopic - dries skin). No special ventilation needed. For food/pharmaceutical grade, maintain hygiene.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Protect from moisture (hygroscopic but also gives off moisture). No special segregation. Temperature should not exceed 30°C. Shelf life: indefinite.",
            firstAidMeasures: "INHALATION: No treatment needed. SKIN CONTACT: Wash with soap and water. No treatment needed. EYE CONTACT: Rinse with water. No treatment needed. INGESTION: No treatment needed (it's food additive).",
            disposalMethod: "Can be disposed with regular waste or flushed to sewer. Biodegradable - excellent carbon source for wastewater treatment. Compostable. No environmental concerns."
        }
    },

    // F. OXIDIZING/REDUCING AGENTS (68-73)
    {
        id: 68,
        name: "Hydrogen Peroxide",
        formula: "H₂O₂",
        type: "organic",
        description: "Hydrogen peroxide is a clear, colorless liquid slightly more viscous than water. It is a powerful oxidizing agent that decomposes to water and oxygen. Industrial production is via anthraquinone process (alkylanthraquinone redox cycle). Concentrations range from 3% (household disinfectant) to 90% (rocket propellant). Applications include bleaching (paper, textiles, hair), disinfectant, chemical synthesis, environmental remediation, and propulsion. Safety concerns include decomposition with heat or contaminants releasing oxygen (explosion risk), corrosive properties at high concentrations, and fire hazard when in contact with combustibles. First aid involves thorough irrigation and medical evaluation for significant exposures. Environmental impact is low as it decomposes to water and oxygen. Hydrogen peroxide's combination of strong oxidizing power and environmentally benign decomposition products makes it valuable across many industries.",
        details: {
            physicalState: "Clear colorless liquid (pure), pale blue in thick layers. Odorless. Density: 1.11 g/cm³ (30%), 1.45 g/cm³ (90%). Boiling point: 150.2°C (decomposes). Miscible with water.",
            composition: "Aqueous solutions: 3%, 6%, 30%, 50%, 70%, 90% H₂O₂ by weight. Stabilized with phosphates, tin compounds, acetanilide. Pure H₂O₂ unstable.",
            function: "Bleaching agent (paper, textiles, hair), disinfectant and antiseptic, chemical synthesis (epoxidation, oxidation), environmental remediation, rocket propellant, laboratory reagent.",
            origin: "Anthraquinone process: hydrogenation of alkylanthraquinone, then oxidation with air giving H₂O₂. Electrolytic process (obsolete). World production: ~4 million tons annually (as 100% H₂O₂).",
            toxicity: "Low toxicity (oral LD50 rat: 1518 mg/kg for 35% solution). Corrosive at high concentrations. Decomposes releasing oxygen (embolism risk if ingested). Not carcinogenic. TLV-TWA: 1 ppm (1.4 mg/m³). Strong oxidizer.",
            flammability: "Not flammable but strong oxidizer - causes ignition of combustible materials. Decomposes exothermically releasing oxygen (pressure buildup, explosion risk).",
            reactivity: "Powerful oxidizer (E° = 1.78 V). Decomposes to water and oxygen (catalyzed by metals, enzymes, alkalinity). Bleaches via oxidation. Forms peracids with carboxylic acids. Reacts violently with many organic compounds.",
            acidity: "Weak acid (pKa = 11.6). Stronger than water. Forms hydroperoxide salts with strong bases.",
            biologicalEffect: "Disinfectant: oxidative damage to microbes. In tissues: decomposed by catalase to water and oxygen (foaming). Corrosive at high concentrations. Ingestion: gastric irritation, oxygen embolism. Treatment: dilute, do NOT induce vomiting, no activated charcoal.",
            usage: "Pulp and paper bleaching (60%), chemical synthesis (15%), textiles (10%), environmental (10%), other (5%). Market value ~$4 billion.",
            handlingPrecautions: "Wear chemical-resistant gloves (neoprene, nitrile), face shield, protective clothing. Use plastic containers (HDPE, PTFE). Avoid contamination with metals, alkali, organic materials. Store away from combustibles. Handle with care - decomposes violently.",
            storageConditions: "Store in vented containers in cool, dark, well-ventilated area. Use plastic or aluminum containers (stainless steel for high concentrations). Keep away from heat, light, contaminants. Temperature: <30°C for 30%, <20°C for 70%. Shelf life: 6-12 months with stabilizer.",
            firstAidMeasures: "INHALATION: Remove to fresh air. Administer oxygen if breathing difficult. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with water for 15 minutes. Seek medical attention for burns. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes, holding eyelids open. Seek IMMEDIATE medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Drink water or milk to dilute. Seek IMMEDIATE medical attention - risk of oxygen embolism.",
            disposalMethod: "Dilute to <1% with water, then flush to sewer. Large quantities: catalyze decomposition with manganese dioxide, then dispose. Never mix with organic materials, reducing agents. Small quantities can be decomposed with sodium sulfite."
        }
    },
    {
        id: 69,
        name: "Sodium Nitrite",
        formula: "NaNO₂",
        type: "salt",
        description: "Sodium nitrite is a white to slightly yellow crystalline solid that is hygroscopic and soluble in water. Industrial production is via absorption of nitrogen oxides in sodium carbonate or hydroxide solution. Primary applications include food preservative in cured meats (inhibits Clostridium botulinum, gives pink color), corrosion inhibitor, dye intermediate, and pharmaceutical (cyanide antidote, vasodilator). Safety concerns are significant: sodium nitrite is toxic, causing methemoglobinemia, and can form carcinogenic nitrosamines with amines. First aid for ingestion involves immediate medical attention and methylene blue for methemoglobinemia. Environmental impact includes contribution to eutrophication and potential formation of nitrosamines. Despite toxicity concerns, sodium nitrite remains essential for food safety in cured meat products.",
        details: {
            physicalState: "White to slightly yellow crystalline solid or powder. Odorless. Density: 2.17 g/cm³. Melting point: 271°C (decomposes). Soluble in water (820 g/L at 20°C), slightly soluble in ethanol.",
            composition: "Pure sodium nitrite ≥99%. Food grade has strict specifications. May contain trace nitrate, chloride, sulfate.",
            function: "Food preservative (cured meats), corrosion inhibitor, dye intermediate, pharmaceutical (cyanide antidote, vasodilator), laboratory reagent, heat transfer salt.",
            origin: "Absorption of nitrogen oxides (from ammonia oxidation) in sodium carbonate or hydroxide: NO + NO₂ + Na₂CO₃ → 2NaNO₂ + CO₂. World production: ~1 million tons annually.",
            toxicity: "Toxic (oral LD50 rat: 85 mg/kg). Causes methemoglobinemia. Forms nitrosamines (carcinogenic) with amines. Food additive restricted (120 ppm in cured meats). TLV-TWA: 0.5 ppm (1.5 mg/m³) as nitrite.",
            flammability: "Not flammable but strong oxidizer - may intensify fires. Decomposes at >320°C producing toxic nitrogen oxides.",
            reactivity: "Oxidizing agent. Reacts with acids producing nitrogen oxides. Forms nitrosamines with secondary amines. Reduces to nitric oxide. Corrosive to aluminum.",
            acidity: "Basic salt in solution (0.1 M pH ≈9). Due to hydrolysis: NO₂⁻ + H₂O ⇌ HNO₂ + OH⁻.",
            biologicalEffect: "Methemoglobinemia: oxidizes hemoglobin Fe²⁺ to Fe³⁺, reducing oxygen carrying capacity. Treatment: methylene blue. Forms nitrosamines (carcinogenic) in stomach with amines. Food use: inhibits botulism, gives cured meat color. Cyanide antidote: forms methemoglobin which binds cyanide.",
            usage: "Food preservation (70%), corrosion inhibition (15%), chemicals (10%), pharmaceuticals (5%). Market value ~$500 million.",
            handlingPrecautions: "Wear gloves, safety goggles, dust mask. Avoid contact with acids, amines. No eating, drinking, or smoking in area. Use local exhaust ventilation for powder. Store away from combustibles.",
            storageConditions: "Store in tightly closed containers in cool, dry, well-ventilated area. Protect from moisture. Store separately from acids, amines, reducing agents, combustible materials. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air. Administer oxygen. If cyanosis, suspect methemoglobinemia. Seek medical attention. SKIN CONTACT: Wash with soap and water. Seek medical attention if irritation. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Seek IMMEDIATE medical attention - methylene blue may be needed for methemoglobinemia.",
            disposalMethod: "Reduce with ammonium salts or urea in acid medium to nitrogen gas. Small quantities: dilute greatly and flush to sewer. Large quantities: chemical reduction then landfill. Never mix with acids (produces toxic NOx)."
        }
    },
    {
        id: 70,
        name: "Sodium Sulfite",
        formula: "Na₂SO₃",
        type: "salt",
        description: "Sodium sulfite is a white crystalline solid that is soluble in water. It exists as anhydrous or heptahydrate forms. Industrial production is via reaction of sulfur dioxide with sodium carbonate or hydroxide. Primary applications include food preservative (antioxidant, prevents browning), oxygen scavenger in water treatment, reducing agent in photography, pulp bleaching, and chemical synthesis. Safety concerns are low but include potential for allergic reactions in sulfite-sensitive individuals and decomposition to sulfur dioxide with acids. First aid involves irrigation and removal from exposure. Environmental impact is low as sulfite oxidizes to sulfate in environment. Sodium sulfite's reducing properties make it valuable for oxygen removal and as an antioxidant in various industries.",
        details: {
            physicalState: "White crystalline solid or powder. Odorless (but decomposes to SO₂ odor with acid). Density: 2.63 g/cm³. Soluble in water (220 g/L at 20°C), slightly soluble in ethanol.",
            composition: "Anhydrous Na₂SO₃ or heptahydrate Na₂SO₃·7H₂O. Technical grade ≥97%. Food grade has strict purity specifications.",
            function: "Food preservative (antioxidant, anti-browning), oxygen scavenger (water treatment, boiler water), reducing agent (photography, pulp bleaching), chemical synthesis, laboratory reagent.",
            origin: "Reaction of sulfur dioxide with sodium carbonate: SO₂ + Na₂CO₃ → Na₂SO₃ + CO₂. Or with sodium hydroxide: SO₂ + 2NaOH → Na₂SO₃ + H₂O. World production: ~1.5 million tons annually.",
            toxicity: "Low toxicity (oral LD50 rat: 820 mg/kg). Generally Recognized As Safe (GRAS) as food additive but some individuals sulfite-sensitive (asthma). Decomposes to SO₂ with acids (irritant). Not carcinogenic.",
            flammability: "Not flammable. Decomposes when heated producing toxic sulfur dioxide.",
            reactivity: "Reducing agent. Oxidizes to sulfate in air. Reacts with acids producing sulfur dioxide. Forms bisulfite with excess SO₂. Reacts with aldehydes, ketones forming bisulfite addition compounds.",
            acidity: "Basic salt in solution (0.1 M pH ≈9). Due to hydrolysis: SO₃²⁻ + H₂O ⇌ HSO₃⁻ + OH⁻.",
            biologicalEffect: "Antioxidant in foods: prevents enzymatic browning, rancidity. Sulfite-sensitive individuals: asthma, allergic reactions (1% of population). Metabolized to sulfate excreted in urine. Generally safe at food use levels.",
            usage: "Pulp and paper (40%), water treatment (25%), food industry (20%), photography and chemicals (15%). Market value ~$300 million.",
            handlingPrecautions: "Wear gloves, safety goggles, dust mask. Avoid contact with acids. Use in well-ventilated area. Normal laboratory precautions adequate. For food grade, maintain hygiene.",
            storageConditions: "Store in tightly closed containers in cool, dry place. Protect from air and moisture (oxidizes). Store separately from acids. Temperature should not exceed 30°C. Shelf life: 1 year.",
            firstAidMeasures: "INHALATION: Remove to fresh air. Usually no treatment needed. SKIN CONTACT: Wash with soap and water. Usually no treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Drink water. Usually no treatment needed.",
            disposalMethod: "Oxidize with hydrogen peroxide or hypochlorite to sulfate, then flush to sewer with plenty of water. Small quantities can be flushed directly. Biodegradable."
        }
    },
    {
        id: 71,
        name: "Sodium Bisulfite",
        formula: "NaHSO₃",
        type: "salt",
        description: "Sodium bisulfite is a white crystalline solid with a sulfur dioxide odor. It is actually a mixture of sodium bisulfite (NaHSO₃) and sodium metabisulfite (Na₂S₂O₅) in equilibrium. Industrial production is via reaction of sulfur dioxide with sodium carbonate or hydroxide with controlled pH. Applications are similar to sodium sulfite but with greater acidity: food preservative (especially in wines, fruit products), bleaching agent, reducing agent, dechlorination agent in water treatment, and chemical synthesis. Safety concerns include decomposition to sulfur dioxide with acid or heat, and potential for allergic reactions in sulfite-sensitive individuals. First aid involves irrigation and removal from exposure. Environmental impact is low. Sodium bisulfite's stronger reducing power at acidic pH makes it particularly useful in specific applications.",
        details: {
            physicalState: "White crystalline solid or powder. Sulfur dioxide odor. Actually exists as sodium metabisulfite (Na₂S₂O₅) which hydrolyzes to bisulfite. Density: 1.48 g/cm³. Soluble in water (300 g/L at 20°C).",
            composition: "Commercial 'sodium bisulfite' is usually sodium metabisulfite (Na₂S₂O₅). Contains 58-67% SO₂ equivalent. Food grade has strict specifications.",
            function: "Food preservative (wines, dried fruits, fruit juices), bleaching agent (textiles, paper), reducing agent, dechlorination agent (water treatment), chemical synthesis, laboratory reagent.",
            origin: "Reaction of sulfur dioxide with sodium carbonate at pH 4-5: 2SO₂ + Na₂CO₃ + H₂O → 2NaHSO₃ + CO₂. Or from sodium sulfite: Na₂SO₃ + SO₂ + H₂O → 2NaHSO₃.",
            toxicity: "Low toxicity (oral LD50 rat: 2000 mg/kg). Decomposes to SO₂ (irritant). Sulfite-sensitive individuals: asthma, allergic reactions. Generally Recognized As Safe (GRAS) as food additive. Not carcinogenic.",
            flammability: "Not flammable. Decomposes when heated producing toxic sulfur dioxide.",
            reactivity: "Reducing agent. Oxidizes to sulfate. Reacts with acids producing SO₂ gas. Decomposes in water: NaHSO₃ ⇌ Na⁺ + HSO₃⁻. Forms addition compounds with aldehydes, ketones.",
            acidity: "Acidic in solution (1% solution pH ≈4-5). Due to bisulfite ion: HSO₃⁻ ⇌ H⁺ + SO₃²⁻, pKa = 7.2.",
            biologicalEffect: "Preservative: antimicrobial, antioxidant. Sulfite-sensitive: bronchoconstriction, asthma. Used in emergency treatment of cyanide poisoning (forms thiocyanate). Generally safe at food use levels.",
            usage: "Food industry (50%), water treatment (20%), pulp and paper (15%), chemicals (10%), other (5%). Market value ~$200 million.",
            handlingPrecautions: "Wear gloves, safety goggles, dust mask. Avoid contact with acids. Use in well-ventilated area. For food grade, maintain hygiene. Sulfite-sensitive individuals should avoid handling.",
            storageConditions: "Store in tightly closed containers in cool, dry, well-ventilated area. Protect from moisture and air. Store separately from acids. Temperature should not exceed 25°C. Shelf life: 6 months.",
            firstAidMeasures: "INHALATION: Remove to fresh air. If breathing difficult (SO₂ exposure), administer oxygen. Seek medical attention if symptoms severe. SKIN CONTACT: Wash with soap and water. Usually no treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Drink water. Usually no treatment needed.",
            disposalMethod: "Oxidize with hydrogen peroxide or hypochlorite to sulfate, then flush to sewer with plenty of water. Small quantities can be flushed directly. Never mix with acids (produces SO₂)."
        }
    },
    {
        id: 72,
        name: "Sodium Borohydride",
        formula: "NaBH₄",
        type: "salt",
        description: "Sodium borohydride is a white crystalline solid that is an important reducing agent in organic chemistry and industry. It appears as hygroscopic crystals or powder and reacts with water and alcohols releasing hydrogen gas. Industrial production is via reaction of sodium hydride with trimethyl borate. Primary applications include reduction of aldehydes, ketones, and acid chlorides in organic synthesis; bleaching agent for wood pulp; hydrogen storage; and electroless plating. Safety concerns are significant: reacts violently with water and acids releasing flammable hydrogen gas, and dust is irritating. First aid involves avoiding water on fires (use dry chemical) and irrigation for exposure. Environmental impact includes boron toxicity to plants at high concentrations. Sodium borohydride's selective reducing power makes it invaluable in pharmaceutical and fine chemical synthesis.",
        details: {
            physicalState: "White to grayish crystalline powder. Odorless. Density: 1.07 g/cm³. Melting point: 400°C (decomposes). Soluble in water (550 g/L at 25°C with decomposition), soluble in amines, insoluble in ethers, hydrocarbons.",
            composition: "Pure sodium borohydride ≥98%. Often stabilized with sodium hydroxide. May contain trace borate, moisture.",
            function: "Reducing agent in organic synthesis (aldehydes, ketones, acid chlorides), bleaching agent (wood pulp), hydrogen source (fuel cells), electroless plating, laboratory reagent.",
            origin: "Schlesinger process: NaH + B(OCH₃)₃ → NaBH₄ + 3NaOCH₃. Bayer process: from borax. World production: ~5000 tons annually.",
            toxicity: "Moderate toxicity (oral LD50 rat: 160 mg/kg). Reacts with stomach acid producing hydrogen gas and boric acid. Dust irritant to respiratory tract. Not carcinogenic. TLV-TWA: none established.",
            flammability: "Not flammable but reacts with water, acids releasing flammable hydrogen gas. Dust may form explosive mixtures with air. Use dry chemical for fires - NO WATER.",
            reactivity: "Powerful reducing agent. Reacts with protic solvents (water, alcohols) releasing hydrogen: NaBH₄ + 4H₂O → NaB(OH)₄ + 4H₂. Reduces aldehydes, ketones to alcohols. Stable in alkaline aqueous solution. Decomposes when heated.",
            acidity: "Not acidic. Borohydride ion is reducing agent.",
            biologicalEffect: "Hydrolysis produces hydrogen gas (risk of gas embolism if ingested). Boron toxicity at high doses: gastrointestinal, CNS, renal effects. Treatment: supportive, monitor for hydrogen gas complications.",
            usage: "Organic synthesis (pharmaceuticals, fine chemicals - 70%), pulp bleaching (20%), other (10%). Market value ~$200 million.",
            handlingPrecautions: "Handle under dry inert atmosphere (argon, nitrogen). Wear gloves, safety goggles, face shield, flame-resistant lab coat. Use in fume hood. Avoid contact with water, acids, alcohols. Ground equipment. Have dry chemical fire extinguisher available.",
            storageConditions: "Store in tightly sealed containers under inert atmosphere in cool, dry place. Protect from moisture, air. Store separately from water, acids, oxidizers. Temperature should not exceed 25°C. Shelf life: 1 year if kept dry.",
            firstAidMeasures: "INHALATION: Remove to fresh air. If breathing difficult, administer oxygen. Seek medical attention. SKIN CONTACT: Brush off dry, then wash with plenty of water. Do NOT use wet cloth initially if large amount. Seek medical attention. EYE CONTACT: Brush out particles, then rinse thoroughly with water for 15 minutes. Seek medical attention. INGESTION: Do NOT induce vomiting (hydrogen gas risk). Rinse mouth with water. Seek IMMEDIATE medical attention - risk of hydrogen gas in gastrointestinal tract. FIRE: Use dry chemical, sand, or special extinguishing powder. NO WATER, CO₂, or foam.",
            disposalMethod: "Slowly add to large excess of cold water in fume hood (hydrogen evolution). Neutralize with acid, then treat boron with lime precipitation. Small quantities: dissolve in amine solvents, then slowly add to cold water. Never dispose in trash or down drain."
        }
    },
    {
        id: 73,
        name: "Chromium Trioxide",
        formula: "CrO₃",
        type: "salt",
        description: "Chromium trioxide, often called chromic acid, is a dark red crystalline solid that is deliquescent and highly soluble in water. It is a powerful oxidizing agent containing hexavalent chromium. Industrial production is via reaction of sodium dichromate with sulfuric acid. Applications include chromium electroplating, metal cleaning and etching, wood preservation, and organic synthesis oxidations. Safety concerns are extreme: chromium trioxide is highly corrosive, a confirmed human carcinogen (lung cancer), potent sensitizer, and environmental persistent. First aid involves immediate decontamination and medical evaluation. Environmental impact includes chromium's toxicity, persistence, and bioaccumulation potential. Strict regulations have severely restricted use, with alternatives being sought. Despite hazards, some applications continue under rigorous controls.",
        details: {
            physicalState: "Dark red to brown crystalline solid or flakes. Odorless. Density: 2.70 g/cm³. Melting point: 197°C (decomposes). Very soluble in water (1690 g/L), forming chromic acid solution.",
            composition: "Pure chromium trioxide ≥99%. Often contains trace sulfate, sodium. 'Chromic acid' solutions are CrO₃ in water.",
            function: "Chromium electroplating, metal cleaning and etching, wood preservation, oxidizing agent in organic synthesis, laboratory reagent, catalyst.",
            origin: "Reaction of sodium dichromate with sulfuric acid: Na₂Cr₂O₇ + 2H₂SO₄ → 2CrO₃ + 2NaHSO₄ + H₂O. World production: declining, <50,000 tons annually.",
            toxicity: "Extremely toxic and corrosive (oral LD50 rat: 80 mg/kg). Confirmed human carcinogen (IARC Group 1, lung cancer). Potent sensitizer (chromium allergy). Corrosive to all tissues. TLV-TWA: 0.05 mg/m³ (as CrO₃). Strong oxidizer.",
            flammability: "Not flammable but strong oxidizer - may cause ignition of combustible materials. Decomposes at >250°C producing oxygen.",
            reactivity: "Powerful oxidizing agent. Reacts violently with organic materials, alcohols (may ignite). Deliquescent - absorbs water from air forming chromic acid. Forms dichromate in acid: 2CrO₃ + H₂O ⇌ H₂Cr₂O₇. Corrosive to metals.",
            acidity: "Acidic when dissolved (chromic acid H₂CrO₄). pKa₁ = 0.74, pKa₂ = 6.49. Actually exists as dichromate in acid: Cr₂O₇²⁻ + H₂O ⇌ 2HCrO₄⁻.",
            biologicalEffect: "Corrosive burns. Hexavalent chromium enters cells, reduces to trivalent generating reactive oxygen species. Carcinogenic: lung cancer via inhalation. Sensitizer: allergic contact dermatitis, asthma. Systemic: kidney and liver damage. Treatment: decontamination, chelation possibly, supportive care.",
            usage: "Metal treatment and plating (70%), wood preservation (15%), chemicals (10%), other (5%). Rapidly declining due to regulations.",
            handlingPrecautions: "Use only in enclosed systems or fume hoods with appropriate filtration. Wear appropriate respirator (P100 with organic vapor cartridge), impermeable gloves (butyl rubber), chemical goggles, face shield, protective clothing. No skin contact. Use closed processes. Biological monitoring required.",
            storageConditions: "Store in tightly closed containers in cool, dry, well-ventilated, secure area with restricted access. Protect from moisture. Store separately from organic materials, reducing agents, combustible materials. Label as poison, corrosive, carcinogen, oxidizer.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen. Seek IMMEDIATE medical attention - inform of hexavalent chromium exposure. SKIN CONTACT: Remove contaminated clothing immediately. Wash thoroughly with soap and water for 20 minutes. Seek IMMEDIATE medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes, holding eyelids open. Seek IMMEDIATE medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Seek IMMEDIATE medical attention.",
            disposalMethod: "Must be reduced to chromium(III) before disposal. Treatment: reduce with sulfur dioxide, sodium bisulfite, or iron(II) sulfate at acidic pH until orange color disappears (green Cr³⁺). Neutralize to pH 8-9 with lime to precipitate chromium hydroxide. Filter and dispose sludge as hazardous waste. Never discharge hexavalent chromium. Professional hazardous waste services required."
        }
    },

    // G. GASES (74-79)
    {
        id: 74,
        name: "Hydrogen Gas",
        formula: "H₂",
        type: "gas",
        description: "Hydrogen is the lightest and most abundant element in the universe, existing as a colorless, odorless, tasteless diatomic gas. Industrial production methods include steam reforming of natural gas, electrolysis of water, and as byproduct from various chemical processes. Applications are diverse: chemical industry (ammonia production, methanol, hydrocracking), metallurgy (reducing agent), electronics (semiconductor processing), energy (fuel cells, rocket fuel), and food industry (hydrogenation of oils). Safety concerns are extreme: hydrogen is highly flammable with wide explosive limits, burns with invisible flame, and can cause embrittlement of metals. First aid involves removal from exposure and supportive care for asphyxiation. Environmental impact is minimal as hydrogen produces only water when burned, though production methods may have carbon footprint. Hydrogen's role in the emerging hydrogen economy ensures growing importance.",
        details: {
            physicalState: "Colorless, odorless, tasteless gas. Density: 0.0899 g/L (0°C, 1 atm) - lightest gas. Boiling point: -252.9°C. Melting point: -259.2°C. Slightly soluble in water (1.6 mg/L at 20°C).",
            composition: "Pure hydrogen ≥99.9%. Grades: ultra-high purity for electronics, commercial for industry. May contain trace CO, CO₂, O₂, moisture.",
            function: "Chemical feedstock (ammonia, methanol), reducing agent (metallurgy), fuel (fuel cells, rockets), hydrogenation of fats, electronics manufacturing, laboratory reagent.",
            origin: "Steam reforming: CH₄ + H₂O → CO + 3H₂. Water electrolysis: 2H₂O → 2H₂ + O₂. Partial oxidation, coal gasification. World production: ~70 million tons annually.",
            toxicity: "Non-toxic. Simple asphyxiant at high concentrations (displaces oxygen). Not carcinogenic, mutagenic. EXTREMELY FLAMMABLE.",
            flammability: "Extremely flammable gas (flammability limits: 4-75% in air). Autoignition temperature: 500°C. Minimum ignition energy: 0.02 mJ (very low). Burns with pale blue, nearly invisible flame. Detonates easily.",
            reactivity: "Reducing agent. Reacts with oxygen forming water (exothermic). Hydrogenates unsaturated compounds. Embrittles some metals (steels). Forms explosive mixtures with chlorine, fluorine.",
            acidity: "Not acidic. Can act as reducing agent.",
            biologicalEffect: "Non-toxic. Asphyxiant at high concentrations (>50% displaces oxygen). No metabolic effects. Hydrogen embrittlement not biological.",
            usage: "Ammonia production (50%), petroleum refining (37%), methanol production (8%), other (5%). Growing in energy applications. Market value ~$150 billion.",
            handlingPrecautions: "Use in well-ventilated area or with adequate ventilation. Eliminate all ignition sources. Ground all equipment. Use hydrogen-specific equipment (leak-proof). Detectors recommended. No smoking. Use explosion-proof equipment.",
            storageConditions: "Store in approved gas cylinders in well-ventilated, fire-resistant area away from oxidizers, heat, ignition sources. Cylinders upright, secured. Outdoor storage preferred. Temperature should not exceed 52°C. Shelf life: indefinite.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen if breathing difficult. If not breathing, give artificial respiration. Seek medical attention. SKIN/Eye: Not applicable (gas). INGESTION: Not applicable. FIRE: Stop flow if safe. Use water spray to cool containers. Evacuate area - explosion risk. Let fire burn if flow cannot be stopped.",
            disposalMethod: "Vent to atmosphere in well-ventilated outdoor area away from ignition sources. Flare if necessary. For small quantities in labs, allow to dissipate in fume hood. Never dispose in confined spaces."
        }
    },
    {
        id: 75,
        name: "Oxygen",
        formula: "O₂",
        type: "gas",
        description: "Oxygen is a colorless, odorless, tasteless diatomic gas that constitutes 21% of Earth's atmosphere and is essential for aerobic life. Industrial production methods include cryogenic distillation of air, pressure swing adsorption, and electrolysis of water. Applications are vast: medical (respiratory support), metallurgy (steelmaking, oxy-fuel welding/cutting), chemical industry (oxidation processes), water treatment, and life support systems. Safety concerns include strong oxidation enhancement (materials burn vigorously in oxygen-enriched atmospheres) and potential for oxygen toxicity at high partial pressures. First aid involves removal from exposure and supportive care. Environmental impact is minimal as oxygen is natural component of atmosphere. Oxygen's role in combustion and respiration makes it fundamental to both industry and biology.",
        details: {
            physicalState: "Colorless, odorless, tasteless gas. Density: 1.43 g/L (0°C, 1 atm). Boiling point: -183°C. Melting point: -218°C. Slightly soluble in water (40 mg/L at 20°C). Liquid oxygen is pale blue.",
            composition: "Medical grade ≥99.5% O₂, industrial grade ≥99.2%. May contain trace argon, nitrogen, moisture. Ultra-high purity for electronics.",
            function: "Medical respiratory support, steelmaking (basic oxygen furnace), oxy-fuel welding/cutting, chemical oxidations, water treatment, life support, combustion enhancement.",
            origin: "Cryogenic distillation of air (most common). Pressure swing adsorption (PSA). Electrolysis of water. World production: ~100 million tons annually.",
            toxicity: "Non-toxic at normal concentrations. Oxygen toxicity at high partial pressures (>0.5 bar for prolonged periods): CNS effects (convulsions), pulmonary damage. Not carcinogenic. Strong oxidizer - enhances combustion.",
            flammability: "Not flammable but strongly supports combustion. Materials burn vigorously in oxygen-enriched atmospheres. Liquid oxygen can cause explosions with organic materials.",
            reactivity: "Oxidizing agent. Supports combustion of most materials. Reacts with many elements forming oxides. Forms ozone with electrical discharge.",
            acidity: "Not acidic. Can accept electrons (oxidizing agent).",
            biologicalEffect: "Essential for aerobic respiration. Toxic at high pressures: CNS toxicity (convulsions), pulmonary toxicity (inflammation). Therapeutic: treatment of hypoxia, carbon monoxide poisoning. Retinopathy of prematurity risk in neonates.",
            usage: "Steelmaking (55%), chemical industry (25%), medical (10%), other (10%). Market value ~$30 billion.",
            handlingPrecautions: "Keep away from oils, greases, organic materials (explosion risk with liquid O₂). Use clean, oxygen-compatible equipment. No smoking in area. Ground equipment. Label clearly.",
            storageConditions: "Store gas cylinders in well-ventilated area away from combustibles, heat, ignition sources. Cylinders upright, secured. Liquid oxygen in vacuum-insulated containers. Temperature: gas <52°C, liquid <-183°C. Separate from flammable gases.",
            firstAidMeasures: "INHALATION (normal): No treatment needed. INHALATION (high concentration): Remove to normal air. If breathing difficult, administer air (not oxygen). Seek medical attention if symptoms. SKIN/Eye (liquid): Frostbite - thaw with lukewarm water, do not rub. Seek medical attention. INGESTION: Not applicable. FIRE: Stop flow if safe. Use water spray to cool containers. Materials burn vigorously in oxygen - may need to let burn out.",
            disposalMethod: "Vent to atmosphere. No environmental concerns. For small quantities in labs, allow to dissipate in fume hood."
        }
    },
    {
        id: 76,
        name: "Carbon Dioxide",
        formula: "CO₂",
        type: "gas",
        description: "Carbon dioxide is a colorless, odorless gas with a slightly pungent odor at high concentrations. It is a minor component of Earth's atmosphere (0.04%) but plays crucial roles in climate regulation, photosynthesis, and ocean chemistry. Industrial production sources include combustion, fermentation, lime kilns, and natural wells. Applications include carbonation of beverages, fire suppression, welding shield gas, refrigeration (dry ice), pH control in water treatment, and enhanced oil recovery. Safety concerns include asphyxiation in confined spaces (heavier than air, displaces oxygen) and potential for dry ice burns. First aid involves removal to fresh air and supportive care. Environmental impact includes role as greenhouse gas contributing to climate change. Carbon dioxide's unique properties ensure diverse industrial uses despite climate concerns.",
        details: {
            physicalState: "Colorless gas, slightly pungent odor at high concentrations. Density: 1.98 g/L (0°C, 1 atm) - heavier than air. Sublimation point: -78.5°C (dry ice). Soluble in water (1.45 g/L at 25°C).",
            composition: "Food grade ≥99.9% CO₂. Industrial grade ≥99.5%. May contain trace moisture, oxygen, nitrogen, hydrocarbons.",
            function: "Carbonation of beverages, fire suppression, welding shield gas, refrigeration (dry ice), pH control, enhanced oil recovery, inerting, laboratory reagent.",
            origin: "Combustion of fossil fuels, fermentation (ethanol production), lime kilns, natural gas wells, ammonia plant byproduct. World production: ~40 billion tons annually (mostly from combustion).",
            toxicity: "Non-toxic but simple asphyxiant at high concentrations (>10%). TLV-TWA: 5000 ppm (9000 mg/m³). STEL: 30,000 ppm. At 1-2%: increased breathing rate; 3-4%: headache, dizziness; >10%: unconsciousness, death.",
            flammability: "Non-flammable. Actually used in fire extinguishers. Supports combustion of some active metals (magnesium).",
            reactivity: "Acid anhydride: forms carbonic acid with water. Reacts with bases forming carbonates. Relatively inert. Reduced to CO or carbon with strong reducing agents.",
            acidity: "Forms weak acid in water: CO₂ + H₂O ⇌ H₂CO₃, pKa₁ = 6.35, pKa₂ = 10.33.",
            biologicalEffect: "Normal respiratory metabolite. Asphyxiant at high concentrations. Stimulates breathing at 1-2%. Narcotic at high pressures. Dry ice: frostbite. Treatment: fresh air, oxygen if needed.",
            usage: "Enhanced oil recovery (40%), food and beverages (20%), welding (15%), other (25%). Market value ~$2 billion for merchant CO₂.",
            handlingPrecautions: "Use in well-ventilated areas, especially below grade. CO₂ detectors recommended in confined spaces. For dry ice: wear insulated gloves, eye protection. No smoking in area with dry ice (oxygen displacement).",
            storageConditions: "Gas cylinders in well-ventilated area. Dry ice in insulated containers with venting (sublimation produces gas). Cylinders upright, secured. Temperature: cylinders <52°C, dry ice <-78°C. Separate from reactive metals.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen if breathing difficult. If not breathing, give artificial respiration. Seek medical attention. SKIN (dry ice): Frostbite - thaw with lukewarm water, do not rub. Seek medical attention. EYE (dry ice): Flush with water. Seek medical attention. INGESTION: Not applicable.",
            disposalMethod: "Vent to atmosphere. No environmental restrictions for small quantities. Large quantities from industrial sources: consider capture and utilization (CCU). Dry ice: allow to sublime in well-ventilated area."
        }
    },
    {
        id: 77,
        name: "Ammonia Gas",
        formula: "NH₃",
        type: "gas",
        description: "Ammonia is a colorless gas with a characteristic pungent, suffocating odor. It is produced industrially via the Haber-Bosch process from nitrogen and hydrogen. Ammonia is one of the most important industrial chemicals, primarily used as fertilizer (direct application or converted to urea, ammonium nitrate), but also in refrigeration, cleaning products, chemical synthesis, and wastewater treatment. Safety concerns are significant: ammonia is toxic, corrosive, and flammable. First aid involves immediate removal from exposure, irrigation for eye/skin contact, and medical evaluation. Environmental impact includes contribution to eutrophication and atmospheric particulate formation. Ammonia's role in global food production (as nitrogen fertilizer) makes it indispensable despite its hazards.",
        details: {
            physicalState: "Colorless gas with pungent, suffocating odor. Density: 0.77 g/L (lighter than air). Boiling point: -33.3°C. Melting point: -77.7°C. Very soluble in water (530 g/L at 20°C).",
            composition: "Anhydrous ammonia ≥99.5%. May contain trace water, oil. Agricultural grade may have additives.",
            function: "Fertilizer (direct application, urea production), refrigeration, cleaning products, chemical synthesis (nitric acid, amines), wastewater treatment, laboratory reagent.",
            origin: "Haber-Bosch process: N₂ + 3H₂ → 2NH₃ (iron catalyst, 150-300 atm, 400-500°C). World production: ~180 million tons annually.",
            toxicity: "Toxic and corrosive (TLV-TWA: 25 ppm, 17 mg/m³). Irritant to eyes, respiratory tract (can cause pulmonary edema). Flammable gas (flammability limits: 15-28%). Not carcinogenic.",
            flammability: "Flammable gas. Autoignition temperature: 651°C. Explosive limits in air: 15-28%. Burns with pale yellow-green flame.",
            reactivity: "Base: forms ammonium salts with acids. Complexes with metal ions. Reduces to nitrogen with oxidizers. Decomposes to nitrogen and hydrogen at high temperature.",
            acidity: "Weak base (pKb = 4.75). pKa of ammonium ion = 9.25. Forms ammonium hydroxide in water.",
            biologicalEffect: "Corrosive to mucous membranes. Inhalation: irritation, bronchospasm, pulmonary edema (may be delayed). Eye exposure: corneal damage. Skin: liquefaction necrosis, frostbite (liquid). Treatment: decontamination, supportive care, bronchodilators if needed.",
            usage: "Fertilizers (80%), chemical manufacturing (15%), refrigeration and other (5%). Market value ~$70 billion.",
            handlingPrecautions: "Use in fume hood or with adequate ventilation. Wear appropriate respirator (ammonia cartridge), chemical goggles, face shield, impermeable gloves, protective clothing. Have water available for decontamination. Use ammonia-compatible equipment (copper, brass not suitable).",
            storageConditions: "Store in approved gas cylinders or refrigerated tanks in well-ventilated area away from heat, ignition sources. Cylinders upright, secured. Separate from acids, halogens, oxidizers. Outdoor storage preferred. Temperature: cylinders <52°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen. Seek IMMEDIATE medical attention - watch for delayed pulmonary edema (up to 48 hours). SKIN CONTACT (liquid): Remove contaminated clothing. Flood with water for 30 minutes. Seek IMMEDIATE medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes, holding eyelids open. Seek IMMEDIATE medical attention. INGESTION: Not applicable (gas). FIRE: Stop flow if safe. Use water spray to cool containers. Use dry chemical, CO₂, alcohol-resistant foam.",
            disposalMethod: "Absorb in acid (sulfuric, hydrochloric) to form ammonium salt for use as fertilizer. Small quantities: dissolve in water, neutralize with acid, then flush to sewer with plenty of water. Never vent directly to atmosphere in populated areas."
        }
    },
    {
        id: 78,
        name: "Sulfur Dioxide",
        formula: "SO₂",
        type: "gas",
        description: "Sulfur dioxide is a colorless gas with a sharp, pungent, suffocating odor. It is produced naturally by volcanoes and industrially by burning sulfur or sulfide ores. Major applications include production of sulfuric acid (Contact process), bleaching (paper, flour), food preservative (dried fruits, wine), refrigeration, and water treatment. Safety concerns are significant: sulfur dioxide is toxic, corrosive, and an environmental pollutant causing acid rain. First aid involves immediate removal from exposure, oxygen administration, and medical evaluation. Environmental impact includes formation of acid rain, respiratory irritant in smog, and contribution to particulate pollution. Despite environmental concerns, sulfur dioxide remains essential for sulfuric acid production and some specialty applications.",
        details: {
            physicalState: "Colorless gas with sharp, pungent, suffocating odor. Density: 2.93 g/L (heavier than air). Boiling point: -10°C. Melting point: -75.5°C. Very soluble in water (112 g/L at 20°C).",
            composition: "Commercial grade ≥99.9%. May contain trace SO₃, moisture. Liquid SO₂ is available.",
            function: "Sulfuric acid production, bleaching (paper, flour), food preservative, refrigeration, water treatment, chemical synthesis, laboratory reagent.",
            origin: "Burning sulfur: S + O₂ → SO₂. Roasting sulfide ores: 2ZnS + 3O₂ → 2ZnO + 2SO₂. World production: ~200 million tons annually (mostly for H₂SO₄).",
            toxicity: "Toxic and corrosive (TLV-TWA: 2 ppm, 5 mg/m³). Irritant to eyes, respiratory tract (bronchoconstriction, pulmonary edema). Not carcinogenic. Environmental: acid rain precursor.",
            flammability: "Not flammable. Supports combustion of some metals (magnesium).",
            reactivity: "Acid anhydride: forms sulfurous acid with water. Oxidizes to SO₃ (sulfuric acid production). Reduces to sulfur with H₂S. Bleaches via reduction. Forms sulfites with bases.",
            acidity: "Forms weak acid in water: SO₂ + H₂O ⇌ H₂SO₃, pKa₁ = 1.81, pKa₂ = 6.91.",
            biologicalEffect: "Respiratory irritant: bronchoconstriction, especially in asthmatics (5-10x more sensitive). High concentrations: pulmonary edema. Eye and mucous membrane irritation. Treatment: fresh air, oxygen, bronchodilators, corticosteroids if severe.",
            usage: "Sulfuric acid production (90%), other (10%). Market for merchant SO₂ small. Declining due to environmental regulations.",
            handlingPrecautions: "Use in fume hood or with adequate ventilation. Wear appropriate respirator (acid gas cartridge), chemical goggles, face shield, impermeable gloves. Have water available for decontamination. Use corrosion-resistant equipment.",
            storageConditions: "Store in approved gas cylinders in well-ventilated area. Cylinders upright, secured. Separate from bases, oxidizers, metals. Outdoor storage preferred. Temperature: cylinders <52°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen. If breathing difficult, bronchodilators may be needed. Seek IMMEDIATE medical attention - watch for delayed pulmonary edema. SKIN CONTACT (liquid): Frostbite - thaw with lukewarm water. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes. Seek medical attention. INGESTION: Not applicable.",
            disposalMethod: "Absorb in alkaline solution (sodium hydroxide, carbonate) to form sulfite/bisulfite, then oxidize to sulfate with hydrogen peroxide. Small quantities: pass through alkaline solution then vent. Never vent directly to atmosphere. Consider conversion to sulfuric acid."
        }
    },
    {
        id: 79,
        name: "Chlorine Gas",
        formula: "Cl₂",
        type: "gas",
        description: "Chlorine is a greenish-yellow gas with a pungent, irritating odor. It is produced industrially by electrolysis of brine (chlor-alkali process). Chlorine is a fundamental chemical with applications in water disinfection, bleach production, PVC manufacturing (via ethylene dichloride), pharmaceuticals, and chemical synthesis. Safety concerns are extreme: chlorine is highly toxic, corrosive, and was used as a chemical warfare agent in World War I. First aid involves immediate removal from exposure, oxygen administration, and specific treatments for pulmonary edema. Environmental impact includes formation of toxic organochlorine compounds and persistence in some forms. Despite hazards, chlorine remains essential for water purification and polymer production, with stringent safety measures in place.",
        details: {
            physicalState: "Greenish-yellow gas with pungent, irritating odor. Density: 3.21 g/L (heavier than air). Boiling point: -34°C. Melting point: -101°C. Soluble in water (7.3 g/L at 20°C).",
            composition: "Commercial grade ≥99.5%. May contain trace bromine, water, CO₂. Liquid chlorine is available.",
            function: "Water disinfection, bleach production, PVC manufacturing (via EDC), pharmaceuticals, chemical synthesis, pulp bleaching, laboratory reagent.",
            origin: "Chlor-alkali process: electrolysis of NaCl solution → Cl₂ + NaOH + H₂. World production: ~75 million tons annually.",
            toxicity: "Highly toxic and corrosive (TLV-TWA: 0.5 ppm, 1.5 mg/m³). Respiratory irritant, causes pulmonary edema. Chemical warfare agent. Not carcinogenic. Environmental: forms toxic organochlorines.",
            flammability: "Not flammable but strong oxidizer - supports combustion of many materials. Reacts explosively with many organics, ammonia, hydrogen.",
            reactivity: "Strong oxidizing agent. Reacts with water forming hypochlorous acid and HCl. Forms chlorides with metals. Chlorinates organic compounds. Reacts with ammonia forming chloramines (explosive NCl₃ possible).",
            acidity: "Not acidic but hydrolyzes to acids: Cl₂ + H₂O ⇌ HOCl + HCl.",
            biologicalEffect: "Respiratory irritant: reacts with water in lungs forming HCl and HOCl causing chemical pneumonitis, pulmonary edema. Eye and skin irritation. Odor threshold: 0.2-0.4 ppm; irritation: 1-3 ppm; dangerous: >30 ppm; lethal: >1000 ppm. Treatment: fresh air, oxygen, consider nebulized sodium bicarbonate, corticosteroids for inflammation.",
            usage: "PVC production (35%), organic chemicals (30%), water treatment (15%), inorganic chemicals (10%), other (10%). Market value ~$20 billion.",
            handlingPrecautions: "Use in fume hood or enclosed system with scrubber. Wear appropriate respirator (chlorine cartridge), chemical goggles, face shield, impermeable gloves, protective clothing. Have emergency showers/eyewash. Chlorine detectors recommended. Use chlorine-compatible equipment (nickel, titanium, certain plastics).",
            storageConditions: "Store in approved gas cylinders in cool, dry, well-ventilated, secure area. Cylinders upright, secured. Separate from organics, ammonia, combustibles, metals. Outdoor storage with containment preferred. Temperature: cylinders <52°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen. If breathing difficult, consider nebulized sodium bicarbonate (2%). Seek IMMEDIATE medical attention - watch for delayed pulmonary edema (up to 48 hours). SKIN CONTACT (liquid): Frostbite - thaw with lukewarm water. Flood with water for chemical contamination. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes. Seek IMMEDIATE medical attention. INGESTION: Not applicable.",
            disposalMethod: "Absorb in alkaline solution (sodium hydroxide) to form hypochlorite, then reduce with bisulfite or decompose with time. Small quantities: pass through alkaline solution then vent. Never vent directly to atmosphere. Emergency: water spray can absorb chlorine."
        }
    },

    // H. SOLVENTS (80-86)
    {
        id: 80,
        name: "Distilled Water",
        formula: "H₂O",
        type: "solvent",
        description: "Distilled water is purified water that has been boiled into vapor and condensed back into liquid, removing impurities and minerals. It appears as a clear, colorless, odorless liquid. Distillation removes ions, microorganisms, and most organic compounds, making it suitable for laboratory applications, automotive batteries, medical devices, and pharmaceutical preparations. Safety concerns are minimal as water is essential for life, though aspiration of large quantities can cause water intoxication. First aid measures are generally not needed. Environmental impact is neutral as water is natural. Distilled water's purity makes it the universal solvent for chemical and biological applications where impurities would interfere.",
        details: {
            physicalState: "Clear colorless liquid. Odorless, tasteless. Density: 1.00 g/cm³ at 4°C. Boiling point: 100°C. Melting point: 0°C. Universal solvent.",
            composition: "H₂O with ≤5 ppm total dissolved solids. Conductivity: <5 μS/cm. May contain dissolved gases (CO₂, O₂). Types: single distilled, double distilled, deionized (often mixed).",
            function: "Laboratory reagent and solvent, automotive batteries, medical devices (irrigation, dilution), pharmaceutical preparations, humidifiers, steam irons, chemical processes.",
            origin: "Distillation of tap or deionized water: boiling, condensation, collection. Multi-effect distillation for large scale. Also reverse osmosis followed by distillation for higher purity.",
            toxicity: "Non-toxic. Essential for life. Water intoxication possible with extreme overconsumption (>10 L rapidly) causing hyponatremia. Not carcinogenic, mutagenic.",
            flammability: "Not flammable. Actually used to extinguish fires.",
            reactivity: "Universal solvent. Dissolves many ionic and polar compounds. Participates in hydrolysis reactions. Electrolyzes to hydrogen and oxygen. Forms hydrates.",
            acidity: "Neutral (pH 7.0) but absorbs CO₂ forming carbonic acid (pH ~5.5-6.5). Pure water has low conductivity.",
            biologicalEffect: "Essential for all known life forms. Maintains hydration, temperature regulation, metabolic processes. Overconsumption: hyponatremia (water intoxication) - rare. Dehydration from lack of water.",
            usage: "Laboratory and pharmaceutical (40%), automotive (25%), medical (15%), industrial processes (15%), other (5%). Market value ~$2 billion.",
            handlingPrecautions: "Normal laboratory precautions. Store in clean containers to maintain purity. For pharmaceutical use, maintain sterility if required. No special requirements.",
            storageConditions: "Store in tightly closed containers to prevent contamination and absorption of CO₂. Glass or plastic containers acceptable. Temperature: room temperature. Shelf life: indefinite if kept pure, but microbial growth possible if contaminated.",
            firstAidMeasures: "INHALATION: Not applicable. SKIN CONTACT: No treatment needed. EYE CONTACT: Rinse with water if contaminated water. Usually no treatment needed. INGESTION: No treatment needed unless massive overconsumption (water intoxication).",
            disposalMethod: "Pour down drain. No environmental concerns. Can be reused for non-critical applications. Consider collecting for plants, cleaning."
        }
    },
    {
        id: 81,
        name: "Ethyl Acetate",
        formula: "CH₃COOC₂H₅",
        type: "solvent",
        description: "Ethyl acetate is a colorless liquid with a characteristic sweet, fruity odor reminiscent of pineapple or pear. It is an ester produced by esterification of ethanol with acetic acid. Industrial applications include solvent for coatings, inks, adhesives, and nail polish remover; flavor and fragrance agent; extraction solvent in food and pharmaceutical industries; and chemical intermediate. Safety concerns include flammability, irritation, and central nervous system depression at high concentrations. First aid involves removal from exposure, supportive care, and irrigation. Environmental impact includes moderate biodegradability and low toxicity. Ethyl acetate's pleasant odor, good solvent properties, and relatively low toxicity make it a popular solvent in many applications.",
        details: {
            physicalState: "Clear colorless liquid. Sweet, fruity odor (pineapple, pear). Density: 0.902 g/cm³. Boiling point: 77.1°C. Melting point: -83.6°C. Slightly soluble in water (83 g/L), miscible with organic solvents.",
            composition: "Pure ethyl acetate ≥99.5%. May contain trace ethanol, acetic acid, water. Technical grade slightly less pure.",
            function: "Solvent (coatings, inks, adhesives, nail polish), flavor and fragrance agent, extraction solvent (food, pharmaceuticals), chemical intermediate, laboratory reagent.",
            origin: "Esterification: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (acid catalyst). Also from ethanol dehydrogenation to acetaldehyde then Tishchenko reaction. World production: ~3 million tons annually.",
            toxicity: "Low toxicity (oral LD50 rat: 5620 mg/kg). Irritant to eyes, respiratory tract. CNS depressant at high concentrations. Not carcinogenic. TLV-TWA: 400 ppm (1400 mg/m³). Flammable liquid.",
            flammability: "Flammable liquid (flash point: -4°C). Autoignition temperature: 427°C. Explosive limits in air: 2.0-11.5%. Vapors heavier than air.",
            reactivity: "Ester: hydrolyzes to ethanol and acetic acid (acid or base catalyzed). Transesterification with other alcohols. Relatively stable. Forms azeotropes.",
            acidity: "Not acidic. Ester carbonyl is electrophilic.",
            biologicalEffect: "Irritant to eyes, respiratory tract. CNS depression at high concentrations (dizziness, headache). Pleasant odor at low concentrations. Metabolized to ethanol and acetate (then normal metabolism). Generally low toxicity.",
            usage: "Coatings and inks (50%), pharmaceuticals and cosmetics (20%), food and flavor (15%), other (15%). Market value ~$4 billion.",
            handlingPrecautions: "Use in well-ventilated area away from ignition sources. Wear gloves, safety goggles. Ground containers. Store in flammable liquid cabinets. No smoking in area.",
            storageConditions: "Store in tightly closed containers in cool, well-ventilated area away from heat, sparks, flames. Use flammable liquid storage cabinet. Keep away from oxidizers, strong acids, bases. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air. If breathing difficult, administer oxygen. Seek medical attention if symptoms severe. SKIN CONTACT: Remove contaminated clothing. Wash with soap and water. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Seek medical attention if large amount ingested.",
            disposalMethod: "Small quantities: evaporate in fume hood or mix with combustible solvent for incineration. Large quantities: recover by distillation for reuse. Can be biodegraded in wastewater treatment. Never pour large quantities down drain (fire hazard)."
        }
    },
    {
        id: 82,
        name: "Toluene",
        formula: "C₆H₅CH₃",
        type: "solvent",
        description: "Toluene is a clear, colorless liquid with a sweet, pungent benzene-like odor. It is an aromatic hydrocarbon derived from petroleum or coal tar. Industrial applications include solvent for paints, coatings, adhesives, and inks; octane booster in gasoline; chemical feedstock for benzene, xylene, and toluene diisocyanate (TDI for polyurethanes); and in cosmetic nail products. Safety concerns include flammability, central nervous system depression (neurotoxicity), and potential developmental toxicity. First aid involves removal from exposure, supportive care, and never inducing vomiting due to aspiration risk. Environmental impact includes contribution to smog formation and moderate persistence. Toluene's excellent solvent properties ensure continued use despite health concerns.",
        details: {
            physicalState: "Clear colorless liquid. Sweet, pungent odor. Density: 0.867 g/cm³. Boiling point: 110.6°C. Melting point: -95°C. Very slightly soluble in water (0.52 g/L), miscible with organic solvents.",
            composition: "Pure toluene ≥99.5%. May contain trace benzene, xylene, sulfur compounds. Nitration grade has strict specifications.",
            function: "Solvent (paints, coatings, adhesives, inks), octane booster in gasoline, chemical feedstock (benzene, xylene, TDI), cosmetic nail products, laboratory reagent.",
            origin: "From petroleum refining (catalytic reforming of naphtha) or coal tar distillation. World production: ~30 million tons annually.",
            toxicity: "Moderate toxicity (oral LD50 rat: 636 mg/kg). CNS depressant: neurotoxicity with chronic exposure (hearing loss, cognitive effects). Developmental toxicity. Not classified as carcinogen (IARC Group 3). TLV-TWA: 50 ppm (188 mg/m³). Flammable liquid.",
            flammability: "Flammable liquid (flash point: 4°C). Autoignition temperature: 480°C. Explosive limits in air: 1.1-7.1%. Vapors heavier than air.",
            reactivity: "Aromatic: undergoes electrophilic substitution (ortho/para directing). Methyl group oxidizes to benzoic acid. Nitrates to TNT precursor. Sulfonates. Forms azeotropes.",
            acidity: "Not acidic. Methyl hydrogens somewhat acidic (pKa ≈41).",
            biologicalEffect: "CNS depression: dizziness, headache, euphoria, confusion, unconsciousness at high concentrations. Chronic: neurotoxicity (hearing loss, cognitive impairment), solvent encephalopathy. Developmental toxicity. Treatment: removal from exposure, supportive care.",
            usage: "Chemical manufacturing (benzene, xylene - 50%), solvents (35%), gasoline (10%), other (5%). Market value ~$20 billion.",
            handlingPrecautions: "Use in fume hood or with adequate ventilation. Wear appropriate respirator if handling significant quantities, gloves (nitrile, butyl), safety goggles. Ground containers. Store in flammable liquid cabinets. Monitor air concentrations in industrial settings.",
            storageConditions: "Store in tightly closed containers in cool, well-ventilated area away from heat, sparks, flames. Use flammable liquid storage cabinet. Keep away from oxidizers, strong acids, bases. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen if breathing difficult. Seek medical attention if symptoms severe. SKIN CONTACT: Remove contaminated clothing. Wash with soap and water. Seek medical attention if irritation develops. EYE CONTACT: Immediately flush eyes with gently flowing water for 15 minutes. Seek medical attention. INGESTION: Do NOT induce vomiting (aspiration risk). Rinse mouth with water. Seek medical attention.",
            disposalMethod: "Small quantities: evaporate in fume hood or mix with combustible solvent for incineration. Large quantities: recover by distillation for reuse. Hazardous waste disposal if contaminated. Never pour down drain (toxic to aquatic life)."
        }
    },
    {
        id: 83,
        name: "Petroleum Ether",
        formula: "Mixture of hydrocarbons",
        type: "solvent",
        description: "Petroleum ether is not an ether but a mixture of light aliphatic hydrocarbons, primarily pentanes and hexanes. It appears as a clear, colorless liquid with a petroleum-like odor. The mixture is obtained from petroleum distillation with boiling range typically 30-60°C or 60-80°C. Applications include extraction solvent for oils, fats, and non-polar compounds; cleaning solvent; and starting material for chemical synthesis. Safety concerns are significant: highly flammable, forms explosive peroxides, and causes neurotoxicity with chronic exposure. First aid involves removal from exposure, supportive care, and never using water on fires. Environmental impact includes contribution to smog formation and aquatic toxicity. Petroleum ether's excellent non-polar solvent properties make it valuable despite hazards.",
        details: {
            physicalState: "Clear colorless liquid. Petroleum-like odor. Density: 0.64-0.66 g/cm³ (30-60°C fraction). Boiling range: typically 30-60°C or 60-80°C. Very slightly soluble in water, miscible with organic solvents.",
            composition: "Mixture of C₅-C₇ aliphatic hydrocarbons: pentanes, hexanes, heptanes. May contain trace aromatics, olefins. Different boiling fractions available.",
            function: "Extraction solvent (oils, fats, non-polar compounds), cleaning solvent, chromatography eluent, chemical synthesis, laboratory reagent.",
            origin: "Distillation of petroleum light fractions. Specific boiling cuts collected. World production: part of light naphtha production.",
            toxicity: "Low to moderate acute toxicity (oral LD50 rat: >5000 mg/kg for hexane). Neurotoxicity with chronic exposure (n-hexane causes peripheral neuropathy). Flammable. Not carcinogenic. TLV-TWA: 500 ppm (1800 mg/m³) for n-hexane.",
            flammability: "Extremely flammable liquid (flash point: <-20°C). Autoignition temperature: ~250°C. Explosive limits in air: 1.1-7.5%. Vapors heavier than air. Forms explosive peroxides with air.",
            reactivity: "Relatively inert. Can form peroxides upon storage (dangerous). Reacts with strong oxidizers. Low chemical reactivity typical of alkanes.",
            acidity: "Not acidic. Aliphatic hydrocarbons inert.",
            biologicalEffect: "CNS depression at high concentrations. n-Hexane metabolite (2,5-hexanedione) causes peripheral neuropathy (stocking-glove distribution). Other isomers less toxic. Treatment: removal from exposure, supportive care for neuropathy.",
            usage: "Laboratory and extraction (60%), industrial cleaning (30%), other (10%). Market small but important for specific applications.",
            handlingPrecautions: "Use in fume hood away from ALL ignition sources. Wear gloves, safety goggles, flame-resistant lab coat. Ground all equipment. Test for peroxides before use or distillation. Store over sodium wire to prevent peroxides. Use smallest quantities possible.",
            storageConditions: "Store in tightly closed containers in explosion-proof refrigerator or flammable liquid storage cabinet. Must be tested regularly for peroxides. Store under nitrogen if possible. Keep away from light, heat, oxidizers. Temperature should not exceed 0°C recommended.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. If breathing difficult, administer oxygen. Seek medical attention if unconscious. SKIN CONTACT: Remove contaminated clothing. Wash with soap and water. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Do NOT induce vomiting (aspiration risk). Rinse mouth with water. Seek medical attention. FIRE: Use dry chemical, CO₂, foam. DO NOT USE WATER (floats, spreads fire).",
            disposalMethod: "Small quantities: evaporate in fume hood (check local regulations). Test for peroxides first - if peroxides present, treat with reducing agent before disposal. Large quantities: recover by distillation for reuse. Never pour down drain (fire hazard, toxic to aquatic life)."
        }
    },
    {
        id: 84,
        name: "Dimethylformamide (DMF)",
        formula: "HCON(CH₃)₂",
        type: "solvent",
        description: "Dimethylformamide is a clear, colorless liquid with a faint amine-like odor. It is an extremely polar aprotic solvent that is miscible with both water and organic solvents. Industrial production is via reaction of dimethylamine with carbon monoxide. Applications include solvent for polyacrylonitrile (acrylic fibers), polyurethane, and pharmaceutical synthesis; reaction medium; and chemical intermediate. Safety concerns are significant: DMF is toxic to liver, penetrates skin readily, and is a suspected reproductive toxin. First aid involves immediate decontamination and medical evaluation. Environmental impact includes moderate biodegradability but potential aquatic toxicity. DMF's unique solvent properties make it indispensable for certain chemical processes despite toxicity.",
        details: {
            physicalState: "Clear colorless liquid. Faint amine-like odor. Density: 0.944 g/cm³. Boiling point: 153°C. Melting point: -61°C. Miscible with water and most organic solvents.",
            composition: "Pure DMF ≥99.8%. May contain trace dimethylamine, formic acid, water. Anhydrous grade available.",
            function: "Solvent for acrylic fibers, polyurethane, pharmaceuticals; reaction medium for many organic reactions; chemical intermediate; laboratory reagent.",
            origin: "Reaction of dimethylamine with carbon monoxide: (CH₃)₂NH + CO → HCON(CH₃)₂. World production: ~500,000 tons annually.",
            toxicity: "Toxic (oral LD50 rat: 2800 mg/kg). Hepatotoxic. Penetrates skin readily. Suspected reproductive toxin. Not classified as carcinogen (IARC Group 2A). TLV-TWA: 10 ppm (30 mg/m³).",
            flammability: "Combustible liquid (flash point: 58°C). Autoignition temperature: 445°C. Not highly flammable but will burn.",
            reactivity: "Polar aprotic solvent. Stable under normal conditions. Hydrolyzes with acids or bases to dimethylamine and formic acid. Forms complexes with many compounds.",
            acidity: "Not acidic. Amide nitrogen is weakly basic.",
            biologicalEffect: "Hepatotoxic: causes liver damage with repeated exposure. Skin penetration significant. May cause abdominal pain, nausea ('DMF flush' with alcohol). Suspected reproductive effects. Treatment: removal from exposure, supportive care, monitor liver function.",
            usage: "Acrylic fiber production (50%), polyurethane (30%), pharmaceuticals and chemicals (20%). Market value ~$1 billion.",
            handlingPrecautions: "Use in fume hood. Wear impermeable gloves (butyl rubber, nitrile), safety goggles, lab coat. Avoid skin contact. Use local exhaust ventilation. Monitor air concentrations in industrial settings.",
            storageConditions: "Store in tightly closed containers in cool, well-ventilated area. Protect from moisture. Store away from strong acids, bases, oxidizers. Temperature should not exceed 30°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. Administer oxygen if breathing difficult. Seek medical attention. SKIN CONTACT: Remove contaminated clothing immediately. Wash thoroughly with soap and water for 15 minutes. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 15 minutes. Seek medical attention. INGESTION: Rinse mouth with water. Do NOT induce vomiting. Seek medical attention - monitor liver function.",
            disposalMethod: "Small quantities: mix with combustible solvent for incineration. Large quantities: recover by distillation for reuse. Can be biodegraded in wastewater treatment but slowly. Never discharge large quantities to sewer."
        }
    },
    {
        id: 85,
        name: "Hexane",
        formula: "C₆H₁₄",
        type: "solvent",
        description: "Hexane is a mixture of isomers of C₆H₁₄, primarily n-hexane, appearing as a clear, colorless liquid with a mild gasoline-like odor. It is obtained from petroleum distillation. Industrial applications include extraction solvent for vegetable oils, cleaning agent, adhesive formulation, and laboratory solvent. Safety concerns are significant: n-hexane causes peripheral neuropathy (2,5-hexanedione metabolite), and all isomers are highly flammable. First aid involves removal from exposure and supportive care for neurological symptoms. Environmental impact includes contribution to smog formation and aquatic toxicity. While n-hexane use has declined due to neurotoxicity, other hexane isomers and mixtures continue in use with precautions.",
        details: {
            physicalState: "Clear colorless liquid. Mild gasoline-like odor. Density: 0.659 g/cm³ (n-hexane). Boiling point: 69°C (n-hexane). Melting point: -95°C. Very slightly soluble in water (9.5 mg/L), miscible with organic solvents.",
            composition: "Commercial hexane: mixture of hexane isomers (n-hexane, methylpentanes, dimethylbutanes). May contain trace benzene, other hydrocarbons. n-Hexane content varies.",
            function: "Extraction solvent (vegetable oils), cleaning agent, adhesive formulation, polymerization medium, laboratory solvent, chromatography.",
            origin: "Distillation of petroleum light fractions. Specific cuts enriched in C₆ isomers. World production: part of light naphtha production.",
            toxicity: "Low acute toxicity (oral LD50 rat: 25 g/kg for n-hexane). n-Hexane: neurotoxic (peripheral neuropathy from 2,5-hexanedione metabolite). Other isomers less toxic. Flammable. Not carcinogenic. TLV-TWA: 50 ppm (180 mg/m³) for n-hexane.",
            flammability: "Highly flammable liquid (flash point: -23°C). Autoignition temperature: 225°C. Explosive limits in air: 1.1-7.5%. Vapors heavier than air.",
            reactivity: "Relatively inert alkane. Reacts with strong oxidizers. Photochlorination. Low chemical reactivity.",
            acidity: "Not acidic. Alkane hydrogens very non-acidic.",
            biologicalEffect: "n-Hexane: metabolized to 2,5-hexanedione causing peripheral neuropathy (stocking-glove distribution, muscle weakness). Other isomers: CNS depression. Treatment: removal from exposure, supportive care, physical therapy for neuropathy.",
            usage: "Oil extraction (50%), adhesives (30%), cleaning and other (20%). n-Hexane use declining due to neurotoxicity.",
            handlingPrecautions: "Use in fume hood or with adequate ventilation. Wear gloves, safety goggles. Ground containers. Store in flammable liquid cabinets. Use n-hexane-free grades where possible. Monitor air concentrations.",
            storageConditions: "Store in tightly closed containers in cool, well-ventilated area away from heat, sparks, flames. Use flammable liquid storage cabinet. Keep away from oxidizers. Temperature should not exceed 25°C.",
            firstAidMeasures: "INHALATION: Remove to fresh air immediately. If breathing difficult, administer oxygen. Seek medical attention if symptoms severe. SKIN CONTACT: Remove contaminated clothing. Wash with soap and water. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Do NOT induce vomiting.
          {
    "id": 87,
    "name": "Oxalic Acid",
    "formula": "C₂H₂O₄",
    "type": "acid",
    "description": "Oxalic acid is a colorless crystalline solid that is the simplest dicarboxylic acid. It occurs naturally in many plants, particularly rhubarb leaves and sorrel. Industrial production is via oxidation of carbohydrates with nitric acid or from sodium formate. Applications include rust removal, bleaching, wood restoration, rare earth extraction, and cleaning agent. Safety concerns are significant: oxalic acid is corrosive, toxic (causes hypocalcemia and kidney damage), and forms insoluble calcium oxalate crystals in kidneys. First aid involves immediate decontamination and medical evaluation for significant exposures. Environmental impact includes contribution to kidney stone formation in animals and water quality issues.",
    "details": {
        "physicalState": "Colorless crystalline solid. Odorless. Density: 1.90 g/cm³ (dihydrate). Melting point: 189°C (anhydrous). Soluble in water (90 g/L at 20°C), ethanol, glycerol.",
        "composition": "Dihydrate: C₂H₂O₄·2H₂O or anhydrous. Purity: ≥99%. May contain trace sulfate, heavy metals.",
        "function": "Rust removal, bleaching (wood, straw), rare earth extraction, cleaning agent, wood restoration, laboratory reagent, formerly ink and dye removal.",
        "origin": "Oxidation of carbohydrates (sucrose, glucose) with nitric acid. From sodium formate: 2HCOONa → NaOOC-COONa + H₂ → (COOH)₂. Natural extraction from plants.",
        "toxicity": "Toxic and corrosive (oral LD50 rat: 7500 mg/kg but human toxicity higher). Causes hypocalcemia by precipitating calcium as calcium oxalate. Kidney damage (nephrotoxic). Not carcinogenic. TLV-TWA: 1 mg/m³.",
        "flammability": "Not flammable. Decomposes when heated producing toxic fumes (formic acid, carbon monoxide).",
        "reactivity": "Dicarboxylic acid: strong for organic acid (pKa₁ = 1.25, pKa₂ = 4.14). Reduces to glycolic acid. Decarboxylates to formic acid + CO₂. Forms insoluble salts with calcium, iron, other metals.",
        "acidity": "Relatively strong organic acid (pKa₁ = 1.25). Stronger than acetic acid. Completely dissociates in water.",
        "biologicalEffect": "Hypocalcemia: binds serum calcium causing muscle cramps, cardiac arrhythmias. Nephrotoxic: calcium oxalate crystals in kidneys causing renal failure. Treatment: intravenous calcium gluconate, hemodialysis. Found in some foods (spinach, rhubarb).",
        "usage": "Cleaning and rust removal (40%), rare earth processing (30%), textiles and bleaching (20%), other (10%). Market value ~$200 million.",
        "handlingPrecautions": "Wear gloves, safety goggles, dust mask, protective clothing. Avoid dust generation. Use in well-ventilated area. No eating, drinking, or smoking in area. Wash hands after handling.",
        "storageConditions": "Store in tightly closed containers in cool, dry place. Protect from moisture. Store separately from bases, oxidizers. Temperature should not exceed 30°C. Shelf life: 3 years.",
        "firstAidMeasures": "INHALATION: Remove to fresh air. Seek medical attention if symptoms. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water for 15 minutes. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes. Seek IMMEDIATE medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Drink milk or water. Seek IMMEDIATE medical attention - monitor calcium levels, kidney function.",
        "disposalMethod": "Neutralize with sodium carbonate or lime to pH 7, then flush to sewer with plenty of water. Precipitates calcium - avoid in hard water systems. Large quantities: recover oxalate for industrial use."
    }
}
        {
    "id": 88,
    "name": "Tartaric Acid",
    "formula": "C₄H₆O₆",
    "type": "acid",
    "description": "Tartaric acid is a white crystalline organic acid that occurs naturally in many fruits, particularly grapes, bananas, and tamarinds. It exists as dextro- and levo-rotatory enantiomers, with the meso form also known. Industrial production is primarily as a byproduct of wine making (cream of tartar). Applications include food acidulant (E334), antioxidant in foods, effervescent products, baking powder, and chelating agent. Safety profile is excellent as it is a natural food component. First aid measures are minimal. Environmental impact is benign as tartaric acid is readily biodegradable. Its unique chiral properties also make it valuable in asymmetric synthesis.",
    "details": {
        "physicalState": "White crystalline powder. Odorless, sour taste. Density: 1.79 g/cm³. Melting point: 171-174°C. Soluble in water (1330 g/L at 20°C), ethanol, glycerol.",
        "composition": "L-(+)-tartaric acid most common. Racemic mixture (DL) also available. Purity: ≥99.5% for food grade. May contain trace cream of tartar, other organic acids.",
        "function": "Food acidulant (E334), antioxidant, effervescent products, baking powder, chelating agent, chiral resolving agent, laboratory reagent, mirror silvering.",
        "origin": "Extraction from wine-making byproducts (argol, lees). Synthesis from maleic anhydride (epoxidation, hydrolysis). World production: ~50,000 tons annually.",
        "toxicity": "Very low toxicity (oral LD50 rat: 7500 mg/kg). Generally Recognized As Safe (GRAS) as food additive. Not carcinogenic, mutagenic. May cause mild irritation at high concentrations.",
        "flammability": "Not flammable. Decomposes when heated producing acrid smoke.",
        "reactivity": "Dicarboxylic acid (pKa₁ = 2.98, pKa₂ = 4.34). Forms tartrate complexes with many metals (Fehling's solution). Resolves enantiomers via diastereomeric salt formation. Reduces to succinic acid.",
        "acidity": "Moderately strong organic acid. Stronger than citric acid. Completely dissociates in water.",
        "biologicalEffect": "Natural metabolite in plants. Antioxidant properties. Slight diuretic effect. Forms soluble complexes with minerals enhancing absorption. Generally safe at food use levels.",
        "usage": "Food and beverages (80%), pharmaceuticals (10%), industrial (5%), other (5%). Market value ~$150 million.",
        "handlingPrecautions": "Normal laboratory precautions. Wear dust mask if handling powder. For food grade, maintain hygiene. No special requirements.",
        "storageConditions": "Store in tightly closed containers in cool, dry place. Protect from moisture. No special segregation needed. Temperature should not exceed 30°C. Shelf life: 3 years.",
        "firstAidMeasures": "INHALATION: No treatment needed. SKIN CONTACT: Wash with soap and water. No treatment needed. EYE CONTACT: Rinse with water. No treatment needed. INGESTION: No treatment needed (it's food additive).",
        "disposalMethod": "Can be disposed with regular waste or flushed to sewer. Biodegradable. Compostable. No environmental concerns."
    }
}
        {
    "id": 89,
    "name": "Boric Acid",
    "formula": "H₃BO₃",
    "type": "acid",
    "description": "Boric acid is a white crystalline solid or powder that is a weak acid of boron. It occurs naturally in mineral sassolite. Industrial production is via reaction of borax with mineral acid. Applications include insecticide (cockroach control), antiseptic (eye washes), flame retardant, neutron absorber in nuclear reactors, buffer solutions, and glass/ceramic manufacturing. Safety concerns include toxicity with ingestion (especially to children), potential developmental toxicity, and environmental persistence of boron. First aid involves irrigation and medical evaluation for significant ingestion. Environmental impact includes boron toxicity to plants at elevated concentrations.",
    "details": {
        "physicalState": "White crystalline solid or powder. Odorless. Density: 1.44 g/cm³. Melting point: 170.9°C (decomposes). Soluble in water (47 g/L at 20°C), glycerol, alcohols.",
        "composition": "Pure boric acid ≥99.5%. May contain trace sulfate, chloride, heavy metals. USP grade for pharmaceuticals.",
        "function": "Insecticide (ant, cockroach control), antiseptic (eye washes), flame retardant, neutron absorber (nuclear reactors), buffer solutions, glass/ceramics, laboratory reagent.",
        "origin": "Reaction of borax with hydrochloric or sulfuric acid: Na₂B₄O₇·10H₂O + 2HCl → 4H₃BO₃ + 2NaCl + 5H₂O. From colemanite mineral. World production: ~1 million tons annually.",
        "toxicity": "Moderate toxicity (oral LD50 rat: 2660 mg/kg). Developmental toxicity in animals. Not carcinogenic. Chronic exposure: borism (dry skin, rash, gastrointestinal effects). TLV-TWA: 2 mg/m³.",
        "flammability": "Not flammable. Actually used as flame retardant.",
        "reactivity": "Weak acid (pKa = 9.24). Acts as Lewis acid accepting OH⁻. Forms esters with alcohols. Dehydrates to metaboric acid then boron trioxide. Complexes with polyols (mannitol, glycerol).",
        "acidity": "Very weak acid (pKa = 9.24). Acts as Lewis acid rather than proton donor: B(OH)₃ + H₂O ⇌ B(OH)₄⁻ + H⁺.",
        "biologicalEffect": "Antiseptic: inhibits bacterial and fungal growth. Insecticide: abrasive to exoskeleton, metabolic poison. Systemic toxicity: nausea, vomiting, diarrhea, rash, CNS effects, renal damage. Treatment: supportive care, hemodialysis for severe poisoning.",
        "usage": "Glass and ceramics (50%), flame retardants (20%), insecticides (15%), nuclear applications (10%), other (5%). Market value ~$500 million.",
        "handlingPrecautions": "Wear gloves, safety goggles, dust mask. Avoid inhalation of dust. Use in well-ventilated area. Keep away from children. For pesticide use, follow label instructions.",
        "storageConditions": "Store in tightly closed containers in cool, dry place. Protect from moisture. Store separately from strong bases. Temperature should not exceed 30°C. Shelf life: 3 years.",
        "firstAidMeasures": "INHALATION: Remove to fresh air. Seek medical attention if symptoms. SKIN CONTACT: Wash with soap and water. Usually no treatment needed. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Drink water. Seek medical attention if large amount ingested.",
        "disposalMethod": "Small quantities: dissolve in water and flush to sewer. Large quantities: landfill disposal. For pesticide formulations, follow local regulations. Boron can be toxic to plants at high concentrations."
    }
}
        {
    "id": 90,
    "name": "Calcium Hydroxide (Lime Water)",
    "formula": "Ca(OH)₂",
    "type": "base",
    "description": "Calcium hydroxide is a white powder or crystalline solid that is sparingly soluble in water. Its saturated aqueous solution is called limewater. Industrial production is via hydration of quicklime (calcium oxide). Applications include construction (mortar, plaster), water treatment (pH adjustment, softening), food industry (nixtamalization of corn, pickling), sewage treatment, and chemical manufacturing. Safety concerns include corrosiveness (alkali) and irritation. First aid involves thorough irrigation and medical evaluation for significant exposures. Environmental impact includes raising pH of water bodies but otherwise low toxicity. Calcium hydroxide has been used since ancient times and remains important in multiple industries.",
    "details": {
        "physicalState": "White powder or crystalline solid. Odorless. Density: 2.21 g/cm³. Decomposes at 580°C. Slightly soluble in water (1.73 g/L at 20°C). Limewater: clear colorless solution.",
        "composition": "Pure calcium hydroxide ≥95%. May contain trace magnesium hydroxide, carbonate, silica. Food grade (pickling lime) has strict specifications.",
        "function": "Construction (mortar, plaster), water treatment (pH adjustment, softening), food industry (nixtamalization, pickling), sewage treatment, chemical manufacturing, laboratory reagent.",
        "origin": "Hydration of calcium oxide (quicklime): CaO + H₂O → Ca(OH)₂. From limestone: CaCO₃ → CaO → Ca(OH)₂. World production: ~100 million tons annually.",
        "toxicity": "Corrosive alkali. Irritant to eyes, skin, respiratory tract. Not carcinogenic. TLV-TWA: 5 mg/m³.",
        "flammability": "Not flammable.",
        "reactivity": "Strong base. Reacts with acids forming salts. Absorbs CO₂ from air forming calcium carbonate. Forms complexes. Exothermic reaction with water.",
        "acidity": "Strong base (pH of saturated solution ~12.4). Provides OH⁻ ions.",
        "biologicalEffect": "Corrosive: chemical burns to skin, eyes, respiratory tract. Ingested: tissue damage, metabolic alkalosis. Treatment: dilution with water or milk (if ingested), irrigation. Food use: makes niacin in corn bioavailable (prevents pellagra).",
        "usage": "Construction (60%), water and wastewater treatment (25%), chemical industry (10%), other (5%). Market value ~$5 billion.",
        "handlingPrecautions": "Wear gloves, safety goggles, dust mask. Avoid dust generation. Use in well-ventilated area. For construction, wear protective clothing. Keep dry (reacts with water exothermically).",
        "storageConditions": "Store in tightly closed containers in cool, dry place. Protect from moisture and CO₂. Store separately from acids. Temperature should not exceed 30°C. Shelf life: 1 year if kept dry.",
        "firstAidMeasures": "INHALATION: Remove to fresh air. If breathing difficult, administer oxygen. Seek medical attention if symptoms. SKIN CONTACT: Remove contaminated clothing. Brush off dry powder, then wash thoroughly with water for 15 minutes. Seek medical attention for burns. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes. Seek IMMEDIATE medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Drink water or milk to dilute. Seek medical attention.",
        "disposalMethod": "Neutralize with dilute acid (vinegar, hydrochloric acid) to pH 7, then flush to sewer. Large quantities: use for construction or water treatment. Landfill acceptable. Bioremediation of acidic soils."
    }
}
   {
    "id": 91,
    "name": "Sodium Bicarbonate (Baking Soda)",
    "formula": "NaHCO₃",
    "type": "base",
    "description": "Sodium bicarbonate is a white crystalline powder that is a mild alkali. It occurs naturally as nahcolite mineral but is produced industrially via Solvay process. Applications are extremely diverse: baking (leavening agent), antacid, fire extinguisher, cleaning agent, odor neutralizer, personal hygiene, and chemical intermediate. Safety profile is excellent as it is a common food and household product. First aid measures are minimal. Environmental impact is benign as bicarbonate is natural component of water systems. Sodium bicarbonate's versatility, low cost, and safety make it one of the most widely used chemicals in household and industry.",
    "details": {
        "physicalState": "White crystalline powder. Odorless. Density: 2.20 g/cm³. Decomposes at 50°C releasing CO₂. Soluble in water (96 g/L at 20°C), insoluble in ethanol.",
        "composition": "Pure sodium bicarbonate ≥99%. Food grade (baking soda) has strict specifications. May contain trace carbonate, chloride, moisture.",
        "function": "Baking (leavening agent), antacid, fire extinguisher, cleaning agent, odor neutralizer, personal hygiene, chemical buffer, laboratory reagent.",
        "origin": "Solvay process: NH₃ + CO₂ + NaCl + H₂O → NaHCO₃ + NH₄Cl. From trona ore. World production: ~2 million tons annually.",
        "toxicity": "Very low toxicity (oral LD50 rat: 4220 mg/kg). Generally Recognized As Safe (GRAS) as food additive. Excessive ingestion: metabolic alkalosis, electrolyte imbalance. Not carcinogenic.",
        "flammability": "Not flammable. Decomposes when heated releasing CO₂ (used in fire extinguishers).",
        "reactivity": "Weak base (pH 8.3 in 0.1 M solution). Decomposes to sodium carbonate, water, and CO₂ at >50°C. Reacts with acids producing CO₂ gas. Buffer system with carbonic acid.",
        "acidity": "Amphoteric: acts as weak base (HCO₃⁻ + H⁺ ⇌ H₂CO₃) and weak acid (HCO₃⁻ ⇌ CO₃²⁻ + H⁺). pKa = 6.35 (carbonic acid), 10.33 (bicarbonate).",
        "biologicalEffect": "Antacid: neutralizes stomach acid. Systemic: alkalinizes urine, treats metabolic acidosis. Excessive intake: metabolic alkalosis, hypokalemia, fluid retention. Topical: mild abrasive, deodorant.",
        "usage": "Food and pharmaceuticals (40%), chemicals (25%), fire extinguishers (15%), cleaning products (15%), other (5%). Market value ~$2 billion.",
        "handlingPrecautions": "Normal laboratory precautions. Wear dust mask if handling large quantities of powder. For food grade, maintain hygiene. No special requirements.",
        "storageConditions": "Store in tightly closed containers in cool, dry place. Protect from moisture and acids. No special segregation needed. Temperature should not exceed 30°C. Shelf life: 2 years.",
        "firstAidMeasures": "INHALATION: No treatment needed. SKIN CONTACT: Wash with soap and water. No treatment needed. EYE CONTACT: Rinse with water. No treatment needed. INGESTION: No treatment needed unless massive overdose.",
        "disposalMethod": "Can be disposed with regular waste or flushed to sewer. Biodegradable. Neutralizes acids. Compostable. No environmental concerns."
    }
}
        {
    "id": 92,
    "name": "Ammonium Hydroxide",
    "formula": "NH₄OH",
    "type": "base",
    "description": "Ammonium hydroxide is a solution of ammonia gas in water, appearing as a clear colorless liquid with a characteristic pungent odor. Industrial production is simply by dissolving ammonia gas in water. Applications include cleaning agent, pH adjustment, fertilizer, food additive (alkalizer), laboratory reagent, and in various chemical processes. Safety concerns include corrosiveness, toxicity of ammonia fumes, and potential for explosive reactions with certain metals. First aid involves immediate irrigation and removal from exposure. Environmental impact includes contribution to eutrophication but otherwise low persistence. Despite its hazards, ammonium hydroxide remains important due to its strong alkaline properties and ammonia content.",
    "details": {
        "physicalState": "Clear colorless liquid. Pungent ammonia odor. Density: 0.91 g/cm³ (28% solution). Concentrations: typically 5-35% NH₃ by weight. Miscible with water.",
        "composition": "Aqueous ammonia: NH₃ dissolved in water forming NH₄⁺ and OH⁻. Concentrations: household (5-10%), commercial (28%), technical (35%). May contain trace carbonates.",
        "function": "Cleaning agent, pH adjustment, fertilizer, food additive (alkalizer), laboratory reagent, chemical synthesis, water treatment, textile processing.",
        "origin": "Dissolving ammonia gas in water: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. Produced at same plants as anhydrous ammonia. World production: ~20 million tons annually (as 100% NH₃ equivalent).",
        "toxicity": "Corrosive alkali. Ammonia fumes toxic (TLV-TWA: 25 ppm). Irritant to eyes, respiratory tract. Not carcinogenic. Flammable (ammonia vapor).",
        "flammability": "Not flammable but ammonia vapor is flammable (flash point: depends on concentration).",
        "reactivity": "Strong base. Reacts with acids forming ammonium salts. Complexes with metal ions. Reacts with hypochlorite forming chloramines. Attacks copper, zinc, aluminum.",
        "acidity": "Strong base (pH ~11.6 for 1 M solution). Due to ammonia: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, Kb = 1.8×10⁻⁵.",
        "biologicalEffect": "Corrosive: chemical burns to skin, eyes, respiratory tract. Ammonia inhalation: bronchospasm, pulmonary edema. Treatment: irrigation, fresh air, oxygen. Food use: pH adjustment, antimicrobial.",
        "usage": "Cleaning products (40%), fertilizers (30%), chemical manufacturing (20%), other (10%). Market value ~$3 billion.",
        "handlingPrecautions": "Use in fume hood or with adequate ventilation. Wear gloves, safety goggles, face shield. Avoid inhalation of fumes. Have water available for decontamination. Use ammonia-compatible equipment.",
        "storageConditions": "Store in tightly closed containers in cool, well-ventilated area away from heat. Keep away from acids, halogens, oxidizers. Temperature should not exceed 25°C. Shelf life: 1 year.",
        "firstAidMeasures": "INHALATION: Remove to fresh air immediately. Administer oxygen. Seek medical attention if symptoms severe. SKIN CONTACT: Remove contaminated clothing. Flood with water for 15 minutes. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes. Seek IMMEDIATE medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Drink water or milk. Seek medical attention.",
        "disposalMethod": "Neutralize with acid (vinegar, hydrochloric acid) to pH 7, then flush to sewer with plenty of water. Small quantities can be diluted and flushed. Never mix with bleach (forms toxic chloramines)."
    }
}
        {
    "id": 93,
    "name": "Silver Nitrate",
    "formula": "AgNO₃",
    "type": "salt",
    "description": "Silver nitrate is a colorless crystalline solid that is highly soluble in water and photosensitive (turns gray/black with light exposure). Industrial production is via reaction of silver with nitric acid. Applications include photography (declining), silver mirror production, cauterizing agent in medicine, antiseptic, analytical reagent, and hair dye. Safety concerns include corrosiveness, staining (argyria - permanent blue-gray skin discoloration), and environmental toxicity to aquatic life. First aid involves immediate irrigation and medical evaluation. Environmental impact includes silver's toxicity to microorganisms and persistence. Despite declining use in photography, silver nitrate remains important in medical, analytical, and specialty applications.",
    "details": {
        "physicalState": "Colorless crystalline solid, turns gray/black with light. Odorless. Density: 4.35 g/cm³. Melting point: 212°C. Very soluble in water (1220 g/L at 0°C).",
        "composition": "Pure silver nitrate ≥99.8%. May contain trace copper, iron, lead. Reagent grade for analytical use.",
        "function": "Photography (declining), silver mirrors, cauterizing agent (medicine), antiseptic, analytical reagent (chloride detection), hair dye, laboratory reagent.",
        "origin": "Reaction of silver with nitric acid: 3Ag + 4HNO₃ → 3AgNO₃ + NO + 2H₂O. From silver refining. World production: ~2000 tons annually (declining).",
        "toxicity": "Corrosive (oral LD50 rat: 50 mg/kg). Causes argyria (permanent blue-gray skin discoloration) with chronic exposure. Environmental: toxic to aquatic life. Not carcinogenic.",
        "flammability": "Not flammable but strong oxidizer - may intensify fires. Decomposes at >440°C producing toxic nitrogen oxides.",
        "reactivity": "Strong oxidizer. Reacts with chloride forming insoluble AgCl (analytical test). Photosensitive (reduces to silver metal). Complexes with ammonia, cyanide. Corrosive to metals.",
        "acidity": "Neutral salt (pH ~5-6 in solution). Silver ion hydrolyzes slightly.",
        "biologicalEffect": "Corrosive: chemical burns. Antiseptic: kills microorganisms. Cauterizing: coagulates tissue proteins. Chronic exposure: argyria (irreversible). Treatment: decontamination, dimercaprol possibly for systemic toxicity.",
        "usage": "Photography (30%, declining), medicine (25%), analytical chemistry (20%), mirrors and plating (15%), other (10%). Market value ~$100 million.",
        "handlingPrecautions": "Wear gloves, safety goggles, protective clothing. Avoid skin contact (stains). Use in dark or with amber containers. Wash hands thoroughly after handling. Store away from reducing agents.",
        "storageConditions": "Store in tightly closed amber containers in cool, dark, dry place. Protect from light. Store separately from organic materials, reducing agents, chlorine compounds. Temperature should not exceed 25°C.",
        "firstAidMeasures": "INHALATION: Remove to fresh air. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water for 15 minutes. Staining may occur. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes. Seek IMMEDIATE medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Drink water or milk. Seek IMMEDIATE medical attention.",
        "disposalMethod": "Precipitate as silver chloride with sodium chloride, filter, and send silver chloride for recovery. Small quantities: dilute greatly and flush to sewer (silver regulations vary). Never discharge large quantities (toxic to aquatic life). Silver recovery valuable."
    }
}
   {
    "id": 94,
    "name": "Potassium Permanganate",
    "formula": "KMnO₄",
    "type": "salt",
    "description": "Potassium permanganate is a dark purple crystalline solid that dissolves in water to give intense purple solutions. It is a strong oxidizing agent containing manganese in the +7 oxidation state. Industrial production is via oxidation of manganese dioxide with potassium hydroxide and potassium chlorate. Applications include water treatment (disinfection, odor control), organic synthesis oxidant, antiseptic, decontaminant for chemical warfare agents, and analytical reagent. Safety concerns include strong oxidation (can ignite organic materials), staining (purple-brown stains on skin and materials), and toxicity. First aid involves decontamination and specific treatment for ingestion. Environmental impact includes manganese toxicity at high concentrations.",
    "details": {
        "physicalState": "Dark purple to bronze crystalline solid. Odorless. Density: 2.70 g/cm³. Decomposes at 240°C. Soluble in water (64 g/L at 20°C), forms purple solution.",
        "composition": "Pure potassium permanganate ≥99%. May contain trace chloride, sulfate, moisture.",
        "function": "Water treatment (disinfection, taste/odor control), organic synthesis oxidant, antiseptic (dilute solutions), chemical decontaminant, analytical reagent, laboratory reagent.",
        "origin": "Oxidation of manganese dioxide: 2MnO₂ + 4KOH + O₂ → 2K₂MnO₄ + 2H₂O then electrolytic oxidation to permanganate. Or with potassium chlorate. World production: ~50,000 tons annually.",
        "toxicity": "Moderate toxicity (oral LD50 rat: 1090 mg/kg). Strong oxidizer - corrosive to tissues. Not carcinogenic. Environmental: manganese toxic at high levels. Stains skin/materials purple-brown.",
        "flammability": "Not flammable but strong oxidizer - may cause ignition of combustible materials. Decomposes releasing oxygen.",
        "reactivity": "Strong oxidizing agent (E° = +1.51 V in acid). Reduces to Mn²⁺ (colorless in acid) or MnO₂ (brown precipitate in neutral/alkaline). Decomposes in light. Reacts violently with many organic compounds, concentrated acids.",
        "acidity": "Not acidic but oxidizing agent in acid medium stronger: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (acid) vs MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻ (alkaline).",
        "biologicalEffect": "Oxidizing agent: tissue damage, gastrointestinal irritation. Antiseptic at dilute concentrations (0.1%). Ingestion: gastrointestinal corrosion, methemoglobinemia, systemic toxicity. Treatment: decontamination, vitamin C or sodium thiosulfate to reduce permanganate, supportive care.",
        "usage": "Water treatment (60%), chemical synthesis (20%), medical and antiseptic (10%), other (10%). Market value ~$150 million.",
        "handlingPrecautions": "Wear gloves, safety goggles, protective clothing (stains). Avoid contact with organic materials, acids. Store separately from combustibles. Use plastic containers (attacks some metals).",
        "storageConditions": "Store in tightly closed containers in cool, dark, dry place. Protect from light, moisture, heat. Store separately from organic materials, reducing agents, acids, combustible materials. Temperature should not exceed 30°C.",
        "firstAidMeasures": "INHALATION: Remove to fresh air. Seek medical attention. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water. Staining may occur. Seek medical attention if irritation. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes. Seek medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Administer activated charcoal if recent. Seek IMMEDIATE medical attention - vitamin C or thiosulfate may be given.",
        "disposalMethod": "Reduce with sodium bisulfite, hydrogen peroxide, or oxalic acid until purple color disappears (forms brown MnO₂ precipitate). Filter or allow to settle, then dispose solid as hazardous waste. Liquid can be flushed to sewer after reduction. Never discharge permanganate untreated."
    }
}
     {
    "id": 95,
    "name": "Sodium Silicate (Water Glass)",
    "formula": "Na₂SiO₃",
    "type": "salt",
    "description": "Sodium silicate is a generic term for compounds containing sodium oxide and silica in various ratios, appearing as colorless glassy solid or viscous aqueous solutions. Industrial production is via fusion of sand (silica) with sodium carbonate at high temperature. Applications include adhesives (cardboard, paper), detergents, cement, passive fire protection, foundry molds, and water treatment. Safety concerns include alkalinity (corrosive) and irritation. First aid involves irrigation and removal from exposure. Environmental impact is low as silicates are natural components of minerals. Sodium silicate's adhesive and binding properties make it valuable in multiple industries.",
    "details": {
        "physicalState": "Colorless glassy solid or viscous aqueous solution (water glass). Odorless. Solid density: 2.4 g/cm³. Melting point: 1088°C. Soluble in water (forming alkaline solution).",
        "composition": "Various SiO₂:Na₂O ratios (2:1 to 3.75:1). Commonly Na₂SiO₃, but actually mixtures. Solutions: 20-50% solids. May contain trace aluminum, iron.",
        "function": "Adhesives (cardboard, paper), detergents, cement and concrete, passive fire protection, foundry molds, water treatment, egg preservation, laboratory reagent.",
        "origin": "Fusion of silica sand with sodium carbonate: SiO₂ + Na₂CO₃ → Na₂SiO₃ + CO₂ at 1100-1200°C. Dissolved in water under pressure to make solutions. World production: ~5 million tons annually.",
        "toxicity": "Alkaline, corrosive. Irritant to eyes, skin, respiratory tract. Not carcinogenic. TLV-TWA: none established.",
        "flammability": "Not flammable. Actually used in fire protection (intumescent coatings).",
        "reactivity": "Alkaline in solution (pH 11-13). Polymerizes to form gels with acid or divalent cations. Reacts with acids forming silicic acid gel. Binds to surfaces.",
        "acidity": "Strongly alkaline in solution due to hydrolysis: SiO₃²⁻ + H₂O ⇌ HSiO₃⁻ + OH⁻.",
        "biologicalEffect": "Alkaline corrosive: chemical burns to skin, eyes. Ingestion: tissue damage, metabolic alkalosis. Treatment: dilution, irrigation.",
        "usage": "Detergents (30%), adhesives (25%), cement and concrete (20%), pulp and paper (10%), other (15%). Market value ~$3 billion.",
        "handlingPrecautions": "Wear gloves, safety goggles, protective clothing. Avoid skin and eye contact. Use in well-ventilated area. For solutions, prevent spills (slippery).",
        "storageConditions": "Store in tightly closed containers. Solutions: prevent freezing. Solid: protect from moisture. Store separately from acids. Temperature: solutions above freezing, solid <30°C.",
        "firstAidMeasures": "INHALATION: Remove to fresh air. Seek medical attention if symptoms. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with water for 15 minutes. Seek medical attention for burns. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes. Seek IMMEDIATE medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Drink water or milk. Seek medical attention.",
        "disposalMethod": "Neutralize with acid (to pH 7), which forms silica gel. Can be flushed to sewer after neutralization. Solid: landfill. Biodegradable component."
    }
}
        {
    "id": 96,
    "name": "Magnesium Sulfate (Epsom Salt)",
    "formula": "MgSO₄",
    "type": "salt",
    "description": "Magnesium sulfate is a white crystalline solid commonly known as Epsom salt, named after the English town where it was first discovered in mineral springs. It typically exists as heptahydrate (MgSO₄·7H₂O). Industrial production is from mineral sources (kieserite, epsomite) or by reaction of magnesium carbonate with sulfuric acid. Applications include agriculture (magnesium fertilizer), bath salts, medicine (laxative, eclampsia treatment), brewing salt, and laboratory reagent. Safety profile is excellent at normal doses. First aid measures are minimal. Environmental impact is benign as magnesium and sulfate are natural water components. Magnesium sulfate's dual role as nutrient and therapeutic agent ensures continued widespread use.",
    "details": {
        "physicalState": "White crystalline solid (heptahydrate). Odorless, bitter-salty taste. Density: 1.68 g/cm³ (heptahydrate). Dehydrates with heating. Very soluble in water (710 g/L at 20°C).",
        "composition": "Heptahydrate: MgSO₄·7H₂O most common. Anhydrous also available. USP grade for medicine, agricultural grade for fertilizer. May contain trace calcium, chloride.",
        "function": "Agriculture (magnesium fertilizer), bath salts, medicine (laxative, eclampsia treatment), brewing salt, laboratory reagent, textile processing, cement.",
        "origin": "From mineral deposits (kieserite MgSO₄·H₂O, epsomite MgSO₄·7H₂O). Reaction of magnesium carbonate with sulfuric acid. Byproduct of seawater magnesium production. World production: ~2 million tons annually.",
        "toxicity": "Very low toxicity (oral LD50 rat: 5000 mg/kg). Laxative effect at moderate doses. Overdose: hypermagnesemia (muscle weakness, cardiac arrest). Not carcinogenic.",
        "flammability": "Not flammable.",
        "reactivity": "Neutral salt. Forms double salts. Hydrates readily. Reacts with bases forming magnesium hydroxide.",
        "acidity": "Neutral (pH ~6-7 in solution). Slightly acidic due to weak hydrolysis.",
        "biologicalEffect": "Essential mineral (magnesium). Laxative: osmotic effect draws water into intestines. Medical: treats magnesium deficiency, eclampsia (IV), arrhythmias. Bath: claimed muscle relaxation (evidence limited). Overdose: hypermagnesemia.",
        "usage": "Agriculture (fertilizer - 60%), chemical industry (20%), pharmaceuticals and personal care (15%), other (5%). Market value ~$300 million.",
        "handlingPrecautions": "Normal laboratory precautions. For agricultural use, follow fertilizer handling guidelines. No special requirements.",
        "storageConditions": "Store in tightly closed containers in cool, dry place. Heptahydrate may effloresce (lose water) in dry air. Temperature should not exceed 30°C. Shelf life: 3 years.",
        "firstAidMeasures": "INHALATION: No treatment needed. SKIN CONTACT: Wash with soap and water. No treatment needed. EYE CONTACT: Rinse with water. No treatment needed. INGESTION: No treatment needed unless massive overdose.",
        "disposalMethod": "Can be disposed with regular waste or flushed to sewer. Actually beneficial as magnesium source for plants. Compostable. No environmental concerns."
    }
}
        {
    "id": 97,
    "name": "Calcium Chloride",
    "formula": "CaCl₂",
    "type": "salt",
    "description": "Calcium chloride is a white crystalline solid that is highly soluble in water and hygroscopic (absorbs moisture from air). It exists in anhydrous form or as dihydrate/hexahydrate. Industrial production is primarily as byproduct of Solvay process or from natural brines. Applications include de-icing agent (melts ice at low temperatures), dust control, concrete accelerator, food additive (firming agent, electrolyte), desiccant, and brine for refrigeration. Safety concerns include irritation from dust and exothermic reaction with water. First aid involves irrigation and removal from exposure. Environmental impact includes chloride toxicity to plants and aquatic life at high concentrations.",
    "details": {
        "physicalState": "White crystalline solid, flakes, pellets, or powder. Odorless. Density: 2.15 g/cm³ (anhydrous). Melting point: 772°C. Very soluble in water (745 g/L at 20°C). Hygroscopic.",
        "composition": "Anhydrous CaCl₂ or hydrates (dihydrate, hexahydrate). Purity: 77-95% CaCl₂. May contain trace magnesium, sodium, potassium chlorides.",
        "function": "De-icing agent, dust control, concrete accelerator, food additive (firming agent, electrolyte), desiccant, refrigeration brine, oil drilling, laboratory reagent.",
        "origin": "Byproduct of Solvay process: 2NH₃ + CO₂ + H₂O + CaCl₂ → CaCO₃ + 2NH₄Cl, then recovery. From natural brines. Reaction of hydrochloric acid with limestone. World production: ~10 million tons annually.",
        "toxicity": "Low toxicity (oral LD50 rat: 1000 mg/kg). Irritant to skin, eyes, respiratory tract. Hygroscopic - can dry skin. Not carcinogenic. Environmental: chloride toxic to plants at high levels.",
        "flammability": "Not flammable.",
        "reactivity": "Hygroscopic - absorbs water exothermically. Forms hydrates. Lowers freezing point of water. Reacts with phosphates, sulfates forming precipitates.",
        "acidity": "Slightly acidic in solution (pH ~4.5-8.5 depending on concentration) due to hydrolysis: Ca²⁺ + H₂O ⇌ CaOH⁺ + H⁺.",
        "biologicalEffect": "Essential mineral (calcium). Electrolyte replacement. Irritant to tissues. Ingestion of large amounts: hypercalcemia, gastrointestinal distress. Treatment: supportive care.",
        "usage": "De-icing (40%), dust control (20%), concrete (15%), oil and gas (10%), food and other (15%). Market value ~$1 billion.",
        "handlingPrecautions": "Wear gloves, safety goggles, dust mask. Avoid contact with moisture (exothermic). Store in dry conditions. For de-icing, follow application rates.",
        "storageConditions": "Store in tightly closed containers in cool, dry place. Protect from moisture. Store separately from bases. Temperature should not exceed 30°C. Shelf life: 2 years if kept dry.",
        "firstAidMeasures": "INHALATION: Remove to fresh air. Seek medical attention if symptoms. SKIN CONTACT: Wash with soap and water. May cause drying. Seek medical attention if irritation. EYE CONTACT: Rinse thoroughly with water for 15 minutes. Seek medical attention if irritation persists. INGESTION: Rinse mouth with water. Drink water. Seek medical attention if large amount ingested.",
        "disposalMethod": "Can be disposed with regular waste or flushed to sewer with plenty of water. For large quantities, consider recovery. Chloride may affect vegetation and concrete - avoid overapplication."
    }
}
        {
    "id": 98,
    "name": "Zinc Chloride",
    "formula": "ZnCl₂",
    "type": "salt",
    "description": "Zinc chloride is a white crystalline solid that is highly soluble in water and hygroscopic. Industrial production is via reaction of zinc or zinc oxide with hydrochloric acid. Applications include soldering flux, galvanizing, chemical synthesis, wood preservation, deodorants, and petroleum refining. Safety concerns are significant: zinc chloride is corrosive, toxic, and can cause severe tissue damage (particularly to respiratory tract if inhaled as fumes). First aid involves immediate irrigation and medical evaluation. Environmental impact includes zinc toxicity to aquatic life. Despite hazards, zinc chloride's unique properties make it valuable for specific industrial applications.",
    "details": {
        "physicalState": "White crystalline solid, granules, or powder. Odorless. Density: 2.91 g/cm³. Melting point: 290°C. Very soluble in water (4320 g/L at 25°C). Hygroscopic, deliquescent.",
        "composition": "Anhydrous ZnCl₂ or hydrated forms. Purity: ≥96%. May contain trace lead, iron, sulfate.",
        "function": "Soldering flux, galvanizing, chemical synthesis, wood preservation, deodorants, petroleum refining, battery electrolyte, laboratory reagent.",
        "origin": "Reaction of zinc or zinc oxide with hydrochloric acid: Zn + 2HCl → ZnCl₂ + H₂ or ZnO + 2HCl → ZnCl₂ + H₂O. From galvanizing wastes. World production: ~100,000 tons annually.",
        "toxicity": "Corrosive and toxic (oral LD50 rat: 350 mg/kg). Causes severe tissue damage. Inhalation of fumes particularly dangerous (metal fume fever, chemical pneumonitis). Not carcinogenic.",
        "flammability": "Not flammable.",
        "reactivity": "Lewis acid. Forms complexes with ammonia, amines, chloride. Hydrolyzes in water forming acidic solution. Deliquescent. Reacts with bases forming zinc hydroxide.",
        "acidity": "Acidic in solution (pH ~4 for 1 M solution) due to hydrolysis: Zn²⁺ + H₂O ⇌ ZnOH⁺ + H⁺.",
        "biologicalEffect": "Corrosive: severe burns to skin, eyes, respiratory tract. Inhalation: chemical pneumonitis, pulmonary edema. Systemic: zinc toxicity (nausea, fever, lethargy). Treatment: decontamination, supportive care, chelation possibly.",
        "usage": "Soldering and galvanizing (40%), chemical synthesis (25%), wood preservation (15%), deodorants and cosmetics (10%), other (10%). Market value ~$150 million.",
        "handlingPrecautions": "Wear gloves, safety goggles, face shield, protective clothing, appropriate respirator if generating dust/fumes. Use in fume hood. Avoid contact with moisture. Wash hands thoroughly.",
        "storageConditions": "Store in tightly closed containers in cool, dry place. Protect from moisture. Store separately from bases, ammonia. Temperature should not exceed 30°C. Shelf life: 2 years.",
        "firstAidMeasures": "INHALATION: Remove to fresh air immediately. Administer oxygen. Seek IMMEDIATE medical attention - watch for pulmonary edema. SKIN CONTACT: Remove contaminated clothing immediately. Wash thoroughly with soap and water for 20 minutes. Seek IMMEDIATE medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes. Seek IMMEDIATE medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Drink water or milk. Seek IMMEDIATE medical attention.",
        "disposalMethod": "Precipitate as zinc hydroxide with sodium hydroxide to pH 8-9, filter, and dispose sludge as hazardous waste. Liquid after precipitation can be flushed to sewer. Zinc recovery valuable. Never discharge untreated."
    }
}
        {
    "id": 99,
    "name": "Lead Acetate",
    "formula": "Pb(CH₃COO)₂",
    "type": "salt",
    "description": "Lead acetate is a white crystalline solid with a sweet taste (called sugar of lead historically). It typically exists as trihydrate. Industrial production is via reaction of lead oxide with acetic acid. Applications have severely declined due to lead toxicity but historically included hair dyes, sweetening of wine (illegal), waterproofing, and analytical chemistry. Safety concerns are extreme: lead acetate is toxic, bioaccumulative, and causes lead poisoning affecting nervous system, kidneys, and blood. First aid involves immediate medical evaluation and chelation therapy if indicated. Environmental impact includes lead's persistence and toxicity. Modern use is restricted to specific industrial applications with strict controls.",
    "details": {
        "physicalState": "White crystalline solid (trihydrate). Sweet taste (DANGEROUS - lead poisoning). Density: 3.25 g/cm³ (anhydrous). Melting point: 75°C (trihydrate loses water). Soluble in water (443 g/L at 20°C), glycerol.",
        "composition": "Trihydrate: Pb(CH₃COO)₂·3H₂O most common. Anhydrous also available. Reagent grade for limited analytical use.",
        "function": "Historically: hair dyes, wine sweetener (illegal), waterproofing. Currently: limited analytical chemistry, specialized industrial processes, research.",
        "origin": "Reaction of lead(II) oxide with acetic acid: PbO + 2CH₃COOH → Pb(CH₃COO)₂ + H₂O. Or from lead carbonate. World production: minimal (<100 tons annually).",
        "toxicity": "Extremely toxic (oral LD50 rat: 4660 mg/kg but chronic toxicity more important). Lead poisoning: neurotoxicity (especially children), anemia, kidney damage, reproductive effects. Bioaccumulative. Suspected carcinogen. Sweet taste increases ingestion risk.",
        "flammability": "Not flammable. Decomposes when heated producing toxic lead fumes, acetic acid.",
        "reactivity": "Soluble lead salt. Reacts with sulfides forming black PbS. Forms basic acetates. Complexes with other ligands. Oxidizes in air.",
        "acidity": "Slightly acidic in solution due to hydrolysis.",
        "biologicalEffect": "Lead poisoning: abdominal pain, constipation, anemia, peripheral neuropathy, encephalopathy (children). Chronic: cognitive deficits, hypertension, nephropathy. Treatment: removal from exposure, chelation therapy (EDTA, dimercaprol, succimer).",
        "usage": "Essentially banned from most applications. Limited analytical use, research. Market negligible.",
        "handlingPrecautions": "AVOID USE if possible. If essential: use in fume hood, wear appropriate respirator, impermeable gloves, protective clothing, face shield. No eating, drinking, or smoking in area. Biological monitoring required. Use closed systems.",
        "storageConditions": "Store in tightly closed containers labeled with poison symbol in secure area with restricted access. Keep records of use. Store separately from sulfides, acids. Temperature should not exceed 25°C.",
        "firstAidMeasures": "INHALATION: Remove to fresh air. Seek IMMEDIATE medical attention - blood lead level monitoring. SKIN CONTACT: Remove contaminated clothing immediately. Wash thoroughly with soap and water for 15 minutes. Seek medical attention. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes. Seek IMMEDIATE medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Seek IMMEDIATE medical attention - chelation therapy may be needed.",
        "disposalMethod": "Must be treated as hazardous waste. Precipitate as lead sulfide with sodium sulfide, filter, and dispose sludge as hazardous waste. Alternatively, solidify with cement or other binders for landfill. Professional hazardous waste services required. Never discharge to environment."
    }
}
        {
    "id": 100,
    "name": "Copper(II) Sulfate (Blue Vitriol)",
    "formula": "CuSO₄",
    "type": "salt",
    "description": "Copper sulfate is a blue crystalline solid that typically exists as pentahydrate (CuSO₄·5H₂O). It is perhaps the most common copper compound. Industrial production is via reaction of copper or copper oxide with sulfuric acid. Applications include agriculture (fungicide, herbicide, fertilizer additive), electroplating, mining (flotation agent), pigment, water treatment (algae control), and educational chemistry demonstrations. Safety concerns include toxicity (especially to aquatic life), corrosiveness, and environmental persistence. First aid involves irrigation and medical evaluation for significant exposures. Environmental impact includes copper toxicity to fish and invertebrates. Despite toxicity, copper sulfate remains important due to its effectiveness as fungicide and algicide.",
    "details": {
        "physicalState": "Blue crystalline solid (pentahydrate). Odorless. Density: 2.28 g/cm³. Loses water at 110°C. Soluble in water (203 g/L at 0°C). Anhydrous form is white.",
        "composition": "Pentahydrate: CuSO₄·5H₂O most common. Anhydrous also available. Technical grade ≥98%. May contain trace iron, nickel, arsenic.",
        "function": "Agriculture (fungicide, herbicide, fertilizer), electroplating, mining (flotation agent), pigment, water treatment (algae control), educational demonstrations, laboratory reagent.",
        "origin": "Reaction of copper or copper oxide with sulfuric acid: CuO + H₂SO₄ → CuSO₄ + H₂O. Byproduct of copper refining. World production: ~200,000 tons annually.",
        "toxicity": "Toxic (oral LD50 rat: 300 mg/kg). Irritant to eyes, skin, gastrointestinal tract. Environmental: highly toxic to aquatic life (fish LC50: 0.01-1 mg/L). Not carcinogenic.",
        "flammability": "Not flammable.",
        "reactivity": "Soluble copper salt. Reacts with iron: Cu²⁺ + Fe → Cu + Fe²⁺ (cementation). Forms complexes with ammonia (deep blue). Dehydrates to anhydrous white powder when heated.",
        "acidity": "Acidic in solution (pH ~4 for 0.1 M) due to hydrolysis: Cu²⁺ + H₂O ⇌ CuOH⁺ + H⁺.",
        "biologicalEffect": "Corrosive to tissues. Ingestion: gastrointestinal irritation, metallic taste, nausea, vomiting, diarrhea. Chronic: Wilson's disease-like symptoms if accumulation. Treatment: decontamination, possibly penicillamine for severe poisoning.",
        "usage": "Agriculture (70%), water treatment (15%), chemical industry (10%), other (5%). Market value ~$200 million.",
        "handlingPrecautions": "Wear gloves, safety goggles, dust mask. Avoid contact with eyes, skin. Use in well-ventilated area. For agricultural use, follow pesticide regulations. Prevent environmental release.",
        "storageConditions": "Store in tightly closed containers in cool, dry place. Protect from moisture. Store separately from ammonia, acids, metals. Temperature should not exceed 30°C. Shelf life: 3 years.",
        "firstAidMeasures": "INHALATION: Remove to fresh air. Seek medical attention if symptoms. SKIN CONTACT: Remove contaminated clothing. Wash thoroughly with soap and water for 15 minutes. Seek medical attention if irritation. EYE CONTACT: Immediately flush eyes with gently flowing water for 30 minutes. Seek medical attention. INGESTION: Do NOT induce vomiting. Rinse mouth with water. Drink water or milk. Seek medical attention.",
        "disposalMethod": "Precipitate as copper sulfide with sodium sulfide or as copper hydroxide with lime to pH 9-10. Filter and dispose sludge as hazardous waste. Liquid after precipitation can be flushed to sewer. Copper recovery valuable. Never discharge to natural waters."
    }
}
        ];

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
            <a href="#" class="chemical-details-btn" data-id="${chemical.id}">See Details</a>
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
                    <span>What It Looks Like</span>
                </div>
                <div class="classification-content">${chemical.details.physicalState}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-atom"></i>
                    <span>What It's Made Of</span>
                </div>
                <div class="classification-content">${chemical.details.composition}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-flask"></i>
                    <span>What It Does</span>
                </div>
                <div class="classification-content">${chemical.details.function}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-seedling"></i>
                    <span>Where It Comes From</span>
                </div>
                <div class="classification-content">${chemical.details.origin}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-skull-crossbones"></i>
                    <span>How Dangerous It Is</span>
                </div>
                <div class="classification-content">${chemical.details.toxicity}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-fire"></i>
                    <span>Can It Burn</span>
                </div>
                <div class="classification-content">${chemical.details.flammability}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-bolt"></i>
                    <span>How It Reacts</span>
                </div>
                <div class="classification-content">${chemical.details.reactivity}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-tint"></i>
                    <span>Acid or Base</span>
                </div>
                <div class="classification-content">${chemical.details.acidity}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-dna"></i>
                    <span>Effect on Living Things</span>
                </div>
                <div class="classification-content">${chemical.details.biologicalEffect}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-industry"></i>
                    <span>Where It's Used</span>
                </div>
                <div class="classification-content">${chemical.details.usage}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>How to Handle Safely</span>
                </div>
                <div class="classification-content">${chemical.details.handlingPrecautions}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-warehouse"></i>
                    <span>How to Store It</span>
                </div>
                <div class="classification-content">${chemical.details.storageConditions}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-first-aid"></i>
                    <span>First Aid</span>
                </div>
                <div class="classification-content">${chemical.details.firstAidMeasures}</div>
            </li>
            <li class="classification-item">
                <div class="classification-title">
                    <i class="fas fa-trash-alt"></i>
                    <span>How to Throw Away</span>
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

// Site Warning Functions
let countdownTimer;
let totalSeconds = 20;
let secondsLeft = totalSeconds;

function hideWarning() {
    document.getElementById('siteWarning').style.display = 'none';
    document.body.style.overflow = 'auto';
    clearInterval(countdownTimer);
}

function startCountdown() {
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
            hideWarning();
        }
    }, 1000);
}

// Show warning immediately and start countdown
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflow = 'hidden';
    startCountdown();
    
    // Close button functionality
    document.getElementById('closeButton').addEventListener('click', hideWarning);
});

// Handle orientation changes
window.addEventListener('orientationchange', function() {
    // Small delay to allow orientation to complete
    setTimeout(function() {
        document.getElementById('siteWarning').style.display = 'flex';
    }, 100);

});
