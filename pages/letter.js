import Airtable from 'airtable';
import Head from 'next/head';
import Link from 'next/link'

export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: process.env.API_KEY,
  });

  const records = await airtable
    .base(process.env.BASE_ID)('Towards')
    .select({
      fields: ['Name', 'Email'],
    })
    .all();

  const products = records.map((product) => {
    return {
      name: product.get('Name'),
      type: product.get('Email'),
    };
  });

  return {
    props: {
      products,
    },
  };
}

function Product({ name, email }) {
  return (
    <div className="item">
    <li>{name}</li>
    </div>
  );
}

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Towards Equity</title>
        <meta name="description" content="An open letter towards domestic sustainability and equitable food security." />
        <link rel="icon" href="https://emojis.wiki/emoji-pics/apple/green-apple-apple.png" />
      </Head>
      <div className="wrapper"><br/><br/>
        <div className="home"><h1 className="page-heading">An open letter towards domestic sustainability and equitable food security.</h1>
<p><em>2022-02-18</em></p>

<p>Access to food isn’t a privilege, it’s a fundamental human right. The most recent national measure was taken in 2017-18, when 1 in 8 households were food insecure, amounting to over 4.4 million Canadians and 1.1 million children living in homes that have difficulty putting food on the table due to low wages and high costs. Throughout the pandemic, we saw a 10-15% increase in visits to Food Banks, with 45% of individuals under the age of 14. In 2021, The Emergency Food Insecurity announced an additional $100-million top-up towards food banks and food organizations. The problem, however, is that <strong>food is not the solution to food insecurity.</strong></p>

<p>Reducing household food insecurity requires the commitment of public revenue and resources. The foundation of food insecurity are affordability and individual wages. If one cannot afford to put food on the table, then they are also struggling with other fundamental needs. Savings can only be as high as the monthly cost of food, which is often not enough for mainstream sustainability. Over the past two years, we have entered a state of budget shock: the cost of food, shelter and heat have increased, while social support systems have remained the same.</p>

<p><strong>We seek social reform.</strong> Food banks have been in place for 40 years, and there is no substantial evidence that food charity can move households out of food insecurity, such that only 1/4 food insecure individuals use these facilities. Research has shown that food insecurity can be reduced through public policies that improve the financial circumstances of low-income households. Pension programs for individuals above 65 years of age introduced a 50% drop in food insecurity, in comparison to those in their 50s. Initiatives such as Saskatchewan’s Social Assistance Reforms reflect the protection that income stability provide to families on a large scale. As a result, we must implement a Basic Income Guarantee, which directly provides families with sustainable solutions.</p>

<p>This is not a proposition to remove food banks, nor is it a request to remove their support. <strong>This is a motion to reduce the over-reliance on food banks.</strong> In a country as rich as ours, it is unacceptable that we face income insufficiency through a lack of fundamental resources.</p>

<p>This letter is in response to government complacency and a lack of leadership. Share this petition with your friends and family. Send an email to our elected officials to show that we care about this issue and are outraged by the way it has been neglected.</p>

<p>We do not want continual federal funding, we seek exploration and <strong>a path towards equity.</strong></p>


<h3 id="individuals">Sign this petition.</h3>

<form action="https://getform.io/f/2fc831df-0eb4-4705-b41e-57ee5c39a563" method="POST" acceptCharset="UTF-8">
    <input type="text" name="name" placeholder="Your Name. This is publicly displayed." required="required"/><br/>
    <input type="email" name="email" placeholder="Your Email. This is private, used to prove your identity." required="required"/><br/>
    <br/><button type="submit">Sign</button>
</form>

<br/>
</div>
      <div>
        <p><small>this may take 30 seconds to update.</small></p>
        <ol>
        {products.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            type={product.email}
          />    
        ))}
        </ol>
      </div>
    </div>
    </div>
  );
}


