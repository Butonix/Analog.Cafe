// tools
import React from "react"

// components
import Heading from "../../../ArticleHeading"
import { LinkButton, ButtonGroup } from "../../../Button"
import { Caption } from "../../../CaptionStyles"
import Figure from "../../../Picture"
import Link from "../../../Link"
import { Section, Article } from "../../../ArticleStyles"


// render
export default props => {
	return(
		<Article>
			<Heading
				pageTitle="Submit"
				pageSubtitle="Film Photography & Essays"
			/>
			<Section>

				<div style={{ textAlign: "center" }}>
					<LinkButton to="/submit/compose" red>Submit Now</LinkButton>
					<p><em>- or -</em></p>
					<p><Link to="/log-in"><strong>Sign in</strong></Link> if you already have an account.</p>
				</div>

				<Figure src="/images/figures/submit-camera.jpg" feature>&ldquo;We accept film photography submissions.&rdquo; 🎞</Figure>


				<h3>How to Submit</h3>
				<p>It&rsquo;s very easy to use <em>Analog.Cafe Composer</em>. You can insert your images and edit text with ease. The Composer tool will do all the formatting and beautification for you.</p>
				<Figure src="/images/figures/submit-screen.jpg">Analog.Cafe Composer in action.</Figure>
				<p><strong>Image Suggestions</strong> &mdash; when you upload your images, you will see <em>Image Suggestions</em>. They are hand-picked selections by the editor that you can freely use here on Analog.Cafe website. A credit to the original photographer will appear automatically.</p>
				<p>You will also have a chance to participate or opt out from the <em>Image Suggestions</em> program.</p>

				<h3>How to Get Accepted</h3>

				<p>Analog.Cafe focuses heavily on film photography as the subject of every submission. That being said, if your work suits the general style of the publication but doesn&rsquo;t use photographs shot on film it can still be accepted.</p>

				<p>Here is a list of formats submissions are typically accepted in:</p>
				<ul>
					<li><strong>A Photo</strong> &mdash; one image, a title and perhaps a caption for the photograph.</li>
					<li><strong>Photo Essay</strong> &mdash; you can have one image with text or a few images that make up a story.</li>
					<li><strong>Opinion/Article</strong> &mdash; your thoughts, advice, and opinions on film photography and art in general.</li>
				</ul>

				<p>For images, JPG and PNG formats are accepted, maximum 5MB per file. Please make sure the quality is good enough to display on large screens.</p>

				<h3>A Few Finer Details</h3>
				<p>When you submit your work, you must also agree to the below rules:</p>
				<Caption style={{ fontVariant: "normal" }}>
					<p><small><strong>Privacy.</strong> Analog.Cafe does not share or sell your private information (such as e-mail) to anyone outside of editing and admin staff at Analog.Cafe. Your email will be used for communication regarding your work and occasional or scheduled company newsletters. You can easily unsubscribe from the mailing list at any time. We do not use cookies unless required by the back-end software vendor to remember you as logged-in user. Analog.Cafe does not use targeted advertising. This online privacy policy applies only to information collected through the website or app and not to information collected elsewhere. By using Analog.Cafe, you consent to this website&rsquo;s privacy policy. This policy might be updated without notice; all changes would be posted on this page. This policy was last modified on July 8, 2017.</small></p>
					<p><small><strong>Links to your work.</strong> All links directed outside of Analog.Cafe website will be set to &ldquo;no-follow.&rdquo;</small></p>
					<p><small><strong>Copyright.</strong> Please note that besides the design and functionality of this website Analog.Cafe copyright also extends to the way your work is presented. Copy edits associated with your post, the brand name, font combinations and all design decisions regarding presenting your work belongs to Analog.Cafe.</small></p>
					<p><small>All copy-editing and touch-up work is done at Analog.Cafe discretion. We may or may not accept your edit requests; all edits are done for the benefit of a good overall presentation of the whole publication, rather than just one pice. Analog.Cafe staff has limited time and resources, please keep that in mind when you make your requests.</small></p>
					<p><small><strong>Release & Withdrawal.</strong> By submitting your work you give Analog.Cafe full, non-exclusive permission to exhibit it online on this website and any other location representing this website only (such as social accounts, other websites offline printed and display medium etc). You are also granting us permission to modify your work (cropping, color and quality adjustments as well as copy editing and visual decorations). You are free to request an immediate withdrawal of your work at any time. We will comply as soon as possible and within reason. Analog.Cafe also reserves the right to remove your work at any time at discretion.</small></p>
					<p><small><strong>Exclusivity.</strong> Your work is being exhibited on non-exclusive basis. This means that you are free to continue submitting it to any other gallery or website that you wish.</small></p>
					<p><small>You certify that the you are the owner of the copyrights for the files submitted.</small></p>
				</Caption>


				<ButtonGroup>
					<LinkButton to="/submit/compose" red>Submit Now</LinkButton>
					<p><em>- or -</em></p>
					<p><Link to="/log-in"><strong>Sign in</strong></Link> if you already have an account.</p>
				</ButtonGroup>

			</Section>
		</Article>
	)
}
