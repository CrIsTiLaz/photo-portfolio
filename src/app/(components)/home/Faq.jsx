import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "Care este procesul?",
    answer:
      "Nimic nu se întamplă până nu ne întâlnim, de preferat fizic, până nu ne cunoaștem puțin. Pentru ca interacțiunea noastră să fie una cat mai naturală, trebuie să existe o conexiune între noi.",
  },
  {
    id: "item-2",
    question: "Ce garanție avem?",
    answer:
      "Drept garanție este contractul pe care îl vom semna împreună, alături de care se va achita un avans de 40%, restul de 60% urmând sa fie achitat în ziua evenimentului.",
  },
  {
    id: "item-3",
    question: "Cât timp vei rămâne la eveniment?",
    answer:
      "Pozatul începe la pregătirea mirilor până la ultimul moment memorabil al serii. Ora de început și ora finală se vor preciza în contract. De asemenea, este posibilitatea de a prelungi prezenta la eveniment, contra cost.",
  },
  {
    id: "item-4",
    question: "Cât timp durează până primim fotografiile?",
    answer:
      "Termenul de livrare a fotografiilor se precizează in contract, este de 30 de zile lucrătoare, dar, de obicei, fotografiile sunt gata mai repede.",
  },
  {
    id: "item-5",
    question: "Putem primi și fotografiile needitate?",
    answer:
      "Materialele brute trec printr-un proces de verificare și selecție, ce garanteaza o calitate constantă a fotografiilor. Editarea este esențială pentru a corecta detalii tehnice, a menține consistența stilului și a asigura o imagine profesională. Fotografiile finale reprezintă adevărata valoare a serviciului, iar oferirea lor fără procesul de post-producție ar diminua rezultatul și experiența clientului.",
  },
  {
    id: "item-6",
    question: "Cum primim fotografiile?",
    answer:
      "Fotografiile editate vor si disponibile spre descărcare la rezoluția lor maximă, într-o galerie online. Recomand descarcarea lor imediata si efectuarea unui back-up.",
  },
  {
    id: "item-7",
    question: "Putem plăti în plus pentru a primi fotografiile mai repede?",
    answer:
      "Specificat în contract, se poate plati extra pentru editatul unui numar limitat de poze in seara evenimentului, începând cu suma de 50 euro.",
  },
  {
    id: "item-8",
    question: "Ce costuri suplimentare pot apărea?",
    answer:
      "Dacă evenimentul dvs. nu se desfășoară in Timișoara (+30km), costurile pentru deplasare si cazare (dacă este cazul), se plătesc suplimentar.",
  },
  {
    id: "item-9",
    question: "Va apărea fiecare invitat în fotografii?",
    answer:
      "Nu pot garanta că fiecare invitat va apărea în fotografii, deoarece acest lucru depinde de dinamica evenimentului, de momentele pe care le surprind și de interacțiunile dintre oameni. Totuși, mă asigur să acopăr cât mai multe momente importante și să surprind o varietate de cadre care includ cât mai mulți invitați. Dacă există persoane sau momente speciale care dorești să fie fotografiate, te rog să îmi spui pentru a le acorda o atenție deosebită.",
  },
  {
    id: "item-10",
    question: "Vor fi folosite lumini artificiale?",
    answer:
      "Lumina naturală espre prefarată pentru documentarea evenimentului, dar în funcție de locație și de condițiile de lumină, este posibil să folosesc lumini artificiale pentru a asigura o calitate optimă a fotografiilor. Acest lucru este esențial în situații cu lumină insuficientă sau pentru a crea un anumit efect artistic. Încerc mereu să integrez lumina artificială cât mai discret, astfel încât să nu deranjeze atmosfera evenimentului.",
  },
];

function Faq() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="h2 text-center mb-16 mt-10 lg:mt-6">
        Întrebări frecvente
      </h1>

      <Accordion type="single" collapsible>
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;
