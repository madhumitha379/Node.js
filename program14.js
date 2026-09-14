const bcrypt = require(&#39;bcrypt&#39;);
const hashPassword = async () =&gt; {
const hashed = await
bcrypt.hash(&quot;mypassword&quot;, 10);
console.log(&quot;Hashed:&quot;, hashed);
const match = await
bcrypt.compare(&quot;mypassword&quot;, hashed);
console.log(&quot;Match:&quot;, match);
};

hashPassword();
