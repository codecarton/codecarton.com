import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	// Currently the iOS app points to this route for Privacy policy.  Onced fixed we can remove this route.
	throw redirect(302, '/one16/privacy');
	return {};
}) satisfies PageServerLoad;
