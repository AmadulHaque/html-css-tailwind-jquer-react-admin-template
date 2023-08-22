import React from 'react';

const CPageOne = () => {
    const itemsCount = 500;
    const itemsArray = Array.from({ length: itemsCount }, (_, index) => ({
        id: index + 1,
        name: `Item ${index + 1}`,
    }));
    return (
    <>
       {itemsArray.map(item => (
            <div key={item.id} className="col-span-12">
                <div className="card">
                    <div className="card-header pb-2 header-bottom-border">
                        <h3 className="font-bold text-title">Sample Card</h3>
                        <p className="text-content3">Subtitle here</p>
                    </div>
                    <div className="card-body">
                    <p>
                        "In a first ever statement of this kind, Santa Clause has stated that he
                        is imposing a lifetime Christmas present embargo on Darren P Smith,
                        after stating that he was "simply appalled" with the behaviour of Darren
                        Smith over the last year.One of Santa's inner circle of elves told the
                        Polar Paper: "I've never seen Santa this irate before. He was shouting
                        with rage so much that his cheeks turned purple and his beard was
                        covered in little flecks of spittle. Darren Smith must have done some
                        pretty naughty things to make him this furious. I mean, a lifetime ban
                        on Christmas presents - it's unheard of!". Considerable speculation has
                        circulated regarding precisely what it is that Darren Smith did to
                        arouse Santa's wrath, but no clear answers have emerged."
                    </p>
                    <ul className="mt-5 list-decimal list-inside text-content3">
                        <li>Delete the negative; accentuate the positive!</li>
                        <li>The great thing about fashion is that it always looks forward.</li>
                        <li>Fashion moves so quickly that, unless you have.</li>
                        <li>I have an obsession with details and pattern.</li>
                    </ul>
                    </div>
                </div>
            </div>
        ))}
    </>
    );
};

export default CPageOne;