---

layout: default
title:  "Master styles"
header_title: 'Master Elements'
lead_text: 'Making sure all the styles are golden'

---

# Heading 1 *uses 1 # before the line*

## Heading 2 *uses 2 #'s before the line*

### Heading 3 *uses 3 #'s before the line*

#### Heading 4 *uses 4 #'s before the line*

##### Heading 5 *uses 5 #'s before the line*

##### Heading 6 *uses 6 #'s before the line*

---

#Paragraph
![img](http://lorempixel.com/800/300/abstract)

Lorem ipsum dolor sit amet, [test link](http://) adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. **Donec faucibus.** Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.

Lorem ipsum dolor sit amet, emphasis consectetuer adipiscing elit. *Nullam dignissim convallis est.* Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.

---

#List Types
##Definition List
**Definition List Title**
This is a definition list division.

##Ordered List
1. You can make ordered lists
2. by adding the number
3. then a period with a following space (**1.** )

##Unordered List
* Use an * and a space
* before every line
* and it will make a unordered list

---

#Fieldsets, Legends, and Form Elements
<fieldset>
<legend>Legend</legend>
Markdown doesn't have any code for field sets, legends, and form elements… So all this is done in html.

<form>
####Form Element
All HTML...

<div class="form-group">
<label for="text_field">Text Field:</label><br />
<input type="text" class="form-control" placeholder="Type Here"/>
</div>

<div class="form-group">
<label for="text_area">Text Area:</label><br />
<textarea class="form-control" placeholder="Type Here"></textarea>
</div>

<div class="form-group">
<label for="select_element">Select Element:</label><br />
<select name="select_element class="form-control">
<optgroup label="Option Group 1">
<option value="1">Option 1</option>
<option value="2">Option 2</option>
<option value="3">Option 3</option>
</optgroup>
<optgroup label="Option Group 2">
<option value="1">Option 1</option>
<option value="2">Option 2</option>
<option value="3">Option 3</option>
</optgroup>
</select>
</div>

<div class="form-group">
<label for="radio_buttons">Radio Buttons:</label><br />
<input type="radio" class="radio" name="radio_button" value="radio_1" /> Radio 1<br/>
<input type="radio" class="radio" name="radio_button" value="radio_2" /> Radio 2<br/>
<input type="radio" class="radio" name="radio_button" value="radio_3" /> Radio 3<br/>
</div>

<div class="form-group">
<label for="checkboxes">Checkboxes:</label><br />
<input type="checkbox" class="checkbox" name="checkboxes" value="check_1" /> Radio 1<br/>
<input type="checkbox" class="checkbox" name="checkboxes" value="check_2" /> Radio 2<br/>
<input type="checkbox" class="checkbox" name="checkboxes" value="check_3" /> Radio 3<br/>
</div>

<div class="form-group">
<label for="password">Password:</label><br />
<input type="password" class="form-control password" name="password" />
</div>

<div class="form-group">
<label for="file">File Input:</label><br />
<input type="file" class="file" name="file" />
</div>

<div class="form-group">
<input class="btn btn-default" type="reset" value="Clear" /> <input class="btn btn-success" type="submit" value="Submit" />
</div>
</form>
</fieldset>

---

#Tables
 Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

---

#Bits & Stuff
Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. <cite>cite</cite>. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym> Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  <abbr title="Avenue">AVE</abbr>
 
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym> Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  <abbr title="Avenue">AVE</abbr>

<blockquote>
<p>"This stylesheet is going to help so freaking much." <br />-Blockquote</p>
</blockquote>
