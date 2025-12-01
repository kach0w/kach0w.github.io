+++
title = "Using Zola for Notetaking?"
date = 2024-07-10
description = "~blog"
+++

At it's core, Zola is just a Markdown to HTML engine. Type out your documents, and boom they're on the web. It's occured to me that that's exactly what many notetakers need: a simple, moderately robust platform to store their thoughts, and if the need arises, to show them on the web. 

So can <i>you</i> use it for notetaking? 

One of the main limitations of Zola is the need to sync it to a GitHub repository for "published" notes to display on the web. For many beginners, the hassle of learning Git commands is simply to much to be considered leaving more "user friendly" notetaking websites like Notion or even Google Docs more reasonable alternatives. 

On the other side, one of the best things about Zola is its simplicity. Just some text, occassionally some images, what else do you really need. The people who use Obsidian probably beg to differ, but their idiotic second brain, productivity-increasing, telepathy writing hokum is too much to care about (at least for me). Admittedly, there's probably a grain of truth behind their beliefs but who cares-it's just Markdown for christ sakes.

<div style="text-align:center;">
    <img src="/blog/obsidian.png" width="500" style="border-radius:8px">
    <br><br>
    <caption>ref: the Obisidian <s>Notion</s> hype train 😱</caption>
    <br><br>
</div>

That being said, perhaps we can give Zola some better functionality. Latex equations? Private notes? That shouldn't be too bad.

For starters: $$\LaTeX{}$$It's pretty simple to use it on the web these days thanks to MathJax (credit to them). All you need to do is drop their script snippet in your base.html template.

    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

And voila, the double dollarsigns are now yours to use.

Private notes are bit trickier though. For one, you have to specifically tell Zola not to display something. 

To handle this you have to include some kind of attribute in the page section so that Zola won't display it. Luckily, Zola's engine Tera handles most of the work for us. 

So add this to your private note's header:
    
    extra = {"private" = "yes"}

And add this to your blog's logic
    
    {% if not page.extra["private"] %}
        # page content
    {% endif %}

Obviously, this solution is not the best. With enough poking around any serious developer will be able to access it. But it works, and if you really don't store secure stuff on the website, then who cares. 

I guess that's it for this time. 

See ya!

Karthik


