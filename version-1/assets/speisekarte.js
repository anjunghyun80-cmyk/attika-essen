/* Speisekarte Attika-Grill, Essen-Werden.
   Quelle: Online-Shop attikagrill.de (Stand Oktober 2026) und gedruckte Karte (Ausgabe März 2025, Getränke im Haus).
   Ein Eintrag: [Nummer, Name, Beschreibung, [Preise passend zu "cols"]]. null = gibt es in dieser Größe nicht.
   Preis ändern = nur hier die Zahl ändern. */
window.SPEISEKARTE = [
  {
    id: 'grill', name: 'Vom Grill', cols: ['ohne Beilage', 'mit Beilage'],
    note: 'Beilage: Pommes oder Reis und Salat. Bratkartoffeln 2,80 € Aufpreis. Alle Grillgerichte mit Zwiebeln und Zaziki: 2,30 € Aufpreis.',
    items: [
      ['101', 'Attika-Teller', '1 Kotelett, 1 Souvlaki, 1 Steak, 2 Cevapcici und Gyros', ['16,50', '20,50']],
      ['102', 'Grillteller', '1 Kotelett, 1 Steak, 2 Cevapcici und Gyros', ['14,50', '18,50']],
      ['113', 'Dyon-Teller', 'Gyros mit kleinen Bifteki', ['12,40', '15,90']],
      ['104', 'Souvlaki', '3 Spieße', ['10,50', '14,90']],
      ['105', 'Hähnchenspieße', '3 Spieße mit Paprika', ['12,00', '16,50']],
      ['106', 'Gyrosteller', 'Gyros vom Spieß', ['9,00', '13,20']],
      ['109', 'Fladen Gyros', 'gerollt, mit Gyros, Zwiebeln, Zaziki oder Fleischsauce, Tomaten und grünem Salat', ['7,50', null]],
      ['110', 'Gyros Pita', 'Gyros, Zwiebeln, Zaziki oder Fleischsauce und Krautsalat', ['8,00', null]],
      ['119', 'Gyros Brötchen', 'Gyros, Zwiebeln, Zaziki oder Fleischsauce, Tomaten und grüner Salat', ['4,90', null]],
      ['121', 'Riganato', 'gebratenes Schweinefleisch in Zitronensaft und Oregano', ['10,50', '14,90']],
      ['111', 'Bifteki', 'gefüllt mit Feta-Käse', ['10,40', '15,00']],
      ['112', 'Cevapcici', '6 Stück', ['9,50', '13,90']],
      ['115', 'Metaxa-Teller', 'Gyros, Hähnchenfilet, 1 Souvlaki, 1 Schweinefilet und Metaxasauce', ['16,50', '20,50']],
      ['118', 'Romios-Platte für 2', 'Gyros, 2 Spieße, 2 Schweinefilets, 2 Cevapcici, 2 Lammkoteletts, frittierte Auberginen, Gigandes, Bauernsalat', [null, '44,90']],
      ['120', 'Eros-Platte für 2', 'Gyros, 2 Schweinesteaks, 2 Schweinefilets, 2 kleine Bifteki, panierter Feta und Tiramisu zum Nachtisch', [null, '44,90']],
      ['165', 'Lammkotelett', '', ['17,00', '21,50']],
      ['175', 'Leber mit Röstzwiebeln', '', ['9,00', '13,50']],
      ['114', 'Werdener Teller', 'Gyros mit Souvlaki und Leber', ['13,00', '17,00']],
      ['122', 'Paris-Teller', '1 Schweinesteak, 1 Schweinefilet, 1 Hähnchenfilet und Fleischsauce', ['12,90', '16,90']],
      ['124', 'Leoni-Teller', '2 Cevapcici, 1 Souvlaki, 2 kleine Steaks und Fleischsauce', ['12,90', '16,90']],
      ['126', 'Greece-Teller', '3 Cevapcici und Gyros', [null, '14,20']],
      ['12a', 'Taxi-Teller', 'Currywurst mit Gyros und Pommes', ['9,90', null]],
      ['13a', 'Laky-Teller', '1 Frikadelle, 1 Currywurst, Gyros und Pommes', ['13,20', null]],
      ['14a', 'Gyros-Box', 'mit Pommes und Zaziki', ['6,20', null]],
      ['127', 'Pita Vegetaria', 'großes Pita mit Sauce oder Zaziki, Zwiebeln und Salat', ['6,40', null]]
    ]
  },
  {
    id: 'pizza', name: 'Pizza', cols: ['klein · 24 cm', 'groß · 31 cm', 'riesig · 45 × 45 cm'],
    note: 'Alle Pizzen mit Tomaten und Käse. Zu jeder riesigen Familienpizza gibt es Pizzabrötchen mit Kräutercreme oder Aioli gratis. Extra-Wunsch 2,30 €.',
    items: [
      ['1', 'Pizza Attika', 'Salami, Schinken, Pilze, Gyros', ['10,50', '12,50', '29,90']],
      ['2', 'Pizza Gyros', 'Gyros, Paprika', ['8,50', '11,90', '27,50']],
      ['3', 'Pizza A la Kosta', 'Thunfisch, Zwiebeln, scharfe Paprika', ['9,00', '11,90', '27,50']],
      ['4', 'Pizza O Sole Mio', 'Salami, Schinken, Ei', ['9,90', '12,50', '26,50']],
      ['5', 'Pizza Sizilia', 'Thunfisch, Zwiebeln', ['8,00', '11,50', '26,50']],
      ['6', 'Pizza Toscana', 'Salami, Schinken', ['8,00', '11,50', '26,50']],
      ['7', 'Pizza Tonno', 'Thunfisch', ['7,50', '10,90', '24,30']],
      ['8', 'Pizza Salami', 'Salami', ['7,50', '10,90', '24,30']],
      ['9', 'Pizza Prosciutto', 'Schinken', ['7,50', '10,90', '24,30']],
      ['10', 'Pizza Capricciosa', 'Salami, Schinken, Pilze', ['9,00', '11,90', '27,50']],
      ['11', 'Pizza Romantica', 'Schinken, Sardellen, Paprika, Oliven', ['9,90', '12,00', '29,30']],
      ['12', 'Pizza Curfidi', 'Artischocken', ['7,50', '10,90', '24,30']],
      ['13', 'Pizza Napoli', 'Oliven, Sardellen, Paprika', ['9,50', '12,50', '28,30']],
      ['14', 'Pizza Hawaii', 'Schinken, Ananas', ['8,00', '11,50', '26,50']],
      ['15', 'Pizza Ananas', 'Ananas', ['7,50', '10,90', '24,30']],
      ['16', 'Pizza Prosciutto-Tonno', 'Schinken, Thunfisch', ['8,00', '11,50', '26,50']],
      ['17', 'Pizza Prosciutto-Funghi', 'Schinken, Pilze', ['8,00', '11,50', '26,50']],
      ['18', 'Pizza Toscana-Tonno', 'Salami, Schinken, Thunfisch', ['9,00', '11,90', '27,50']],
      ['19', 'Pizza Bolognese', 'Hackfleischsauce', ['7,50', '10,90', '24,30']],
      ['20', 'Pizza Funghi', 'frische Pilze', ['7,50', '10,90', '24,30']],
      ['21', 'Pizza Roma', 'Knoblauch', ['7,50', '10,90', '24,30']],
      ['22', 'Pizza Cipolla', 'Zwiebeln', ['7,50', '10,90', '24,30']],
      ['23', 'Pizza Inferno', 'Paprika rot und grün', ['7,50', '10,90', '24,30']],
      ['24', 'Pizza Diavolo', 'Paprika rot und grün, Peperoni, Jalapeños', ['9,00', '11,50', '27,50']],
      ['25', 'Pizza Margherita', 'Tomaten und Käse', ['6,60', '8,50', '19,90']],
      ['26', 'Pizza Vier Jahreszeiten', 'Thunfisch, Schinken, Artischocken, Salami, rote Paprika', ['9,90', '12,90', '29,90']],
      ['27', 'Pizza Calzone', 'gefüllt mit Schinken und Thunfisch', ['7,50', '10,50', null]],
      ['28', 'Pizza Frutti di Mare', 'Meeresfrüchte', ['9,90', '12,50', '29,50']],
      ['29', 'Pizza Santorini', 'Thunfisch, Krabben, Artischocken, rote Paprika', ['10,50', '12,50', '29,50']],
      ['30', 'Pizza Ikaria', 'Muscheln, Pilze, Sardellen, Oliven', ['10,50', '12,50', '29,50']],
      ['31', 'Pizza Spinat', 'Spinat', ['7,50', '10,90', '24,30']],
      ['32', 'Pizza Krabben', 'Krabben', ['8,50', '11,90', '28,50']],
      ['33', 'Pizza El Greco', 'Schinken, Salami, Feta, Peperoni', ['10,50', '12,50', '29,90']],
      ['34', 'Pizza Naxos', 'Muscheln, Krabben', ['10,50', '12,50', '29,90']],
      ['35', 'Pizza Mykene', 'Schinken, Zwiebeln, Feta, Sucuk', ['10,50', '12,50', '29,50']],
      ['37', 'Pizza Spezial (gefüllt)', 'Tomaten, Käse, Gyros, Zwiebeln, Peperoni, Zaziki', [null, '14,00', null]],
      ['39', 'Pizza Vegetaria', 'Champignons, Artischocken, Paprika, Broccoli', ['10,50', '12,50', '29,50']],
      ['40', 'Pizza Korfu', 'Spinat, Feta, Peperoni, Oliven, Zwiebeln', ['10,50', '12,50', '29,50']],
      ['43', 'Pizza Mozzarella', 'Mozzarella, frische Tomaten', ['8,50', '11,50', '26,50']],
      ['44', 'Pizza Sucuk', 'türkische Knoblauchwurst, Peperoni, Zwiebeln', ['9,90', '11,90', '28,50']],
      ['45', 'Pizza Orientale', 'Mozzarella, Sucuk, Peperoni, frische Tomaten (scharf)', ['10,50', '12,90', '29,50']],
      ['46', 'Pizza Hollandaise', 'Gyros oder Hähnchen, Sauce Hollandaise', ['10,00', '13,20', '29,90']],
      ['47', 'Pizza Hollandaise-Brokkoli', 'Brokkoli und Hähnchen, Sauce Hollandaise', ['10,50', '13,20', '29,90']],
      ['169', 'Pizzabrötchen', '6 Stück, mit Kräuterbutter oder Aioli', [null, '3,00', null]],
      ['169a', 'Pizzabrötchen gefüllt', '8 Stück, mit Käse und Thunfisch, Schinken, Salami oder Spinat', [null, '8,50', null]]
    ]
  },
  {
    id: 'ueberbacken', name: 'Überbacken', cols: ['ohne Beilage', 'mit Beilage'],
    note: 'Alles mit Käse überbacken. Beilage: Pommes oder Reis und Salat.',
    items: [
      ['107', 'Gyros', 'mit Zwiebeln, Paprika und Tomatensauce', ['11,20', '15,90']],
      ['108', 'Gyros mit Zwiebeln und Sahne', '', ['11,20', '15,90']],
      ['184', 'Gyros-Metaxa', 'mit Metaxasauce und Zwiebeln', ['11,50', '16,20']],
      ['185', 'Gyros-Spezial', 'mit Metaxasauce, Peperoni und Feta', ['11,50', '16,20']],
      ['186', 'Gyros-Hawaii', 'mit Ananas und Sahnesauce', ['11,20', '15,90']],
      ['196', 'Gyros Hollandaise', 'mit Sauce Hollandaise', ['11,50', '16,20']],
      ['158', 'Schnitzel Hawaii', 'mit Tomaten, Schinken und Ananas', ['10,90', '15,40']],
      ['177', 'Schnitzel Bolognese', 'mit Bolognesesauce', ['10,90', '15,40']],
      ['178', 'Sahne-Schnitzel', 'mit Sahne, Schinken und Pilzen', ['10,90', '15,40']],
      ['188', 'Metaxa-Schnitzel', 'mit Schinken, Pilzen und Metaxasauce', ['10,90', '15,40']],
      ['189', 'Spargel-Schnitzel', 'mit Schinken, Spargel und Sauce Hollandaise', ['11,50', '16,20']],
      ['190', 'Hähnchenschnitzel Metaxa', 'mit Metaxasauce, Schinken und Pilzen', ['11,40', '15,90']],
      ['191', 'Hähnchenschnitzel mit Sahne', 'mit Sahne, Schinken, Pilzen und Ananas', ['11,40', '15,90']],
      ['192', 'Hähnchenschnitzel mit Tomaten', 'mit Metaxasauce und Tomaten', ['10,90', '15,40']],
      ['195', 'Hähnchenschnitzel mit Broccoli', 'mit Broccoli und Sauce Hollandaise', ['11,50', '16,20']],
      ['193', 'Cevapcici', 'mit Metaxasauce', ['11,00', '15,50']],
      ['194', 'Bifteki', 'gefüllt mit Feta, mit Metaxasauce', ['12,20', '16,70']]
    ]
  },
  {
    id: 'schnitzel', name: 'Schnitzel', cols: ['ohne Beilage', 'mit Beilage'],
    note: 'Schweineschnitzel ca. 200 g. Beilage: Pommes oder Reis und Salat.',
    items: [
      ['174', 'Hähnchenschnitzel', '', ['8,40', '12,50']],
      ['450', 'Hähnchenschnitzel mit Sauce', 'Metaxa, Rahm, Fleisch, Pfeffer, Jäger, Paprika oder Hollandaise', ['10,40', '14,50']],
      ['454', 'Hähnchenschnitzel mit Spargel', 'und Sauce Hollandaise', ['11,90', '15,90']],
      ['456', 'Cordon bleu', '', ['10,00', '14,00']],
      ['157', 'Paniertes Schnitzel', '', ['8,50', '11,90']],
      ['159', 'Jägerschnitzel', 'mit Jägersauce', ['9,50', '13,40']],
      ['161', 'Paprikaschnitzel', 'mit Paprikasauce', ['9,50', '13,40']],
      ['163', 'Holsteiner Schnitzel', 'mit 2 Spiegeleiern und gebratenen Zwiebeln', ['10,90', '15,30']],
      ['179', 'Rahmschnitzel', 'mit Rahmsauce', ['9,70', '14,20']],
      ['457', 'Metaxaschnitzel', 'mit Metaxasauce', ['9,70', '14,20']],
      ['459', 'Zwiebelschnitzel', 'mit gebratenen Zwiebeln', ['9,70', '14,20']],
      ['461', 'Pfefferschnitzel', 'mit Pfeffersauce', ['9,70', '14,20']],
      ['462', 'Hollandaise-Schnitzel', 'mit Sauce Hollandaise', ['9,90', '14,40']],
      ['463', 'Schnitzel Brokkoli', 'mit Brokkoli und Sauce Hollandaise', ['11,70', '15,70']],
      ['466', 'Spargel-Schnitzel', 'mit Spargel und Sauce Hollandaise', ['11,70', '15,70']]
    ]
  },
  {
    id: 'steak', name: 'Steak & Filet', cols: ['ohne Beilage', 'mit Beilage'],
    note: 'Rumpsteak: 250 g vom argentinischen Rind. Sauce nach Wahl: Pfeffer, Metaxa, Rahm oder Hollandaise.',
    items: [
      ['167', 'Rumpsteak mit Kräuterbutter', '', ['17,90', '22,40']],
      ['400', 'Rumpsteak mit Zwiebeln', 'gebratene Zwiebeln und Kräuterbutter', ['18,90', '23,40']],
      ['401', 'Rumpsteak mit Pfeffersauce', '', ['18,90', '23,40']],
      ['173', 'Schweinemedaillons', '', ['12,00', '15,90']],
      ['406', 'Schweinemedaillons mit Sauce', 'Sauce nach Wahl', ['13,50', '17,50']],
      ['408', 'Hähnchenfilet gegrillt', '', ['10,40', '14,40']],
      ['409', 'Hähnchenfilet mit Sauce', 'gegrillt, Sauce nach Wahl', ['11,30', '16,30']],
      ['650', 'Schweinefilet aus der Pfanne', 'mit Metaxa- oder Rahmsauce', ['12,50', null]],
      ['651', 'Hähnchenfilet aus der Pfanne', 'mit Metaxa- oder Rahmsauce', ['12,50', null]]
    ]
  },
  {
    id: 'fisch', name: 'Vom Fisch', cols: ['ohne Beilage', 'mit Beilage'],
    note: 'Jeden Tag frisch: Dorade (filetiert), Baby-Calamaris oder Sardellen mit Beilage für 18,00 €.',
    items: [
      ['176', 'Calamaris', 'frittierte Ringe', ['9,90', '13,50']],
      ['602', 'Gegrillter Lachs', 'auf Babyspinat mit Zitronen-Sahne-Sauce', [null, '23,90']],
      ['603', 'Riesengarnelen', 'in der Pfanne in der Schale, mit Knoblauch', ['12,70', '16,20']],
      ['605', 'Lachsfilet', '',['16,00', '20,50']],
      ['606', 'Garnelen', 'frittiert im Backteig', ['10,90', '14,90']]
    ]
  },
  {
    id: 'salate', name: 'Salate', cols: ['klein', 'groß'],
    note: 'Dressing nach Wahl: Joghurt, Kräuter, Cocktail, French oder Balsamico.',
    items: [
      ['202', 'Griechischer Bauernsalat', '', ['8,00', '10,50']],
      ['203', 'Beilagensalat', '', ['4,40', null]],
      ['203', 'Salatteller gemischt', '', ['4,90', '8,00']],
      ['205', 'Salat mit Sahne', '', ['4,00', null]],
      ['280', 'Spezialsalat', 'Blattsalat, Gurken, Tomaten, Zwiebeln, Mais, Thunfisch, Schinken, Krabben, Ei und Käse', ['8,50', '11,30']],
      ['281', 'Thunfischsalat', 'Blattsalat, Gurken, Tomaten, rote Bohnen, Thunfisch und Käse', ['7,20', '9,90']],
      ['282', 'Hawaiisalat', 'Blattsalat, Gurken, Tomaten, Zwiebeln, Schinken, Ananas und Käse', ['7,20', '9,90']],
      ['283', 'Mista-Salat', 'Blattsalat, Gurken, Tomaten, Mais, Krabben, Ei und Käse', ['7,90', '10,40']],
      ['284', 'Capricciosa-Salat', 'Blattsalat, Gurken, Mais, Schinken, rote Bohnen, Ei und Käse', ['7,20', '9,90']],
      ['285', 'Chickensalat', 'Blattsalat, Gurken, Tomaten, Mais, Hähnchenbrustfilet und Käse', ['8,20', '11,40']],
      ['286', 'Gyros-Salat', 'Blattsalat, Gurken, Tomaten, Zwiebeln, Mais, Feta und Gyros', ['8,20', '11,40']],
      ['287', 'Attika-Salat', 'Rucola, Eisbergsalat, Cherrytomaten, rote und grüne Paprika, Lachsfilet, Olivenöl und Balsamico', ['11,50', '16,90']]
    ]
  },
  {
    id: 'vorspeisen', name: 'Vorspeisen', cols: ['Preis'],
    note: '',
    items: [
      ['315', 'Zaziki', 'Joghurt, Gurke, Knoblauch', ['4,60']],
      ['632', 'Chtipiti', 'Feta-Käse-Creme', ['5,20']],
      ['633', 'Tarama', 'Creme aus Fischrogen', ['5,20']],
      ['634', 'Florinis', 'gegrillte rote Paprika in Essig-Knoblauch-Sauce', ['5,20']],
      ['317', 'Oliven', '', ['4,60']],
      ['316', 'Peperoni', '', ['4,60']],
      ['316a', 'Peperoni gegrillt', 'mit Olivenöl und Knoblauch', ['5,60']],
      ['319', 'Dolmadakia', 'gefüllte Weinblätter mit Zaziki', ['6,60']],
      ['320', 'Gigandes', 'dicke Bohnen in Sauce', ['6,30']],
      ['321', 'Paputzakia', 'gefüllte Auberginen', ['6,30']],
      ['322', 'Auberginen', 'frittiert, mit Zaziki', ['8,00']],
      ['631', 'Zucchini', 'frittiert, mit Zaziki', ['8,00']],
      ['328', 'Grüne Bohnen', 'in pikanter Sauce', ['6,20']],
      ['208', 'Feta überbacken', '', ['7,50']],
      ['211', 'Feta paniert', '', ['7,50']],
      ['630', 'Feta im Blätterteig', 'mit Sesam und Honig', ['7,50']],
      ['325', 'Spinat überbacken', 'mit Sauce Hollandaise, Schinken und Käse', ['7,50']],
      ['326', 'Broccoli überbacken', 'mit Sauce Hollandaise, Schinken und Käse', ['7,50']],
      ['635', 'Mezze-Teller', 'Zaziki, Tarama und Chtipiti', ['7,40']],
      ['324', 'Vorspeisenplatte groß', '', ['29,90']]
    ]
  },
  {
    id: 'nudeln', name: 'Nudeln', cols: ['Preis'],
    note: 'Nudelsorte nach Wahl: Tortellini, Spaghetti, Tagliatelle oder Maccheroni.',
    items: [
      ['153', 'Bolognese', 'mit Bolognesesauce', ['9,00']],
      ['154', 'Bolognese überbacken', 'mit Bolognesesauce und Käse überbacken', ['9,90']],
      ['155', 'Carbonara', 'mit Schinken, Pilzen, Sahne und Ei', ['9,90']],
      ['250', 'Nudeln Spezial', 'Schinken, Muscheln, Krabben, Sahne, Ananas, mit Käse überbacken', ['11,00']],
      ['251', 'Tomatensauce', '', ['7,50']],
      ['252', 'Krabben und Broccoli', 'mit Knoblauch und Tomatensauce', ['9,90']],
      ['253', 'Meeresfrüchte', 'mit Tomatensauce', ['10,70']],
      ['254', 'Schinken und Broccoli', 'mit Sahne, mit Käse überbacken', ['9,90']],
      ['255', 'Schinken und Feta', 'mit Pilzen und Sahne', ['9,90']],
      ['801', 'Pilze und Broccoli', 'mit Sahne, mit Käse überbacken', ['9,90']],
      ['802', 'Metaxa', 'Schinken, Pilze, Metaxasauce, mit Käse überbacken', ['9,90']],
      ['803', 'Hähnchen', 'Hähnchenbrust, Tomatensauce, Peperoni, mit Käse überbacken', ['10,50']],
      ['804', 'Krabben überbacken', 'Krabben, Broccoli, Sahne, frische Tomaten, mit Käse überbacken', ['10,90']]
    ]
  },
  {
    id: 'baguettes', name: 'Baguettes', cols: ['Preis'],
    note: 'Alle Baguettes mit Tomaten, Salat, Käse und Remoulade.',
    items: [
      ['61', 'Schinken', '', ['8,50']],
      ['62', 'Salami', '', ['8,50']],
      ['63', 'Ei', '', ['8,50']],
      ['64', 'Thunfisch', 'mit Zwiebeln', ['8,50']],
      ['65', 'Schinken und Salami', '', ['9,30']],
      ['66', 'Hawaii', 'Schinken und Ananas', ['9,30']],
      ['67', 'Feta', '', ['9,30']],
      ['68', 'Sucuk', 'türkische Knoblauchwurst und Peperoni', ['9,30']],
      ['69', 'Gyros', 'mit Zwiebeln', ['9,30']],
      ['70', 'Hähnchen', 'Hähnchenbrustfilet', ['9,30']]
    ]
  },
  {
    id: 'omelettes', name: 'Omelettes', cols: ['Preis'],
    note: '',
    items: [
      ['701', 'Omelette Schinken', 'mit Pilzen und Käse', ['7,50']],
      ['702', 'Omelette Salami', 'mit Pilzen und Käse', ['7,50']],
      ['703', 'Omelette Salami und Schinken', 'mit Pilzen und Käse', ['8,10']],
      ['704', 'Omelette Spezial', 'Salami, Schinken, Pilze, Paprika und Käse', ['8,50']]
    ]
  },
  {
    id: 'chicken', name: 'Chicken', cols: ['Preis'],
    note: 'Dip nach Wahl: Barbecue, Chili, Ketchup, Mayo, Aioli oder Süß-Sauer.',
    items: [
      ['181', 'Chicken Nuggets 8 Stück', '', ['7,00']],
      ['181a', 'Chicken Nuggets 12 Stück', '', ['8,70']],
      ['181b', 'Chicken Wings 8 Stück', '', ['9,00']],
      ['181c', 'Chicken Wings 12 Stück', '', ['12,00']],
      ['181d', 'Chicken Burger', 'Salat, Gurken, Tomaten, Remoulade und Ketchup', ['5,00']],
      ['181e', 'Chicken Fladen', 'Hähnchenbrustfilet, Salat, Gurken, Tomaten, Zwiebeln und Barbecue-Sauce im Pita', ['7,10']]
    ]
  },
  {
    id: 'klein', name: 'Kleine Teller', cols: ['Preis'],
    note: 'Mit Zwiebeln und Zaziki 1,70 € Aufpreis, mit Bratkartoffeln 2,00 € Aufpreis.',
    items: [
      ['91', 'Kleiner Gyros-Teller', 'mit Pommes oder Reis und Salat', ['9,90']],
      ['92', 'Kleiner Cevapcici-Teller', 'mit Pommes oder Reis und Salat', ['9,90']],
      ['93', 'Kleiner Souvlaki-Teller', 'mit Pommes oder Reis und Salat', ['9,90']],
      ['94', 'Kleiner Hähnchenschnitzel-Teller', 'mit Pommes oder Reis, Salat und Sauce nach Wahl', ['9,90']],
      ['95', 'Kleiner Gyros überbacken', 'ohne Beilage', ['7,90']],
      ['95a', 'Kleines Schnitzel überbacken', 'ohne Beilage', ['7,90']],
      ['96', 'Kleine Chicken Wings', '6 Stück mit Potatoes, gemischtem Salat und Dip', ['11,50']]
    ]
  },
  {
    id: 'kinder', name: 'Für Kinder', cols: ['Preis'],
    note: 'Jedes Kindermenü mit einem Softdrink und einer Überraschung.',
    items: [
      ['K1', 'Kids Menü 1', '6 Chicken Nuggets mit Dip und kleinen Pommes', ['7,90']],
      ['K2', 'Kids Menü 2', '1 Hamburger mit kleinen Pommes', ['7,90']],
      ['K3', 'Kids Menü 3', '5 Fischstäbchen mit Potatoes', ['7,90']]
    ]
  },
  {
    id: 'snacks', name: 'Kleiner Hunger', cols: ['Preis'],
    note: '',
    items: [
      ['304', 'Currywurst', '', ['4,10']],
      ['301', 'Zwiebelwurst', '', ['4,60']],
      ['302', 'Paprikawurst', '', ['4,30']],
      ['303', 'Jägerwurst', '', ['4,30']],
      ['305', 'Bratwurst', '', ['3,50']],
      ['331', 'Bratwurst mit Brötchen', '', ['4,00']],
      ['306', 'Schaschlik', '', ['6,70']],
      ['307', 'Frikadelle', '', ['3,50']],
      ['308', 'Frühlingsrolle', '', ['3,90']],
      ['310', 'Fleischkrokette', '1 Stück', ['2,10']],
      ['314', '1/2 Hähnchen', '', ['6,10']],
      ['151', 'Hamburger', 'mit Gurken, Remoulade und Ketchup', ['4,00']],
      ['1a', 'Cheeseburger', 'mit Käse, Tomaten, Gurken, Remoulade und Ketchup', ['4,50']],
      ['2b', 'Big Hamburger', 'mit Tomaten, Gurken, Zwiebeln, Blattsalat, Remoulade und Ketchup', ['5,40']]
    ]
  },
  {
    id: 'beilagen', name: 'Beilagen & Saucen', cols: ['Preis'],
    note: '',
    items: [
      ['313', 'Pommes frites', 'Portion', ['2,90']],
      ['318', 'Pommes Spezial', 'mit Zwiebeln, Sauce und Mayo', ['4,90']],
      ['312', 'Reis', 'Portion', ['3,30']],
      ['311', 'Kartoffelkroketten', '6 Stück', ['3,30']],
      ['330', 'Potato Wedges', 'Portion', ['3,30']],
      ['329', 'Bratkartoffeln', 'mit Speck und Zwiebeln', ['5,70']],
      ['340', 'Gemüse aus der Pfanne', 'Portion', ['7,50']],
      ['', 'Currysauce, Schaschliksauce, Salatmayonnaise', 'je', ['0,90']],
      ['', 'Paprikasauce, Jägersauce, Fleischsauce', 'je', ['1,80']],
      ['', 'Rahmsauce, Pfeffersauce', 'je', ['2,20']],
      ['', 'Metaxasauce, Bolognesesauce', 'je', ['2,50']],
      ['', 'Sauce Hollandaise', '', ['3,00']],
      ['', 'Schlag Zaziki', '', ['2,30']]
    ]
  },
  {
    id: 'desserts', name: 'Desserts', cols: ['Preis'],
    note: 'Alle Desserts hausgemacht.',
    items: [
      ['500', 'Joghurt mit Honig', '', ['4,40']],
      ['500a', 'Joghurt mit Früchten', '', ['4,40']],
      ['501', 'Griechischer Honigkuchen', '', ['5,40']],
      ['503', 'Tiramisu', '', ['4,40']],
      ['503a', 'Kuchen', 'Kirsche oder Schoko', ['4,40']]
    ]
  },
  {
    id: 'getraenke', name: 'Getränke', cols: ['Menge', 'Preis'],
    note: 'Preise für Getränke im Restaurant.',
    items: [
      ['', 'Warsteiner vom Fass', '', ['0,3 l', '3,40']],
      ['', 'Warsteiner vom Fass', '', ['0,5 l', '4,60']],
      ['', 'Weizenbier vom Fass', '', ['0,5 l', '4,60']],
      ['', 'Schwarzbier', '', ['0,5 l', '4,70']],
      ['', 'Altbier oder Radler', 'Flasche', ['0,33 l', '3,60']],
      ['', 'Radler alkoholfrei', 'Flasche', ['0,33 l', '3,80']],
      ['', 'Krefelder', 'Flasche', ['0,33 l', '3,60']],
      ['', 'Alkoholfreies Pils', 'Flasche', ['0,33 l', '3,60']],
      ['', 'Malzbier', 'Flasche', ['0,33 l', '3,40']],
      ['', 'Cola, Cola Zero, Cola Light, Mezzo Mix, Fanta, Sprite', '', ['0,3 l', '3,20']],
      ['', 'Cola, Cola Zero, Cola Light, Mezzo Mix, Fanta, Sprite', '', ['0,5 l', '4,20']],
      ['', 'Mineralwasser oder stilles Wasser', 'Flasche', ['0,2 l', '3,20']],
      ['', 'Mineralwasser oder stilles Wasser', 'Flasche', ['0,7 l', '6,30']],
      ['', 'Ayran', '', ['0,2 l', '3,20']],
      ['', 'Eistee', 'Pfirsich oder Zitrone', ['0,4 l', '3,50']],
      ['', 'Bitter Lemon, Tonic, Ginger Ale', 'Flasche', ['0,2 l', '3,30']],
      ['', 'Saft', 'Orange, Apfel, Kirsche, Rhabarber oder Maracuja', ['0,2 l', '3,20']],
      ['', 'Saftschorle', '', ['0,3 l', '3,90']],
      ['', 'Saftschorle', '', ['0,5 l', '4,90']],
      ['', 'Imiglikos', 'rot oder weiß, lieblich', ['0,2 l', '5,00']],
      ['', 'Demestika', 'rot oder weiß, trocken', ['0,2 l', '5,00']],
      ['', 'Aroma Lofou', 'rot oder weiß, halbtrocken', ['0,2 l', '5,00']],
      ['', 'Mavrodaphne', 'Likörwein, rot', ['0,2 l', '6,20']],
      ['', 'Samos', 'Likörwein, weiß', ['0,2 l', '6,20']],
      ['', 'Amethystos oder Hatzimichalis', 'rot oder weiß', ['0,2 l', '8,70']],
      ['', 'Roséwein', '', ['0,2 l', '5,20']],
      ['', 'Retsina', '', ['0,2 l', '3,90']],
      ['', 'Aperol Spritz', '', ['0,3 l', '6,70']],
      ['', 'Glühwein', 'saisonal', ['0,2 l', '4,00']],
      ['', 'Glühwein mit Schuss', 'saisonal', ['0,2 l', '5,00']],
      ['', 'Imiglikos, Flasche', 'rot oder weiß, lieblich', ['0,7 l', '16,80']],
      ['', 'Demestika, Flasche', 'rot oder weiß, trocken', ['0,7 l', '16,80']],
      ['', 'Mavrodaphne, Flasche', 'Likörwein, rot', ['0,7 l', '18,80']],
      ['', 'Samos, Flasche', 'Likörwein, weiß', ['0,7 l', '18,80']],
      ['', 'Malamatina, Flasche', 'Harzwein, weiß', ['0,5 l', '8,00']],
      ['', 'Amethystos oder Hatzimichalis, Flasche', 'rot oder weiß, trocken', ['0,7 l', '30,00']],
      ['', 'Rosé, Flasche', 'halbtrocken', ['0,7 l', '17,20']],
      ['', 'Ouzo', '', ['2 cl', '2,20']],
      ['', 'Ouzo', '', ['4 cl', '3,40']],
      ['', 'Ouzo Plomari', '', ['2 cl', '3,20']],
      ['', 'Ouzo Plomari', 'Flasche', ['200 ml', '15,00']],
      ['', 'Metaxa', '', ['4 cl', '5,20']],
      ['', 'Longdrinks', 'alle', ['', '6,50']],
      ['', 'Espresso', '', ['', '2,80']],
      ['', 'Café Crème', '', ['', '3,20']],
      ['', 'Griechischer Mokka', '', ['', '3,20']],
      ['', 'Cappuccino', '', ['', '3,70']],
      ['', 'Cappuccino Schoko', '', ['', '3,90']],
      ['', 'Milchkaffee', '', ['', '3,70']],
      ['', 'Latte Macchiato', '', ['', '4,20']],
      ['', 'Nescafé Frappé', '', ['', '3,70']],
      ['', 'Nescafé Frappé mit Vanilleeis', '', ['', '4,20']],
      ['', 'Schoko Crème', '', ['', '3,40']],
      ['', 'Tee', '', ['', '2,90']]
    ]
  },
  {
    id: 'party', name: 'Party & Verleih', cols: ['Preis'],
    note: 'Für Feiern zu Hause. Am besten vorher anrufen: 0201 45 85 35 99.',
    items: [
      ['80', 'Party-Platte für 8 Personen', 'mit Pommes, Reis und Salat', ['180,00']],
      ['', 'Gyrosgrill leihen: Spieß vom Schwein', 'inklusive Gerät, Preis pro kg, ab 6 kg', ['15,00']],
      ['', 'Gyrosgrill leihen: Spieß vom Hähnchen', 'inklusive Gerät, Preis pro kg, ab 6 kg', ['16,00']]
    ]
  }
];
