import { createMockUserToken, getModularInstance, isMobileCordova, isReactNative, isElectron, isIE, isUWP, isBrowserExtension } from '@firebase/util';
import { Logger, LogLevel } from '@firebase/logger';
import { XhrIo, EventType, ErrorCode, createWebChannelTransport, getStatEventTarget, FetchXmlHttpFactory, WebChannel, Event, Stat } from '@firebase/webchannel-wrapper';

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */
class T {
    constructor(t, e) {
        this.previousValue = t, e && (e.sequenceNumberHandler = t => this.t(t), this.i = t => e.writeSequenceNumber(t));
    }
    t(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }
    next() {
        const t = ++this.previousValue;
        return this.i && this.i(t), t;
    }
}

T.o = -1;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
};

/** An error returned by a Firestore operation. */ class A extends Error {
    /** @hideconstructor */
    constructor(
    /**
     * The backend error code associated with this error.
     */
    t, 
    /**
     * A custom error description.
     */
    e) {
        super(e), this.code = t, this.message = e, 
        /** The custom name for all FirestoreErrors. */
        this.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Formats an object as a JSON string, suitable for logging. */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R = new Logger("@firebase/firestore");

// Helper methods are needed because variables can't be exported as read/write
function b() {
    return R.logLevel;
}

/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */ function v(t, ...e) {
    if (R.logLevel <= LogLevel.DEBUG) {
        const n = e.map(S);
        R.debug(`Firestore (8.10.0): ${t}`, ...n);
    }
}

function P(t, ...e) {
    if (R.logLevel <= LogLevel.ERROR) {
        const n = e.map(S);
        R.error(`Firestore (8.10.0): ${t}`, ...n);
    }
}

function V(t, ...e) {
    if (R.logLevel <= LogLevel.WARN) {
        const n = e.map(S);
        R.warn(`Firestore (8.10.0): ${t}`, ...n);
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function S(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    var e;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function D(t = "Unexpected state") {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    const e = "FIRESTORE (8.10.0) INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw P(e), new Error(e);
}

/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */ function C(t, e) {
    t || D();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function N(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function x(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    const e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (let e = 0; e < t; e++) n[e] = Math.floor(256 * Math.random());
    return n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class k {
    static u() {
        // Alphanumeric characters
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length;
        // The largest byte value that is a multiple of `char.length`.
                let n = "";
        for (;n.length < 20; ) {
            const s = x(40);
            for (let i = 0; i < s.length; ++i) 
            // Only accept values that are [0, maxMultiple), this ensures they can
            // be evenly mapped to indices of `chars` via a modulo operation.
            n.length < 20 && s[i] < e && (n += t.charAt(s[i] % t.length));
        }
        return n;
    }
}

function F(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function $(t, e, n) {
    return t.length === e.length && t.every(((t, s) => n(t, e[s])));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */
class M {
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    constructor(
    /**
     * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     */
    t, 
    /**
     * The fractions of a second at nanosecond resolution.*
     */
    e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new A(I.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new A(I.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new A(I.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new A(I.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */    static now() {
        return M.fromMillis(Date.now());
    }
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */    static fromDate(t) {
        return M.fromMillis(t.getTime());
    }
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */    static fromMillis(t) {
        const e = Math.floor(t / 1e3), n = Math.floor(1e6 * (t - 1e3 * e));
        return new M(e, n);
    }
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */    toDate() {
        return new Date(this.toMillis());
    }
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */    toMillis() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }
    _compareTo(t) {
        return this.seconds === t.seconds ? F(this.nanoseconds, t.nanoseconds) : F(this.seconds, t.seconds);
    }
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */    isEqual(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }
    /** Returns a textual representation of this Timestamp. */    toString() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }
    /** Returns a JSON-serializable representation of this Timestamp. */    toJSON() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }
    /**
     * Converts this object to a primitive string, which allows Timestamp objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */    valueOf() {
        // This method returns a string of the form <seconds>.<nanoseconds> where
        // <seconds> is translated to have a non-negative value and both <seconds>
        // and <nanoseconds> are left-padded with zeroes to be a consistent length.
        // Strings with this format then have a lexiographical ordering that matches
        // the expected ordering. The <seconds> translation is done to avoid having
        // a leading negative sign (i.e. a leading '-' character) in its string
        // representation, which would affect its lexiographical ordering.
        const t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid
        // 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class L {
    constructor(t) {
        this.timestamp = t;
    }
    static fromTimestamp(t) {
        return new L(t);
    }
    static min() {
        return new L(new M(0, 0));
    }
    compareTo(t) {
        return this.timestamp._compareTo(t.timestamp);
    }
    isEqual(t) {
        return this.timestamp.isEqual(t.timestamp);
    }
    /** Returns a number representation of the version for use in spec tests. */    toMicroseconds() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }
    toString() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }
    toTimestamp() {
        return this.timestamp;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function B(t) {
    let e = 0;
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function q(t, e) {
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function U(t) {
    for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Path represents an ordered sequence of string segments.
 */
class K {
    constructor(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && D(), void 0 === n ? n = t.length - e : n > t.length - e && D(), 
        this.segments = t, this.offset = e, this.len = n;
    }
    get length() {
        return this.len;
    }
    isEqual(t) {
        return 0 === K.comparator(this, t);
    }
    child(t) {
        const e = this.segments.slice(this.offset, this.limit());
        return t instanceof K ? t.forEach((t => {
            e.push(t);
        })) : e.push(t), this.construct(e);
    }
    /** The index of one past the last segment of the path. */    limit() {
        return this.offset + this.length;
    }
    popFirst(t) {
        return t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
    }
    popLast() {
        return this.construct(this.segments, this.offset, this.length - 1);
    }
    firstSegment() {
        return this.segments[this.offset];
    }
    lastSegment() {
        return this.get(this.length - 1);
    }
    get(t) {
        return this.segments[this.offset + t];
    }
    isEmpty() {
        return 0 === this.length;
    }
    isPrefixOf(t) {
        if (t.length < this.length) return !1;
        for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }
    isImmediateParentOf(t) {
        if (this.length + 1 !== t.length) return !1;
        for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }
    forEach(t) {
        for (let e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }
    toArray() {
        return this.segments.slice(this.offset, this.limit());
    }
    static comparator(t, e) {
        const n = Math.min(t.length, e.length);
        for (let s = 0; s < n; s++) {
            const n = t.get(s), i = e.get(s);
            if (n < i) return -1;
            if (n > i) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }
}

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */ class Q extends K {
    construct(t, e, n) {
        return new Q(t, e, n);
    }
    canonicalString() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.toArray().join("/");
    }
    toString() {
        return this.canonicalString();
    }
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */    static fromString(...t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        const e = [];
        for (const n of t) {
            if (n.indexOf("//") >= 0) throw new A(I.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
            // Strip leading and traling slashed.
                        e.push(...n.split("/").filter((t => t.length > 0)));
        }
        return new Q(e);
    }
    static emptyPath() {
        return new Q([]);
    }
}

const j = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

/** A dot-separated path for navigating sub-objects within a document. */ class W extends K {
    construct(t, e, n) {
        return new W(t, e, n);
    }
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */    static isValidIdentifier(t) {
        return j.test(t);
    }
    canonicalString() {
        return this.toArray().map((t => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), 
        W.isValidIdentifier(t) || (t = "`" + t + "`"), t))).join(".");
    }
    toString() {
        return this.canonicalString();
    }
    /**
     * Returns true if this field references the key of a document.
     */    isKeyField() {
        return 1 === this.length && "__name__" === this.get(0);
    }
    /**
     * The field designating the key of a document.
     */    static keyField() {
        return new W([ "__name__" ]);
    }
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */    static fromServerFormat(t) {
        const e = [];
        let n = "", s = 0;
        const i = () => {
            if (0 === n.length) throw new A(I.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            e.push(n), n = "";
        };
        let r = !1;
        for (;s < t.length; ) {
            const e = t[s];
            if ("\\" === e) {
                if (s + 1 === t.length) throw new A(I.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                const e = t[s + 1];
                if ("\\" !== e && "." !== e && "`" !== e) throw new A(I.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                n += e, s += 2;
            } else "`" === e ? (r = !r, s++) : "." !== e || r ? (n += e, s++) : (i(), s++);
        }
        if (i(), r) throw new A(I.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new W(e);
    }
    static emptyPath() {
        return new W([]);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class G {
    constructor(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(W.comparator);
    }
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */    covers(t) {
        for (const e of this.fields) if (e.isPrefixOf(t)) return !0;
        return !1;
    }
    isEqual(t) {
        return $(this.fields, t.fields, ((t, e) => t.isEqual(e)));
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Converts a Base64 encoded string to a binary string. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */
class z {
    constructor(t) {
        this.binaryString = t;
    }
    static fromBase64String(t) {
        const e = atob(t);
        return new z(e);
    }
    static fromUint8Array(t) {
        const e = 
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            let e = "";
            for (let n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }
        /**
 * Helper function to convert a binary string to an Uint8Array.
 */ (t);
        return new z(e);
    }
    toBase64() {
        return t = this.binaryString, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */
        var t;
        /** True if and only if the Base64 conversion functions are available. */    }
    toUint8Array() {
        return function(t) {
            const e = new Uint8Array(t.length);
            for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        // A RegExp matching ISO 8601 UTC timestamps with optional fraction.
        (this.binaryString);
    }
    approximateByteSize() {
        return 2 * this.binaryString.length;
    }
    compareTo(t) {
        return F(this.binaryString, t.binaryString);
    }
    isEqual(t) {
        return this.binaryString === t.binaryString;
    }
}

z.EMPTY_BYTE_STRING = new z("");

const H = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */ function J(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (C(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        let e = 0;
        const n = H.exec(t);
        if (C(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            let t = n[1];
            t = (t + "000000000").substr(0, 9), e = Number(t);
        }
        // Parse the date to get the seconds.
                const s = new Date(t);
        return {
            seconds: Math.floor(s.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: Y(t.seconds),
        nanos: Y(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function Y(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function X(t) {
    return "string" == typeof t ? z.fromBase64String(t) : z.fromUint8Array(t);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function Z(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */
function tt(t) {
    const e = t.mapValue.fields.__previous_value__;
    return Z(e) ? tt(e) : e;
}

/**
 * Returns the local time at which this timestamp was first set.
 */ function et(t) {
    const e = J(t.mapValue.fields.__local_write_time__.timestampValue);
    return new M(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Sentinel value that sorts before any Mutation Batch ID. */
/**
 * Returns whether a variable is either undefined or null.
 */
function nt(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function st(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return 0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */ function it(t) {
    return "number" == typeof t && Number.isInteger(t) && !st(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rt {
    constructor(t) {
        this.path = t;
    }
    static fromPath(t) {
        return new rt(Q.fromString(t));
    }
    static fromName(t) {
        return new rt(Q.fromString(t).popFirst(5));
    }
    /** Returns true if the document is in the specified collectionId. */    hasCollectionId(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }
    isEqual(t) {
        return null !== t && 0 === Q.comparator(this.path, t.path);
    }
    toString() {
        return this.path.toString();
    }
    static comparator(t, e) {
        return Q.comparator(t.path, e.path);
    }
    static isDocumentKey(t) {
        return t.length % 2 == 0;
    }
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */    static fromSegments(t) {
        return new rt(new Q(t.slice()));
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Extracts the backend's type order for the provided value. */ function ot(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? Z(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : D();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function ct(t, e) {
    const n = ot(t);
    if (n !== ot(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return et(t).isEqual(et(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            const n = J(t.timestampValue), s = J(e.timestampValue);
            return n.seconds === s.seconds && n.nanos === s.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return X(t.bytesValue).isEqual(X(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return Y(t.geoPointValue.latitude) === Y(e.geoPointValue.latitude) && Y(t.geoPointValue.longitude) === Y(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return Y(t.integerValue) === Y(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                const n = Y(t.doubleValue), s = Y(e.doubleValue);
                return n === s ? st(n) === st(s) : isNaN(n) && isNaN(s);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return $(t.arrayValue.values || [], e.arrayValue.values || [], ct);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            const n = t.mapValue.fields || {}, s = e.mapValue.fields || {};
            if (B(n) !== B(s)) return !1;
            for (const t in n) if (n.hasOwnProperty(t) && (void 0 === s[t] || !ct(n[t], s[t]))) return !1;
            return !0;
        }
        /** Returns true if the ArrayValue contains the specified element. */ (t, e);

      default:
        return D();
    }
}

function ut(t, e) {
    return void 0 !== (t.values || []).find((t => ct(t, e)));
}

function at(t, e) {
    const n = ot(t), s = ot(e);
    if (n !== s) return F(n, s);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return F(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            const n = Y(t.integerValue || t.doubleValue), s = Y(e.integerValue || e.doubleValue);
            return n < s ? -1 : n > s ? 1 : n === s ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(s) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return ht(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return ht(et(t), et(e));

      case 5 /* StringValue */ :
        return F(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            const n = X(t), s = X(e);
            return n.compareTo(s);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            const n = t.split("/"), s = e.split("/");
            for (let t = 0; t < n.length && t < s.length; t++) {
                const e = F(n[t], s[t]);
                if (0 !== e) return e;
            }
            return F(n.length, s.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            const n = F(Y(t.latitude), Y(e.latitude));
            if (0 !== n) return n;
            return F(Y(t.longitude), Y(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            const n = t.values || [], s = e.values || [];
            for (let t = 0; t < n.length && t < s.length; ++t) {
                const e = at(n[t], s[t]);
                if (e) return e;
            }
            return F(n.length, s.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            const n = t.fields || {}, s = Object.keys(n), i = e.fields || {}, r = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
            s.sort(), r.sort();
            for (let t = 0; t < s.length && t < r.length; ++t) {
                const e = F(s[t], r[t]);
                if (0 !== e) return e;
                const o = at(n[s[t]], i[r[t]]);
                if (0 !== o) return o;
            }
            return F(s.length, r.length);
        }
        /**
 * Generates the canonical ID for the provided field value (as used in Target
 * serialization).
 */ (t.mapValue, e.mapValue);

      default:
        throw D();
    }
}

function ht(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return F(t, e);
    const n = J(t), s = J(e), i = F(n.seconds, s.seconds);
    return 0 !== i ? i : F(n.nanos, s.nanos);
}

function lt(t) {
    return ft(t);
}

function ft(t) {
    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) {
        const e = J(t);
        return `time(${e.seconds},${e.nanos})`;
    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? X(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, 
    rt.fromName(n).toString()) : "geoPointValue" in t ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t ? function(t) {
        let e = "[", n = !0;
        for (const s of t.values || []) n ? n = !1 : e += ",", e += ft(s);
        return e + "]";
    }
    /** Returns a reference value for the provided database and key. */ (t.arrayValue) : "mapValue" in t ? function(t) {
        // Iteration order in JavaScript is not guaranteed. To ensure that we generate
        // matching canonical IDs for identical maps, we need to sort the keys.
        const e = Object.keys(t.fields || {}).sort();
        let n = "{", s = !0;
        for (const i of e) s ? s = !1 : n += ",", n += `${i}:${ft(t.fields[i])}`;
        return n + "}";
    }(t.mapValue) : D();
    var e, n;
}

function dt(t, e) {
    return {
        referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`
    };
}

/** Returns true if `value` is an IntegerValue . */ function wt(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */
function _t(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function mt(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function yt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function gt(t) {
    return !!t && "mapValue" in t;
}

/** Creates a deep copy of `source`. */ function pt(t) {
    if (t.geoPointValue) return {
        geoPointValue: Object.assign({}, t.geoPointValue)
    };
    if (t.timestampValue && "object" == typeof t.timestampValue) return {
        timestampValue: Object.assign({}, t.timestampValue)
    };
    if (t.mapValue) {
        const e = {
            mapValue: {
                fields: {}
            }
        };
        return q(t.mapValue.fields, ((t, n) => e.mapValue.fields[t] = pt(n))), e;
    }
    if (t.arrayValue) {
        const e = {
            arrayValue: {
                values: []
            }
        };
        for (let n = 0; n < (t.arrayValue.values || []).length; ++n) e.arrayValue.values[n] = pt(t.arrayValue.values[n]);
        return e;
    }
    return Object.assign({}, t);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class Et {
    constructor(t) {
        this.value = t;
    }
    static empty() {
        return new Et({
            mapValue: {}
        });
    }
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */    field(t) {
        if (t.isEmpty()) return this.value;
        {
            let e = this.value;
            for (let n = 0; n < t.length - 1; ++n) if (e = (e.mapValue.fields || {})[t.get(n)], 
            !gt(e)) return null;
            return e = (e.mapValue.fields || {})[t.lastSegment()], e || null;
        }
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */    set(t, e) {
        this.getFieldsMap(t.popLast())[t.lastSegment()] = pt(e);
    }
    /**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */    setAll(t) {
        let e = W.emptyPath(), n = {}, s = [];
        t.forEach(((t, i) => {
            if (!e.isImmediateParentOf(i)) {
                // Insert the accumulated changes at this parent location
                const t = this.getFieldsMap(e);
                this.applyChanges(t, n, s), n = {}, s = [], e = i.popLast();
            }
            t ? n[i.lastSegment()] = pt(t) : s.push(i.lastSegment());
        }));
        const i = this.getFieldsMap(e);
        this.applyChanges(i, n, s);
    }
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */    delete(t) {
        const e = this.field(t.popLast());
        gt(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
    }
    isEqual(t) {
        return ct(this.value, t.value);
    }
    /**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */    getFieldsMap(t) {
        let e = this.value;
        e.mapValue.fields || (e.mapValue = {
            fields: {}
        });
        for (let n = 0; n < t.length; ++n) {
            let s = e.mapValue.fields[t.get(n)];
            gt(s) && s.mapValue.fields || (s = {
                mapValue: {
                    fields: {}
                }
            }, e.mapValue.fields[t.get(n)] = s), e = s;
        }
        return e.mapValue.fields;
    }
    /**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */    applyChanges(t, e, n) {
        q(e, ((e, n) => t[e] = n));
        for (const e of n) delete t[e];
    }
    clone() {
        return new Et(pt(this.value));
    }
}

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */ function Tt(t) {
    const e = [];
    return q(t.fields, ((t, n) => {
        const s = new W([ t ]);
        if (gt(n)) {
            const t = Tt(n.mapValue).fields;
            if (0 === t.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(s); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (const n of t) e.push(s.child(n));
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(s);
    })), new G(e);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class It {
    constructor(t, e, n, s, i) {
        this.key = t, this.documentType = e, this.version = n, this.data = s, this.documentState = i;
    }
    /**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */    static newInvalidDocument(t) {
        return new It(t, 0 /* INVALID */ , L.min(), Et.empty(), 0 /* SYNCED */);
    }
    /**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */    static newFoundDocument(t, e, n) {
        return new It(t, 1 /* FOUND_DOCUMENT */ , e, n, 0 /* SYNCED */);
    }
    /** Creates a new document that is known to not exist at the given version. */    static newNoDocument(t, e) {
        return new It(t, 2 /* NO_DOCUMENT */ , e, Et.empty(), 0 /* SYNCED */);
    }
    /**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */    static newUnknownDocument(t, e) {
        return new It(t, 3 /* UNKNOWN_DOCUMENT */ , e, Et.empty(), 2 /* HAS_COMMITTED_MUTATIONS */);
    }
    /**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */    convertToFoundDocument(t, e) {
        return this.version = t, this.documentType = 1 /* FOUND_DOCUMENT */ , this.data = e, 
        this.documentState = 0 /* SYNCED */ , this;
    }
    /**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */    convertToNoDocument(t) {
        return this.version = t, this.documentType = 2 /* NO_DOCUMENT */ , this.data = Et.empty(), 
        this.documentState = 0 /* SYNCED */ , this;
    }
    /**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */    convertToUnknownDocument(t) {
        return this.version = t, this.documentType = 3 /* UNKNOWN_DOCUMENT */ , this.data = Et.empty(), 
        this.documentState = 2 /* HAS_COMMITTED_MUTATIONS */ , this;
    }
    setHasCommittedMutations() {
        return this.documentState = 2 /* HAS_COMMITTED_MUTATIONS */ , this;
    }
    setHasLocalMutations() {
        return this.documentState = 1 /* HAS_LOCAL_MUTATIONS */ , this;
    }
    get hasLocalMutations() {
        return 1 /* HAS_LOCAL_MUTATIONS */ === this.documentState;
    }
    get hasCommittedMutations() {
        return 2 /* HAS_COMMITTED_MUTATIONS */ === this.documentState;
    }
    get hasPendingWrites() {
        return this.hasLocalMutations || this.hasCommittedMutations;
    }
    isValidDocument() {
        return 0 /* INVALID */ !== this.documentType;
    }
    isFoundDocument() {
        return 1 /* FOUND_DOCUMENT */ === this.documentType;
    }
    isNoDocument() {
        return 2 /* NO_DOCUMENT */ === this.documentType;
    }
    isUnknownDocument() {
        return 3 /* UNKNOWN_DOCUMENT */ === this.documentType;
    }
    isEqual(t) {
        return t instanceof It && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
    }
    clone() {
        return new It(this.key, this.documentType, this.version, this.data.clone(), this.documentState);
    }
    toString() {
        return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
    }
}

/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Visible for testing
class At {
    constructor(t, e = null, n = [], s = [], i = null, r = null, o = null) {
        this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = s, this.limit = i, 
        this.startAt = r, this.endAt = o, this.h = null;
    }
}

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function Rt(t, e = null, n = [], s = [], i = null, r = null, o = null) {
    return new At(t, e, n, s, i, r, o);
}

function bt(t) {
    const e = N(t);
    if (null === e.h) {
        let t = e.path.canonicalString();
        null !== e.collectionGroup && (t += "|cg:" + e.collectionGroup), t += "|f:", t += e.filters.map((t => Dt(t))).join(","), 
        t += "|ob:", t += e.orderBy.map((t => function(t) {
            // TODO(b/29183165): Make this collision robust.
            return t.field.canonicalString() + t.dir;
        }(t))).join(","), nt(e.limit) || (t += "|l:", t += e.limit), e.startAt && (t += "|lb:", 
        t += Bt(e.startAt)), e.endAt && (t += "|ub:", t += Bt(e.endAt)), e.h = t;
    }
    return e.h;
}

function vt(t) {
    let e = t.path.canonicalString();
    return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
    t.filters.length > 0 && (e += `, filters: [${t.filters.map((t => {
        return `${(e = t).field.canonicalString()} ${e.op} ${lt(e.value)}`;
        /** Returns a debug description for `filter`. */
        var e;
        /** Filter that matches on key fields (i.e. '__name__'). */    })).join(", ")}]`), 
    nt(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += `, orderBy: [${t.orderBy.map((t => function(t) {
        return `${t.field.canonicalString()} (${t.dir})`;
    }(t))).join(", ")}]`), t.startAt && (e += ", startAt: " + Bt(t.startAt)), t.endAt && (e += ", endAt: " + Bt(t.endAt)), 
    `Target(${e})`;
}

function Pt(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (let n = 0; n < t.orderBy.length; n++) if (!Ut(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (let i = 0; i < t.filters.length; i++) if (n = t.filters[i], s = e.filters[i], 
    n.op !== s.op || !n.field.isEqual(s.field) || !ct(n.value, s.value)) return !1;
    var n, s;
    return t.collectionGroup === e.collectionGroup && (!!t.path.isEqual(e.path) && (!!Qt(t.startAt, e.startAt) && Qt(t.endAt, e.endAt)));
}

function Vt(t) {
    return rt.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

class St extends class {} {
    constructor(t, e, n) {
        super(), this.field = t, this.op = e, this.value = n;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    static create(t, e, n) {
        return t.isKeyField() ? "in" /* IN */ === e || "not-in" /* NOT_IN */ === e ? this.l(t, e, n) : new Ct(t, e, n) : "array-contains" /* ARRAY_CONTAINS */ === e ? new Ft(t, n) : "in" /* IN */ === e ? new $t(t, n) : "not-in" /* NOT_IN */ === e ? new Ot(t, n) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new Mt(t, n) : new St(t, e, n);
    }
    static l(t, e, n) {
        return "in" /* IN */ === e ? new Nt(t, n) : new xt(t, n);
    }
    matches(t) {
        const e = t.data.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.m(at(e, this.value)) : null !== e && ot(this.value) === ot(e) && this.m(at(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }
    m(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case "!=" /* NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return D();
        }
    }
    g() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
    }
}

function Dt(t) {
    // TODO(b/29183165): Technically, this won't be unique if two values have
    // the same description, such as the int 3 and the string "3". So we should
    // add the types in here somehow, too.
    return t.field.canonicalString() + t.op.toString() + lt(t.value);
}

class Ct extends St {
    constructor(t, e, n) {
        super(t, e, n), this.key = rt.fromName(n.referenceValue);
    }
    matches(t) {
        const e = rt.comparator(t.key, this.key);
        return this.m(e);
    }
}

/** Filter that matches on key fields within an array. */ class Nt extends St {
    constructor(t, e) {
        super(t, "in" /* IN */ , e), this.keys = kt("in" /* IN */ , e);
    }
    matches(t) {
        return this.keys.some((e => e.isEqual(t.key)));
    }
}

/** Filter that matches on key fields not present within an array. */ class xt extends St {
    constructor(t, e) {
        super(t, "not-in" /* NOT_IN */ , e), this.keys = kt("not-in" /* NOT_IN */ , e);
    }
    matches(t) {
        return !this.keys.some((e => e.isEqual(t.key)));
    }
}

function kt(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((t => rt.fromName(t.referenceValue)));
}

/** A Filter that implements the array-contains operator. */ class Ft extends St {
    constructor(t, e) {
        super(t, "array-contains" /* ARRAY_CONTAINS */ , e);
    }
    matches(t) {
        const e = t.data.field(this.field);
        return _t(e) && ut(e.arrayValue, this.value);
    }
}

/** A Filter that implements the IN operator. */ class $t extends St {
    constructor(t, e) {
        super(t, "in" /* IN */ , e);
    }
    matches(t) {
        const e = t.data.field(this.field);
        return null !== e && ut(this.value.arrayValue, e);
    }
}

/** A Filter that implements the not-in operator. */ class Ot extends St {
    constructor(t, e) {
        super(t, "not-in" /* NOT_IN */ , e);
    }
    matches(t) {
        if (ut(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        const e = t.data.field(this.field);
        return null !== e && !ut(this.value.arrayValue, e);
    }
}

/** A Filter that implements the array-contains-any operator. */ class Mt extends St {
    constructor(t, e) {
        super(t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , e);
    }
    matches(t) {
        const e = t.data.field(this.field);
        return !(!_t(e) || !e.arrayValue.values) && e.arrayValue.values.some((t => ut(this.value.arrayValue, t)));
    }
}

/**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */ class Lt {
    constructor(t, e) {
        this.position = t, this.before = e;
    }
}

function Bt(t) {
    // TODO(b/29183165): Make this collision robust.
    return `${t.before ? "b" : "a"}:${t.position.map((t => lt(t))).join(",")}`;
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ class qt {
    constructor(t, e = "asc" /* ASCENDING */) {
        this.field = t, this.dir = e;
    }
}

function Ut(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function Kt(t, e, n) {
    let s = 0;
    for (let i = 0; i < t.position.length; i++) {
        const r = e[i], o = t.position[i];
        if (r.field.isKeyField()) s = rt.comparator(rt.fromName(o.referenceValue), n.key); else {
            s = at(o, n.data.field(r.field));
        }
        if ("desc" /* DESCENDING */ === r.dir && (s *= -1), 0 !== s) break;
    }
    return t.before ? s <= 0 : s < 0;
}

function Qt(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (let n = 0; n < t.position.length; n++) {
        if (!ct(t.position[n], e.position[n])) return !1;
    }
    return !0;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class jt {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    constructor(t, e = null, n = [], s = [], i = null, r = "F" /* First */ , o = null, c = null) {
        this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = s, 
        this.limit = i, this.limitType = r, this.startAt = o, this.endAt = c, this.p = null, 
        // The corresponding `Target` of this `Query` instance.
        this.T = null, this.startAt, this.endAt;
    }
}

/** Creates a new Query instance with the options provided. */ function Wt(t, e, n, s, i, r, o, c) {
    return new jt(t, e, n, s, i, r, o, c);
}

/** Creates a new Query for a query that matches all documents at `path` */ function Gt(t) {
    return new jt(t);
}

/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 */ function zt(t) {
    return !nt(t.limit) && "F" /* First */ === t.limitType;
}

function Ht(t) {
    return !nt(t.limit) && "L" /* Last */ === t.limitType;
}

function Jt(t) {
    return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}

function Yt(t) {
    for (const e of t.filters) if (e.g()) return e.field;
    return null;
}

/**
 * Checks if any of the provided Operators are included in the query and
 * returns the first one that is, or null if none are.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */
function Xt(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function Zt(t) {
    const e = N(t);
    if (null === e.p) {
        e.p = [];
        const t = Yt(e), n = Jt(e);
        if (null !== t && null === n) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        t.isKeyField() || e.p.push(new qt(t)), e.p.push(new qt(W.keyField(), "asc" /* ASCENDING */)); else {
            let t = !1;
            for (const n of e.explicitOrderBy) e.p.push(n), n.field.isKeyField() && (t = !0);
            if (!t) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                const t = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc" /* ASCENDING */;
                e.p.push(new qt(W.keyField(), t));
            }
        }
    }
    return e.p;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function te(t) {
    const e = N(t);
    if (!e.T) if ("F" /* First */ === e.limitType) e.T = Rt(e.path, e.collectionGroup, Zt(e), e.filters, e.limit, e.startAt, e.endAt); else {
        // Flip the orderBy directions since we want the last results
        const t = [];
        for (const n of Zt(e)) {
            const e = "desc" /* DESCENDING */ === n.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            t.push(new qt(n.field, e));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                const n = e.endAt ? new Lt(e.endAt.position, !e.endAt.before) : null, s = e.startAt ? new Lt(e.startAt.position, !e.startAt.before) : null;
        // Now return as a LimitType.First query.
        e.T = Rt(e.path, e.collectionGroup, t, e.filters, e.limit, n, s);
    }
    return e.T;
}

function ee(t, e, n) {
    return new jt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function ne(t, e) {
    return Pt(te(t), te(e)) && t.limitType === e.limitType;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function se(t) {
    return `${bt(te(t))}|lt:${t.limitType}`;
}

function ie(t) {
    return `Query(target=${vt(te(t))}; limitType=${t.limitType})`;
}

/** Returns whether `doc` matches the constraints of `query`. */ function re(t, e) {
    return e.isFoundDocument() && function(t, e) {
        const n = e.key.path;
        return null !== t.collectionGroup ? e.key.hasCollectionId(t.collectionGroup) && t.path.isPrefixOf(n) : rt.isDocumentKey(t.path) ? t.path.isEqual(n) : t.path.isImmediateParentOf(n);
    }
    /**
 * A document must have a value for every ordering clause in order to show up
 * in the results.
 */ (t, e) && function(t, e) {
        for (const n of t.explicitOrderBy) 
        // order by key always matches
        if (!n.field.isKeyField() && null === e.data.field(n.field)) return !1;
        return !0;
    }(t, e) && function(t, e) {
        for (const n of t.filters) if (!n.matches(e)) return !1;
        return !0;
    }
    /** Makes sure a document is within the bounds, if provided. */ (t, e) && function(t, e) {
        if (t.startAt && !Kt(t.startAt, Zt(t), e)) return !1;
        if (t.endAt && Kt(t.endAt, Zt(t), e)) return !1;
        return !0;
    }
    /**
 * Returns a new comparator function that can be used to compare two documents
 * based on the Query's ordering constraint.
 */ (t, e);
}

function oe(t) {
    return (e, n) => {
        let s = !1;
        for (const i of Zt(t)) {
            const t = ce(i, e, n);
            if (0 !== t) return t;
            s = s || i.field.isKeyField();
        }
        return 0;
    };
}

function ce(t, e, n) {
    const s = t.field.isKeyField() ? rt.comparator(e.key, n.key) : function(t, e, n) {
        const s = e.data.field(t), i = n.data.field(t);
        return null !== s && null !== i ? at(s, i) : D();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return s;

      case "desc" /* DESCENDING */ :
        return -1 * s;

      default:
        return D();
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function ue(t, e) {
    if (t.I) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: st(e) ? "-0" : e
    };
}

/**
 * Returns an IntegerValue for `value`.
 */ function ae(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function he(t, e) {
    return it(e) ? ae(e) : ue(t, e);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Used to represent a field transform on a mutation. */ class le {
    constructor() {
        // Make sure that the structural type of `TransformOperation` is unique.
        // See https://github.com/microsoft/TypeScript/issues/5451
        this._ = void 0;
    }
}

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function fe(t, e, n) {
    return t instanceof _e ? function(t, e) {
        const n = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }(n, e) : t instanceof me ? ye(t, e) : t instanceof ge ? pe(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        const n = we(t, e), s = Te(n) + Te(t.A);
        return wt(n) && wt(t.A) ? ae(s) : ue(t.R, s);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function de(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof me ? ye(t, e) : t instanceof ge ? pe(t, e) : n;
}

/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */ function we(t, e) {
    return t instanceof Ee ? wt(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */ (n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */
class _e extends le {}

/** Transforms an array value via a union operation. */ class me extends le {
    constructor(t) {
        super(), this.elements = t;
    }
}

function ye(t, e) {
    const n = Ie(e);
    for (const e of t.elements) n.some((t => ct(t, e))) || n.push(e);
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ class ge extends le {
    constructor(t) {
        super(), this.elements = t;
    }
}

function pe(t, e) {
    let n = Ie(e);
    for (const e of t.elements) n = n.filter((t => !ct(t, e)));
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ class Ee extends le {
    constructor(t, e) {
        super(), this.R = t, this.A = e;
    }
}

function Te(t) {
    return Y(t.integerValue || t.doubleValue);
}

function Ie(t) {
    return _t(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A field path and the TransformOperation to perform upon it. */ class Ae {
    constructor(t, e) {
        this.field = t, this.transform = e;
    }
}

function Re(t, e) {
    return t.field.isEqual(e.field) && function(t, e) {
        return t instanceof me && e instanceof me || t instanceof ge && e instanceof ge ? $(t.elements, e.elements, ct) : t instanceof Ee && e instanceof Ee ? ct(t.A, e.A) : t instanceof _e && e instanceof _e;
    }(t.transform, e.transform);
}

/** The result of successfully applying a mutation to the backend. */
class be {
    constructor(
    /**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
    t, 
    /**
     * The resulting fields returned from the backend after a mutation
     * containing field transforms has been committed. Contains one FieldValue
     * for each FieldTransform that was in the mutation.
     *
     * Will be empty if the mutation did not contain any field transforms.
     */
    e) {
        this.version = t, this.transformResults = e;
    }
}

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */ class ve {
    constructor(t, e) {
        this.updateTime = t, this.exists = e;
    }
    /** Creates a new empty Precondition. */    static none() {
        return new ve;
    }
    /** Creates a new Precondition with an exists flag. */    static exists(t) {
        return new ve(void 0, t);
    }
    /** Creates a new Precondition based on a version a document exists at. */    static updateTime(t) {
        return new ve(t);
    }
    /** Returns whether this Precondition is empty. */    get isNone() {
        return void 0 === this.updateTime && void 0 === this.exists;
    }
    isEqual(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }
}

/** Returns true if the preconditions is valid for the given document. */ function Pe(t, e) {
    return void 0 !== t.updateTime ? e.isFoundDocument() && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e.isFoundDocument();
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        InvalidDocument(v0)   Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we transition to an `UnknownDocument` and rely on Watch to send us
 * the updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Every type of mutation needs to implement its own applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document (see `applySetMutationToRemoteDocument()` for an
 * example).
 */ class Ve {}

/**
 * Applies this mutation to the given document for the purposes of computing a
 * new remote document. If the input document doesn't match the expected state
 * (e.g. it is invalid or outdated), the document type may transition to
 * unknown.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param mutationResult - The result of applying the mutation from the backend.
 */ function Se(t, e, n) {
    t instanceof ke ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        const s = t.value.clone(), i = Oe(t.fieldTransforms, e, n.transformResults);
        s.setAll(i), e.convertToFoundDocument(n.version, s).setHasCommittedMutations();
    }(t, e, n) : t instanceof Fe ? function(t, e, n) {
        if (!Pe(t.precondition, e)) 
        // Since the mutation was not rejected, we know that the precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and convert to an UnknownDocument with a
        // known updateTime.
        return void e.convertToUnknownDocument(n.version);
        const s = Oe(t.fieldTransforms, e, n.transformResults), i = e.data;
        i.setAll($e(t)), i.setAll(s), e.convertToFoundDocument(n.version, i).setHasCommittedMutations();
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        e.convertToNoDocument(n.version).setHasCommittedMutations();
    }(0, e, n);
}

/**
 * Applies this mutation to the given document for the purposes of computing
 * the new local view of a document. If the input document doesn't match the
 * expected state, the document is not modified.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 */ function De(t, e, n) {
    t instanceof ke ? function(t, e, n) {
        if (!Pe(t.precondition, e)) 
        // The mutation failed to apply (e.g. a document ID created with add()
        // caused a name collision).
        return;
        const s = t.value.clone(), i = Me(t.fieldTransforms, n, e);
        s.setAll(i), e.convertToFoundDocument(xe(e), s).setHasLocalMutations();
    }
    /**
 * A mutation that modifies fields of the document at the given key with the
 * given values. The values are applied through a field mask:
 *
 *  * When a field is in both the mask and the values, the corresponding field
 *    is updated.
 *  * When a field is in neither the mask nor the values, the corresponding
 *    field is unmodified.
 *  * When a field is in the mask but not in the values, the corresponding field
 *    is deleted.
 *  * When a field is not in the mask but is in the values, the values map is
 *    ignored.
 */ (t, e, n) : t instanceof Fe ? function(t, e, n) {
        if (!Pe(t.precondition, e)) return;
        const s = Me(t.fieldTransforms, n, e), i = e.data;
        i.setAll($e(t)), i.setAll(s), e.convertToFoundDocument(xe(e), i).setHasLocalMutations();
    }
    /**
 * Returns a FieldPath/Value map with the content of the PatchMutation.
 */ (t, e, n) : function(t, e) {
        Pe(t.precondition, e) && 
        // We don't call `setHasLocalMutations()` since we want to be backwards
        // compatible with the existing SDK behavior.
        e.convertToNoDocument(L.min());
    }
    /**
 * A mutation that verifies the existence of the document at the given key with
 * the provided precondition.
 *
 * The `verify` operation is only used in Transactions, and this class serves
 * primarily to facilitate serialization into protos.
 */ (t, e);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function Ce(t, e) {
    let n = null;
    for (const s of t.fieldTransforms) {
        const t = e.data.field(s.field), i = we(s.transform, t || null);
        null != i && (null == n && (n = Et.empty()), n.set(s.field, i));
    }
    return n || null;
}

function Ne(t, e) {
    return t.type === e.type && (!!t.key.isEqual(e.key) && (!!t.precondition.isEqual(e.precondition) && (!!function(t, e) {
        return void 0 === t && void 0 === e || !(!t || !e) && $(t, e, ((t, e) => Re(t, e)));
    }(t.fieldTransforms, e.fieldTransforms) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ !== t.type || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function xe(t) {
    return t.isFoundDocument() ? t.version : L.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ class ke extends Ve {
    constructor(t, e, n, s = []) {
        super(), this.key = t, this.value = e, this.precondition = n, this.fieldTransforms = s, 
        this.type = 0 /* Set */;
    }
}

class Fe extends Ve {
    constructor(t, e, n, s, i = []) {
        super(), this.key = t, this.data = e, this.fieldMask = n, this.precondition = s, 
        this.fieldTransforms = i, this.type = 1 /* Patch */;
    }
}

function $e(t) {
    const e = new Map;
    return t.fieldMask.fields.forEach((n => {
        if (!n.isEmpty()) {
            const s = t.data.field(n);
            e.set(n, s);
        }
    })), e;
}

/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a mutation
 * containing transforms has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param mutableDocument - The current state of the document after applying all
 * previous mutations.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */ function Oe(t, e, n) {
    const s = new Map;
    C(t.length === n.length);
    for (let i = 0; i < n.length; i++) {
        const r = t[i], o = r.transform, c = e.data.field(r.field);
        s.set(r.field, de(o, c, n[i]));
    }
    return s;
}

/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param mutableDocument - The current state of the document after applying all
 *     previous mutations.
 * @returns The transform results list.
 */ function Me(t, e, n) {
    const s = new Map;
    for (const i of t) {
        const t = i.transform, r = n.data.field(i.field);
        s.set(i.field, fe(t, r, e));
    }
    return s;
}

/** A mutation that deletes the document at the given key. */ class Le extends Ve {
    constructor(t, e) {
        super(), this.key = t, this.precondition = e, this.type = 2 /* Delete */ , this.fieldTransforms = [];
    }
}

class Be extends Ve {
    constructor(t, e) {
        super(), this.key = t, this.precondition = e, this.type = 3 /* Verify */ , this.fieldTransforms = [];
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qe {
    // TODO(b/33078163): just use simplest form of existence filter for now
    constructor(t) {
        this.count = t;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Error Codes describing the different ways GRPC can fail. These are copied
 * directly from GRPC's sources here:
 *
 * https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
 *
 * Important! The names of these identifiers matter because the string forms
 * are used for reverse lookups from the webchannel stream. Do NOT change the
 * names of these identifiers or change this into a const enum.
 */ var Ue, Ke;

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function Qe(t) {
    switch (t) {
      case I.OK:
        return D();

      case I.CANCELLED:
      case I.UNKNOWN:
      case I.DEADLINE_EXCEEDED:
      case I.RESOURCE_EXHAUSTED:
      case I.INTERNAL:
      case I.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case I.UNAUTHENTICATED:
        return !1;

      case I.INVALID_ARGUMENT:
      case I.NOT_FOUND:
      case I.ALREADY_EXISTS:
      case I.PERMISSION_DENIED:
      case I.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case I.ABORTED:
      case I.OUT_OF_RANGE:
      case I.UNIMPLEMENTED:
      case I.DATA_LOSS:
        return !0;

      default:
        return D();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */
function je(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return P("GRPC error has no .code"), I.UNKNOWN;
    switch (t) {
      case Ue.OK:
        return I.OK;

      case Ue.CANCELLED:
        return I.CANCELLED;

      case Ue.UNKNOWN:
        return I.UNKNOWN;

      case Ue.DEADLINE_EXCEEDED:
        return I.DEADLINE_EXCEEDED;

      case Ue.RESOURCE_EXHAUSTED:
        return I.RESOURCE_EXHAUSTED;

      case Ue.INTERNAL:
        return I.INTERNAL;

      case Ue.UNAVAILABLE:
        return I.UNAVAILABLE;

      case Ue.UNAUTHENTICATED:
        return I.UNAUTHENTICATED;

      case Ue.INVALID_ARGUMENT:
        return I.INVALID_ARGUMENT;

      case Ue.NOT_FOUND:
        return I.NOT_FOUND;

      case Ue.ALREADY_EXISTS:
        return I.ALREADY_EXISTS;

      case Ue.PERMISSION_DENIED:
        return I.PERMISSION_DENIED;

      case Ue.FAILED_PRECONDITION:
        return I.FAILED_PRECONDITION;

      case Ue.ABORTED:
        return I.ABORTED;

      case Ue.OUT_OF_RANGE:
        return I.OUT_OF_RANGE;

      case Ue.UNIMPLEMENTED:
        return I.UNIMPLEMENTED;

      case Ue.DATA_LOSS:
        return I.DATA_LOSS;

      default:
        return D();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (Ke = Ue || (Ue = {}))[Ke.OK = 0] = "OK", Ke[Ke.CANCELLED = 1] = "CANCELLED", 
Ke[Ke.UNKNOWN = 2] = "UNKNOWN", Ke[Ke.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
Ke[Ke.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Ke[Ke.NOT_FOUND = 5] = "NOT_FOUND", 
Ke[Ke.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Ke[Ke.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
Ke[Ke.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Ke[Ke.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
Ke[Ke.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Ke[Ke.ABORTED = 10] = "ABORTED", 
Ke[Ke.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Ke[Ke.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
Ke[Ke.INTERNAL = 13] = "INTERNAL", Ke[Ke.UNAVAILABLE = 14] = "UNAVAILABLE", Ke[Ke.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class We {
    constructor(t, e) {
        this.comparator = t, this.root = e || ze.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
    insert(t, e) {
        return new We(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, ze.BLACK, null, null));
    }
    // Returns a copy of the map, with the specified key removed.
    remove(t) {
        return new We(this.comparator, this.root.remove(t, this.comparator).copy(null, null, ze.BLACK, null, null));
    }
    // Returns the value of the node with the given key, or null.
    get(t) {
        let e = this.root;
        for (;!e.isEmpty(); ) {
            const n = this.comparator(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    indexOf(t) {
        // Number of nodes that were pruned when descending right
        let e = 0, n = this.root;
        for (;!n.isEmpty(); ) {
            const s = this.comparator(t, n.key);
            if (0 === s) return e + n.left.size;
            s < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }
    isEmpty() {
        return this.root.isEmpty();
    }
    // Returns the total number of nodes in the map.
    get size() {
        return this.root.size;
    }
    // Returns the minimum key in the map.
    minKey() {
        return this.root.minKey();
    }
    // Returns the maximum key in the map.
    maxKey() {
        return this.root.maxKey();
    }
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    inorderTraversal(t) {
        return this.root.inorderTraversal(t);
    }
    forEach(t) {
        this.inorderTraversal(((e, n) => (t(e, n), !1)));
    }
    toString() {
        const t = [];
        return this.inorderTraversal(((e, n) => (t.push(`${e}:${n}`), !1))), `{${t.join(", ")}}`;
    }
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    reverseTraversal(t) {
        return this.root.reverseTraversal(t);
    }
    // Returns an iterator over the SortedMap.
    getIterator() {
        return new Ge(this.root, null, this.comparator, !1);
    }
    getIteratorFrom(t) {
        return new Ge(this.root, t, this.comparator, !1);
    }
    getReverseIterator() {
        return new Ge(this.root, null, this.comparator, !0);
    }
    getReverseIteratorFrom(t) {
        return new Ge(this.root, t, this.comparator, !0);
    }
}

 // end SortedMap
// An iterator over an LLRBNode.
class Ge {
    constructor(t, e, n, s) {
        this.isReverse = s, this.nodeStack = [];
        let i = 1;
        for (;!t.isEmpty(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        s && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.isReverse ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.nodeStack.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
            this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
        }
    }
    getNext() {
        let t = this.nodeStack.pop();
        const e = {
            key: t.key,
            value: t.value
        };
        if (this.isReverse) for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), t = t.right; else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), 
        t = t.left;
        return e;
    }
    hasNext() {
        return this.nodeStack.length > 0;
    }
    peek() {
        if (0 === this.nodeStack.length) return null;
        const t = this.nodeStack[this.nodeStack.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }
}

 // end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class ze {
    constructor(t, e, n, s, i) {
        this.key = t, this.value = e, this.color = null != n ? n : ze.RED, this.left = null != s ? s : ze.EMPTY, 
        this.right = null != i ? i : ze.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
    copy(t, e, n, s, i) {
        return new ze(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != s ? s : this.left, null != i ? i : this.right);
    }
    isEmpty() {
        return !1;
    }
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    inorderTraversal(t) {
        return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
    }
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    reverseTraversal(t) {
        return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
    }
    // Returns the minimum node in the tree.
    min() {
        return this.left.isEmpty() ? this : this.left.min();
    }
    // Returns the maximum key in the tree.
    minKey() {
        return this.min().key;
    }
    // Returns the maximum key in the tree.
    maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey();
    }
    // Returns new tree, with the key/value added.
    insert(t, e, n) {
        let s = this;
        const i = n(t, s.key);
        return s = i < 0 ? s.copy(null, null, null, s.left.insert(t, e, n), null) : 0 === i ? s.copy(null, e, null, null, null) : s.copy(null, null, null, null, s.right.insert(t, e, n)), 
        s.fixUp();
    }
    removeMin() {
        if (this.left.isEmpty()) return ze.EMPTY;
        let t = this;
        return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), t = t.copy(null, null, null, t.left.removeMin(), null), 
        t.fixUp();
    }
    // Returns new tree, with the specified item removed.
    remove(t, e) {
        let n, s = this;
        if (e(t, s.key) < 0) s.left.isEmpty() || s.left.isRed() || s.left.left.isRed() || (s = s.moveRedLeft()), 
        s = s.copy(null, null, null, s.left.remove(t, e), null); else {
            if (s.left.isRed() && (s = s.rotateRight()), s.right.isEmpty() || s.right.isRed() || s.right.left.isRed() || (s = s.moveRedRight()), 
            0 === e(t, s.key)) {
                if (s.right.isEmpty()) return ze.EMPTY;
                n = s.right.min(), s = s.copy(n.key, n.value, null, null, s.right.removeMin());
            }
            s = s.copy(null, null, null, null, s.right.remove(t, e));
        }
        return s.fixUp();
    }
    isRed() {
        return this.color;
    }
    // Returns new tree after performing any needed rotations.
    fixUp() {
        let t = this;
        return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), 
        t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t;
    }
    moveRedLeft() {
        let t = this.colorFlip();
        return t.right.left.isRed() && (t = t.copy(null, null, null, null, t.right.rotateRight()), 
        t = t.rotateLeft(), t = t.colorFlip()), t;
    }
    moveRedRight() {
        let t = this.colorFlip();
        return t.left.left.isRed() && (t = t.rotateRight(), t = t.colorFlip()), t;
    }
    rotateLeft() {
        const t = this.copy(null, null, ze.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, t, null);
    }
    rotateRight() {
        const t = this.copy(null, null, ze.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, t);
    }
    colorFlip() {
        const t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }
    // For testing.
    checkMaxDepth() {
        const t = this.check();
        return Math.pow(2, t) <= this.size + 1;
    }
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    check() {
        if (this.isRed() && this.left.isRed()) throw D();
        if (this.right.isRed()) throw D();
        const t = this.left.check();
        if (t !== this.right.check()) throw D();
        return t + (this.isRed() ? 0 : 1);
    }
}

 // end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ze.EMPTY = null, ze.RED = !0, ze.BLACK = !1;

// end LLRBEmptyNode
ze.EMPTY = new 
// Represents an empty node (a leaf node in the Red-Black Tree).
class {
    constructor() {
        this.size = 0;
    }
    get key() {
        throw D();
    }
    get value() {
        throw D();
    }
    get color() {
        throw D();
    }
    get left() {
        throw D();
    }
    get right() {
        throw D();
    }
    // Returns a copy of the current node.
    copy(t, e, n, s, i) {
        return this;
    }
    // Returns a copy of the tree, with the specified key/value added.
    insert(t, e, n) {
        return new ze(t, e);
    }
    // Returns a copy of the tree, with the specified key removed.
    remove(t, e) {
        return this;
    }
    isEmpty() {
        return !0;
    }
    inorderTraversal(t) {
        return !1;
    }
    reverseTraversal(t) {
        return !1;
    }
    minKey() {
        return null;
    }
    maxKey() {
        return null;
    }
    isRed() {
        return !1;
    }
    // For testing.
    checkMaxDepth() {
        return !0;
    }
    check() {
        return 0;
    }
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
class He {
    constructor(t) {
        this.comparator = t, this.data = new We(this.comparator);
    }
    has(t) {
        return null !== this.data.get(t);
    }
    first() {
        return this.data.minKey();
    }
    last() {
        return this.data.maxKey();
    }
    get size() {
        return this.data.size;
    }
    indexOf(t) {
        return this.data.indexOf(t);
    }
    /** Iterates elements in order defined by "comparator" */    forEach(t) {
        this.data.inorderTraversal(((e, n) => (t(e), !1)));
    }
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */    forEachInRange(t, e) {
        const n = this.data.getIteratorFrom(t[0]);
        for (;n.hasNext(); ) {
            const s = n.getNext();
            if (this.comparator(s.key, t[1]) >= 0) return;
            e(s.key);
        }
    }
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */    forEachWhile(t, e) {
        let n;
        for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) {
            if (!t(n.getNext().key)) return;
        }
    }
    /** Finds the least element greater than or equal to `elem`. */    firstAfterOrEqual(t) {
        const e = this.data.getIteratorFrom(t);
        return e.hasNext() ? e.getNext().key : null;
    }
    getIterator() {
        return new Je(this.data.getIterator());
    }
    getIteratorFrom(t) {
        return new Je(this.data.getIteratorFrom(t));
    }
    /** Inserts or updates an element */    add(t) {
        return this.copy(this.data.remove(t).insert(t, !0));
    }
    /** Deletes an element */    delete(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }
    isEmpty() {
        return this.data.isEmpty();
    }
    unionWith(t) {
        let e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((t => {
            e = e.add(t);
        })), e;
    }
    isEqual(t) {
        if (!(t instanceof He)) return !1;
        if (this.size !== t.size) return !1;
        const e = this.data.getIterator(), n = t.data.getIterator();
        for (;e.hasNext(); ) {
            const t = e.getNext().key, s = n.getNext().key;
            if (0 !== this.comparator(t, s)) return !1;
        }
        return !0;
    }
    toArray() {
        const t = [];
        return this.forEach((e => {
            t.push(e);
        })), t;
    }
    toString() {
        const t = [];
        return this.forEach((e => t.push(e))), "SortedSet(" + t.toString() + ")";
    }
    copy(t) {
        const e = new He(this.comparator);
        return e.data = t, e;
    }
}

class Je {
    constructor(t) {
        this.iter = t;
    }
    getNext() {
        return this.iter.getNext().key;
    }
    hasNext() {
        return this.iter.hasNext();
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ye = new We(rt.comparator);

function Xe() {
    return Ye;
}

const Ze = new We(rt.comparator);

function tn() {
    return Ze;
}

const en = new We(rt.comparator);

function nn() {
    return en;
}

const sn = new He(rt.comparator);

function rn(...t) {
    let e = sn;
    for (const n of t) e = e.add(n);
    return e;
}

const on = new He(F);

function cn() {
    return on;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class un {
    constructor(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    s, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = s, 
        this.resolvedLimboDocuments = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
    static createSynthesizedRemoteEventForCurrentChange(t, e) {
        const n = new Map;
        return n.set(t, an.createSynthesizedTargetChangeForCurrentChange(t, e)), new un(L.min(), n, cn(), Xe(), rn());
    }
}

/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */ class an {
    constructor(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    s, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = s, 
        this.removedDocuments = i;
    }
    /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */    static createSynthesizedTargetChangeForCurrentChange(t, e) {
        return new an(z.EMPTY_BYTE_STRING, e, rn(), rn(), rn());
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class hn {
    constructor(
    /** The new document applies to all of these targets. */
    t, 
    /** The new document is removed from all of these targets. */
    e, 
    /** The key of the document for this change. */
    n, 
    /**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
    s) {
        this.v = t, this.removedTargetIds = e, this.key = n, this.P = s;
    }
}

class ln {
    constructor(t, e) {
        this.targetId = t, this.V = e;
    }
}

class fn {
    constructor(
    /** What kind of change occurred to the watch target. */
    t, 
    /** The target IDs that were added/removed/set. */
    e, 
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
    n = z.EMPTY_BYTE_STRING
    /** An RPC error indicating why the watch failed. */ , s = null) {
        this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = s;
    }
}

/** Tracks the internal state of a Watch target. */ class dn {
    constructor() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.S = 0, 
        /**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */
        this.D = mn(), 
        /** See public getters for explanations of these fields. */
        this.C = z.EMPTY_BYTE_STRING, this.N = !1, 
        /**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */
        this.k = !0;
    }
    /**
     * Whether this target has been marked 'current'.
     *
     * 'Current' has special meaning in the RPC protocol: It implies that the
     * Watch backend has sent us all changes up to the point at which the target
     * was added and that the target is consistent with the rest of the watch
     * stream.
     */    get current() {
        return this.N;
    }
    /** The last resume token sent to us for this target. */    get resumeToken() {
        return this.C;
    }
    /** Whether this target has pending target adds or target removes. */    get F() {
        return 0 !== this.S;
    }
    /** Whether we have modified any state that should trigger a snapshot. */    get $() {
        return this.k;
    }
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */    O(t) {
        t.approximateByteSize() > 0 && (this.k = !0, this.C = t);
    }
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */    M() {
        let t = rn(), e = rn(), n = rn();
        return this.D.forEach(((s, i) => {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(s);
                break;

              case 2 /* Modified */ :
                e = e.add(s);
                break;

              case 1 /* Removed */ :
                n = n.add(s);
                break;

              default:
                D();
            }
        })), new an(this.C, this.N, t, e, n);
    }
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */    L() {
        this.k = !1, this.D = mn();
    }
    B(t, e) {
        this.k = !0, this.D = this.D.insert(t, e);
    }
    q(t) {
        this.k = !0, this.D = this.D.remove(t);
    }
    U() {
        this.S += 1;
    }
    K() {
        this.S -= 1;
    }
    j() {
        this.k = !0, this.N = !0;
    }
}

/**
 * A helper class to accumulate watch changes into a RemoteEvent.
 */
class wn {
    constructor(t) {
        this.W = t, 
        /** The internal state of all tracked targets. */
        this.G = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.H = Xe(), 
        /** A mapping of document keys to their set of target IDs. */
        this.J = _n(), 
        /**
         * A list of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */
        this.Y = new He(F);
    }
    /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */    X(t) {
        for (const e of t.v) t.P && t.P.isFoundDocument() ? this.Z(e, t.P) : this.tt(e, t.key, t.P);
        for (const e of t.removedTargetIds) this.tt(e, t.key, t.P);
    }
    /** Processes and adds the WatchTargetChange to the current set of changes. */    et(t) {
        this.forEachTarget(t, (e => {
            const n = this.nt(e);
            switch (t.state) {
              case 0 /* NoChange */ :
                this.st(e) && n.O(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                n.K(), n.F || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                n.L(), n.O(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                n.K(), n.F || this.removeTarget(e);
                break;

              case 3 /* Current */ :
                this.st(e) && (n.j(), n.O(t.resumeToken));
                break;

              case 4 /* Reset */ :
                this.st(e) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                this.it(e), n.O(t.resumeToken));
                break;

              default:
                D();
            }
        }));
    }
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */    forEachTarget(t, e) {
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.G.forEach(((t, n) => {
            this.st(n) && e(n);
        }));
    }
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */    rt(t) {
        const e = t.targetId, n = t.V.count, s = this.ot(e);
        if (s) {
            const t = s.target;
            if (Vt(t)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                const n = new rt(t.path);
                this.tt(e, n, It.newNoDocument(n, L.min()));
            } else C(1 === n); else {
                this.ct(e) !== n && (
                // Existence filter mismatch: We reset the mapping and raise a new
                // snapshot with `isFromCache:true`.
                this.it(e), this.Y = this.Y.add(e));
            }
        }
    }
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */    ut(t) {
        const e = new Map;
        this.G.forEach(((n, s) => {
            const i = this.ot(s);
            if (i) {
                if (n.current && Vt(i.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    const e = new rt(i.target.path);
                    null !== this.H.get(e) || this.at(s, e) || this.tt(s, e, It.newNoDocument(e, t));
                }
                n.$ && (e.set(s, n.M()), n.L());
            }
        }));
        let n = rn();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.J.forEach(((t, e) => {
            let s = !0;
            e.forEachWhile((t => {
                const e = this.ot(t);
                return !e || 2 /* LimboResolution */ === e.purpose || (s = !1, !1);
            })), s && (n = n.add(t));
        }));
        const s = new un(t, e, this.Y, this.H, n);
        return this.H = Xe(), this.J = _n(), this.Y = new He(F), s;
    }
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    Z(t, e) {
        if (!this.st(t)) return;
        const n = this.at(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
        this.nt(t).B(e.key, n), this.H = this.H.insert(e.key, e), this.J = this.J.insert(e.key, this.ht(e.key).add(t));
    }
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    tt(t, e, n) {
        if (!this.st(t)) return;
        const s = this.nt(t);
        this.at(t, e) ? s.B(e, 1 /* Removed */) : 
        // The document may have entered and left the target before we raised a
        // snapshot, so we can just ignore the change.
        s.q(e), this.J = this.J.insert(e, this.ht(e).delete(t)), n && (this.H = this.H.insert(e, n));
    }
    removeTarget(t) {
        this.G.delete(t);
    }
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */    ct(t) {
        const e = this.nt(t).M();
        return this.W.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size;
    }
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */    U(t) {
        this.nt(t).U();
    }
    nt(t) {
        let e = this.G.get(t);
        return e || (e = new dn, this.G.set(t, e)), e;
    }
    ht(t) {
        let e = this.J.get(t);
        return e || (e = new He(F), this.J = this.J.insert(t, e)), e;
    }
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */    st(t) {
        const e = null !== this.ot(t);
        return e || v("WatchChangeAggregator", "Detected inactive target", t), e;
    }
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */    ot(t) {
        const e = this.G.get(t);
        return e && e.F ? null : this.W.lt(t);
    }
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */    it(t) {
        this.G.set(t, new dn);
        this.W.getRemoteKeysForTarget(t).forEach((e => {
            this.tt(t, e, /*updatedDocument=*/ null);
        }));
    }
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */    at(t, e) {
        return this.W.getRemoteKeysForTarget(t).has(e);
    }
}

function _n() {
    return new We(rt.comparator);
}

function mn() {
    return new We(rt.comparator);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yn = (() => {
    const t = {
        asc: "ASCENDING",
        desc: "DESCENDING"
    };
    return t;
})(), gn = (() => {
    const t = {
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "!=": "NOT_EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        in: "IN",
        "not-in": "NOT_IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
    };
    return t;
})();

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
class pn {
    constructor(t, e) {
        this.databaseId = t, this.I = e;
    }
}

/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */
function En(t, e) {
    if (t.I) {
        return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
    }
    return {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */
function Tn(t, e) {
    return t.I ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function In(t, e) {
    return En(t, e.toTimestamp());
}

function An(t) {
    return C(!!t), L.fromTimestamp(function(t) {
        const e = J(t);
        return new M(e.seconds, e.nanos);
    }(t));
}

function Rn(t, e) {
    return function(t) {
        return new Q([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).canonicalString();
}

function bn(t) {
    const e = Q.fromString(t);
    return C(Zn(e)), e;
}

function vn(t, e) {
    return Rn(t.databaseId, e.path);
}

function Pn(t, e) {
    const n = bn(e);
    if (n.get(1) !== t.databaseId.projectId) throw new A(I.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
    if (n.get(3) !== t.databaseId.database) throw new A(I.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
    return new rt(Cn(n));
}

function Vn(t, e) {
    return Rn(t.databaseId, e);
}

function Sn(t) {
    const e = bn(t);
    // In v1beta1 queries for collections at the root did not have a trailing
    // "/documents". In v1 all resource paths contain "/documents". Preserve the
    // ability to read the v1beta1 form for compatibility with queries persisted
    // in the local target cache.
        return 4 === e.length ? Q.emptyPath() : Cn(e);
}

function Dn(t) {
    return new Q([ "projects", t.databaseId.projectId, "databases", t.databaseId.database ]).canonicalString();
}

function Cn(t) {
    return C(t.length > 4 && "documents" === t.get(4)), t.popFirst(5);
}

/** Creates a Document proto from key and fields (but no create/update time) */ function Nn(t, e, n) {
    return {
        name: vn(t, e),
        fields: n.value.mapValue.fields
    };
}

function xn(t, e, n) {
    const s = Pn(t, e.name), i = An(e.updateTime), r = new Et({
        mapValue: {
            fields: e.fields
        }
    }), o = It.newFoundDocument(s, i, r);
    return n && o.setHasCommittedMutations(), n ? o.setHasCommittedMutations() : o;
}

function kn(t, e) {
    return "found" in e ? function(t, e) {
        C(!!e.found), e.found.name, e.found.updateTime;
        const n = Pn(t, e.found.name), s = An(e.found.updateTime), i = new Et({
            mapValue: {
                fields: e.found.fields
            }
        });
        return It.newFoundDocument(n, s, i);
    }(t, e) : "missing" in e ? function(t, e) {
        C(!!e.missing), C(!!e.readTime);
        const n = Pn(t, e.missing), s = An(e.readTime);
        return It.newNoDocument(n, s);
    }(t, e) : D();
}

function Fn(t, e) {
    let n;
    if ("targetChange" in e) {
        e.targetChange;
        // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
        // if unset
        const s = function(t) {
            return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : D();
        }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], r = function(t, e) {
            return t.I ? (C(void 0 === e || "string" == typeof e), z.fromBase64String(e || "")) : (C(void 0 === e || e instanceof Uint8Array), 
            z.fromUint8Array(e || new Uint8Array));
        }(t, e.targetChange.resumeToken), o = e.targetChange.cause, c = o && function(t) {
            const e = void 0 === t.code ? I.UNKNOWN : je(t.code);
            return new A(e, t.message || "");
        }
        /**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */ (o);
        n = new fn(s, i, r, c || null);
    } else if ("documentChange" in e) {
        e.documentChange;
        const s = e.documentChange;
        s.document, s.document.name, s.document.updateTime;
        const i = Pn(t, s.document.name), r = An(s.document.updateTime), o = new Et({
            mapValue: {
                fields: s.document.fields
            }
        }), c = It.newFoundDocument(i, r, o), u = s.targetIds || [], a = s.removedTargetIds || [];
        n = new hn(u, a, c.key, c);
    } else if ("documentDelete" in e) {
        e.documentDelete;
        const s = e.documentDelete;
        s.document;
        const i = Pn(t, s.document), r = s.readTime ? An(s.readTime) : L.min(), o = It.newNoDocument(i, r), c = s.removedTargetIds || [];
        n = new hn([], c, o.key, o);
    } else if ("documentRemove" in e) {
        e.documentRemove;
        const s = e.documentRemove;
        s.document;
        const i = Pn(t, s.document), r = s.removedTargetIds || [];
        n = new hn([], r, i, null);
    } else {
        if (!("filter" in e)) return D();
        {
            e.filter;
            const t = e.filter;
            t.targetId;
            const s = t.count || 0, i = new qe(s), r = t.targetId;
            n = new ln(r, i);
        }
    }
    return n;
}

function $n(t, e) {
    let n;
    if (e instanceof ke) n = {
        update: Nn(t, e.key, e.value)
    }; else if (e instanceof Le) n = {
        delete: vn(t, e.key)
    }; else if (e instanceof Fe) n = {
        update: Nn(t, e.key, e.data),
        updateMask: Xn(e.fieldMask)
    }; else {
        if (!(e instanceof Be)) return D();
        n = {
            verify: vn(t, e.key)
        };
    }
    return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((t => function(t, e) {
        const n = e.transform;
        if (n instanceof _e) return {
            fieldPath: e.field.canonicalString(),
            setToServerValue: "REQUEST_TIME"
        };
        if (n instanceof me) return {
            fieldPath: e.field.canonicalString(),
            appendMissingElements: {
                values: n.elements
            }
        };
        if (n instanceof ge) return {
            fieldPath: e.field.canonicalString(),
            removeAllFromArray: {
                values: n.elements
            }
        };
        if (n instanceof Ee) return {
            fieldPath: e.field.canonicalString(),
            increment: n.A
        };
        throw D();
    }(0, t)))), e.precondition.isNone || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: In(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : D();
    }(t, e.precondition)), n;
}

function Mn(t, e) {
    return t && t.length > 0 ? (C(void 0 !== e), t.map((t => function(t, e) {
        // NOTE: Deletes don't have an updateTime.
        let n = t.updateTime ? An(t.updateTime) : An(e);
        return n.isEqual(L.min()) && (
        // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        n = An(e)), new be(n, t.transformResults || []);
    }(t, e)))) : [];
}

function Ln(t, e) {
    return {
        documents: [ Vn(t, e.path) ]
    };
}

function Bn(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    const n = {
        structuredQuery: {}
    }, s = e.path;
    null !== e.collectionGroup ? (n.parent = Vn(t, s), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = Vn(t, s.popLast()), n.structuredQuery.from = [ {
        collectionId: s.lastSegment()
    } ]);
    const i = function(t) {
        if (0 === t.length) return;
        const e = t.map((t => 
        // visible for testing
        function(t) {
            if ("==" /* EQUAL */ === t.op) {
                if (yt(t.value)) return {
                    unaryFilter: {
                        field: zn(t.field),
                        op: "IS_NAN"
                    }
                };
                if (mt(t.value)) return {
                    unaryFilter: {
                        field: zn(t.field),
                        op: "IS_NULL"
                    }
                };
            } else if ("!=" /* NOT_EQUAL */ === t.op) {
                if (yt(t.value)) return {
                    unaryFilter: {
                        field: zn(t.field),
                        op: "IS_NOT_NAN"
                    }
                };
                if (mt(t.value)) return {
                    unaryFilter: {
                        field: zn(t.field),
                        op: "IS_NOT_NULL"
                    }
                };
            }
            return {
                fieldFilter: {
                    field: zn(t.field),
                    op: Gn(t.op),
                    value: t.value
                }
            };
        }(t)));
        if (1 === e.length) return e[0];
        return {
            compositeFilter: {
                op: "AND",
                filters: e
            }
        };
    }(e.filters);
    i && (n.structuredQuery.where = i);
    const r = function(t) {
        if (0 === t.length) return;
        return t.map((t => 
        // visible for testing
        function(t) {
            return {
                field: zn(t.field),
                direction: Wn(t.dir)
            };
        }(t)));
    }(e.orderBy);
    r && (n.structuredQuery.orderBy = r);
    const o = function(t, e) {
        return t.I || nt(e) ? e : {
            value: e
        };
    }
    /**
 * Returns a number (or null) from a google.protobuf.Int32Value proto.
 */ (t, e.limit);
    return null !== o && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = Qn(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = Qn(e.endAt)), n;
}

function qn(t) {
    let e = Sn(t.parent);
    const n = t.structuredQuery, s = n.from ? n.from.length : 0;
    let i = null;
    if (s > 0) {
        C(1 === s);
        const t = n.from[0];
        t.allDescendants ? i = t.collectionId : e = e.child(t.collectionId);
    }
    let r = [];
    n.where && (r = Kn(n.where));
    let o = [];
    n.orderBy && (o = n.orderBy.map((t => function(t) {
        return new qt(Hn(t.field), 
        // visible for testing
        function(t) {
            switch (t) {
              case "ASCENDING":
                return "asc" /* ASCENDING */;

              case "DESCENDING":
                return "desc" /* DESCENDING */;

              default:
                return;
            }
        }
        // visible for testing
        (t.direction));
    }(t))));
    let c = null;
    n.limit && (c = function(t) {
        let e;
        return e = "object" == typeof t ? t.value : t, nt(e) ? null : e;
    }(n.limit));
    let u = null;
    n.startAt && (u = jn(n.startAt));
    let a = null;
    return n.endAt && (a = jn(n.endAt)), Wt(e, i, o, r, c, "F" /* First */ , u, a);
}

function Un(t, e) {
    const n = function(t, e) {
        switch (e) {
          case 0 /* Listen */ :
            return null;

          case 1 /* ExistenceFilterMismatch */ :
            return "existence-filter-mismatch";

          case 2 /* LimboResolution */ :
            return "limbo-document";

          default:
            return D();
        }
    }(0, e.purpose);
    return null == n ? null : {
        "goog-listen-tags": n
    };
}

function Kn(t) {
    return t ? void 0 !== t.unaryFilter ? [ Yn(t) ] : void 0 !== t.fieldFilter ? [ Jn(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((t => Kn(t))).reduce(((t, e) => t.concat(e))) : D() : [];
}

function Qn(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function jn(t) {
    const e = !!t.before, n = t.values || [];
    return new Lt(n, e);
}

// visible for testing
function Wn(t) {
    return yn[t];
}

function Gn(t) {
    return gn[t];
}

function zn(t) {
    return {
        fieldPath: t.canonicalString()
    };
}

function Hn(t) {
    return W.fromServerFormat(t.fieldPath);
}

function Jn(t) {
    return St.create(Hn(t.fieldFilter.field), function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "NOT_EQUAL":
            return "!=" /* NOT_EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "NOT_IN":
            return "not-in" /* NOT_IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return D();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function Yn(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        const e = Hn(t.unaryFilter.field);
        return St.create(e, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        const n = Hn(t.unaryFilter.field);
        return St.create(n, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "IS_NOT_NAN":
        const s = Hn(t.unaryFilter.field);
        return St.create(s, "!=" /* NOT_EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NOT_NULL":
        const i = Hn(t.unaryFilter.field);
        return St.create(i, "!=" /* NOT_EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "OPERATOR_UNSPECIFIED":
      default:
        return D();
    }
}

function Xn(t) {
    const e = [];
    return t.fields.forEach((t => e.push(t.canonicalString()))), {
        fieldPaths: e
    };
}

function Zn(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

// Visible for testing
const Ts = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */
class Is {
    constructor() {
        this.onCommittedListeners = [];
    }
    addOnCommittedListener(t) {
        this.onCommittedListeners.push(t);
    }
    raiseOnCommittedEvent() {
        this.onCommittedListeners.forEach((t => t()));
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class As {
    constructor() {
        this.promise = new Promise(((t, e) => {
            this.resolve = t, this.reject = e;
        }));
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class Rs {
    constructor(t) {
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
        this.nextCallback = null, this.catchCallback = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.isDone = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.callbackAttached = !1, t((t => {
            this.isDone = !0, this.result = t, this.nextCallback && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            this.nextCallback(t);
        }), (t => {
            this.isDone = !0, this.error = t, this.catchCallback && this.catchCallback(t);
        }));
    }
    catch(t) {
        return this.next(void 0, t);
    }
    next(t, e) {
        return this.callbackAttached && D(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t, this.result) : new Rs(((n, s) => {
            this.nextCallback = e => {
                this.wrapSuccess(t, e).next(n, s);
            }, this.catchCallback = t => {
                this.wrapFailure(e, t).next(n, s);
            };
        }));
    }
    toPromise() {
        return new Promise(((t, e) => {
            this.next(t, e);
        }));
    }
    wrapUserFunction(t) {
        try {
            const e = t();
            return e instanceof Rs ? e : Rs.resolve(e);
        } catch (t) {
            return Rs.reject(t);
        }
    }
    wrapSuccess(t, e) {
        return t ? this.wrapUserFunction((() => t(e))) : Rs.resolve(e);
    }
    wrapFailure(t, e) {
        return t ? this.wrapUserFunction((() => t(e))) : Rs.reject(e);
    }
    static resolve(t) {
        return new Rs(((e, n) => {
            e(t);
        }));
    }
    static reject(t) {
        return new Rs(((e, n) => {
            n(t);
        }));
    }
    static waitFor(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t) {
        return new Rs(((e, n) => {
            let s = 0, i = 0, r = !1;
            t.forEach((t => {
                ++s, t.next((() => {
                    ++i, r && i === s && e();
                }), (t => n(t)));
            })), r = !0, i === s && e();
        }));
    }
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */    static or(t) {
        let e = Rs.resolve(!1);
        for (const n of t) e = e.next((t => t ? Rs.resolve(t) : n()));
        return e;
    }
    static forEach(t, e) {
        const n = [];
        return t.forEach(((t, s) => {
            n.push(e.call(this, t, s));
        })), this.waitFor(n);
    }
}

/** Verifies whether `e` is an IndexedDbTransactionError. */ function Ss(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A batch of mutations that will be sent as one unit to the backend.
 */ class $s {
    /**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    constructor(t, e, n, s) {
        this.batchId = t, this.localWriteTime = e, this.baseMutations = n, this.mutations = s;
    }
    /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */    applyToRemoteDocument(t, e) {
        const n = e.mutationResults;
        for (let e = 0; e < this.mutations.length; e++) {
            const s = this.mutations[e];
            if (s.key.isEqual(t.key)) {
                Se(s, t, n[e]);
            }
        }
    }
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     */    applyToLocalView(t) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (const e of this.baseMutations) e.key.isEqual(t.key) && De(e, t, this.localWriteTime);
        // Second, apply all user-provided mutations.
                for (const e of this.mutations) e.key.isEqual(t.key) && De(e, t, this.localWriteTime);
    }
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */    applyToLocalDocumentSet(t) {
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
        this.mutations.forEach((e => {
            const n = t.get(e.key), s = n;
            // TODO(mutabledocuments): This method should take a MutableDocumentMap
            // and we should remove this cast.
                        this.applyToLocalView(s), n.isValidDocument() || s.convertToNoDocument(L.min());
        }));
    }
    keys() {
        return this.mutations.reduce(((t, e) => t.add(e.key)), rn());
    }
    isEqual(t) {
        return this.batchId === t.batchId && $(this.mutations, t.mutations, ((t, e) => Ne(t, e))) && $(this.baseMutations, t.baseMutations, ((t, e) => Ne(t, e)));
    }
}

/** The result of applying a mutation batch to the backend. */ class Os {
    constructor(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    s) {
        this.batch = t, this.commitVersion = e, this.mutationResults = n, this.docVersions = s;
    }
    /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */    static from(t, e, n) {
        C(t.mutations.length === n.length);
        let s = nn();
        const i = t.mutations;
        for (let t = 0; t < i.length; t++) s = s.insert(i[t].key, n[t].version);
        return new Os(t, e, n, s);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable set of metadata that the local store tracks for each target.
 */ class Ms {
    constructor(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    s, 
    /** The latest snapshot version seen for this target. */
    i = L.min()
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , r = L.min()
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , o = z.EMPTY_BYTE_STRING) {
        this.target = t, this.targetId = e, this.purpose = n, this.sequenceNumber = s, this.snapshotVersion = i, 
        this.lastLimboFreeSnapshotVersion = r, this.resumeToken = o;
    }
    /** Creates a new target data instance with an updated sequence number. */    withSequenceNumber(t) {
        return new Ms(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */    withResumeToken(t, e) {
        return new Ms(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t);
    }
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */    withLastLimboFreeSnapshotVersion(t) {
        return new Ms(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Serializer for values stored in the LocalStore. */ class Ls {
    constructor(t) {
        this.Lt = t;
    }
}

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */
function Hs(t) {
    const e = qn({
        parent: t.parent,
        structuredQuery: t.structuredQuery
    });
    return "LAST" === t.limitType ? ee(e, e.limit, "L" /* Last */) : e;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ class Zs {
    constructor() {
        this.Bt = new ti;
    }
    addToCollectionParentIndex(t, e) {
        return this.Bt.add(e), Rs.resolve();
    }
    getCollectionParents(t, e) {
        return Rs.resolve(this.Bt.getEntries(e));
    }
}

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */ class ti {
    constructor() {
        this.index = {};
    }
    // Returns false if the entry already existed.
    add(t) {
        const e = t.lastSegment(), n = t.popLast(), s = this.index[e] || new He(Q.comparator), i = !s.has(n);
        return this.index[e] = s.add(n), i;
    }
    has(t) {
        const e = t.lastSegment(), n = t.popLast(), s = this.index[e];
        return s && s.has(n);
    }
    getEntries(t) {
        return (this.index[t] || new He(Q.comparator)).toArray();
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Offset to ensure non-overlapping target ids. */
/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */
class fi {
    constructor(t) {
        this.Ht = t;
    }
    next() {
        return this.Ht += 2, this.Ht;
    }
    static Jt() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new fi(0);
    }
    static Yt() {
        // Sync engine assigns target IDs for limbo document detection.
        return new fi(-1);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ async function yi(t) {
    if (t.code !== I.FAILED_PRECONDITION || t.message !== Ts) throw t;
    v("LocalStore", "Unexpectedly lost primary lease");
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class Ri {
    constructor(t, e) {
        this.mapKeyFn = t, this.equalsFn = e, 
        /**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */
        this.inner = {};
    }
    /** Get a value for this key, or undefined if it does not exist. */    get(t) {
        const e = this.mapKeyFn(t), n = this.inner[e];
        if (void 0 !== n) for (const [e, s] of n) if (this.equalsFn(e, t)) return s;
    }
    has(t) {
        return void 0 !== this.get(t);
    }
    /** Put this key and value in the map. */    set(t, e) {
        const n = this.mapKeyFn(t), s = this.inner[n];
        if (void 0 !== s) {
            for (let n = 0; n < s.length; n++) if (this.equalsFn(s[n][0], t)) return void (s[n] = [ t, e ]);
            s.push([ t, e ]);
        } else this.inner[n] = [ [ t, e ] ];
    }
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */    delete(t) {
        const e = this.mapKeyFn(t), n = this.inner[e];
        if (void 0 === n) return !1;
        for (let s = 0; s < n.length; s++) if (this.equalsFn(n[s][0], t)) return 1 === n.length ? delete this.inner[e] : n.splice(s, 1), 
        !0;
        return !1;
    }
    forEach(t) {
        q(this.inner, ((e, n) => {
            for (const [e, s] of n) t(e, s);
        }));
    }
    isEmpty() {
        return U(this.inner);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ class bi {
    constructor() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.changes = new Ri((t => t.toString()), ((t, e) => t.isEqual(e))), this.changesApplied = !1;
    }
    getReadTime(t) {
        const e = this.changes.get(t);
        return e ? e.readTime : L.min();
    }
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */    addEntry(t, e) {
        this.assertNotApplied(), this.changes.set(t.key, {
            document: t,
            readTime: e
        });
    }
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */    removeEntry(t, e = null) {
        this.assertNotApplied(), this.changes.set(t, {
            document: It.newInvalidDocument(t),
            readTime: e
        });
    }
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */    getEntry(t, e) {
        this.assertNotApplied();
        const n = this.changes.get(e);
        return void 0 !== n ? Rs.resolve(n.document) : this.getFromCache(t, e);
    }
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached documents, indexed by key. If an entry cannot be
     *     found, the corresponding key will be mapped to an invalid document.
     */    getEntries(t, e) {
        return this.getAllFromCache(t, e);
    }
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */    apply(t) {
        return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t);
    }
    /** Helper to assert this.changes is not null  */    assertNotApplied() {}
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mi {
    constructor(t, e) {
        this.progress = t, this.wn = e;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class Li {
    constructor(t, e, n) {
        this.Ue = t, this._n = e, this.Ut = n;
    }
    /**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */    mn(t, e) {
        return this._n.getAllMutationBatchesAffectingDocumentKey(t, e).next((n => this.yn(t, e, n)));
    }
    /** Internal version of `getDocument` that allows reusing batches. */    yn(t, e, n) {
        return this.Ue.getEntry(t, e).next((t => {
            for (const e of n) e.applyToLocalView(t);
            return t;
        }));
    }
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    gn(t, e) {
        t.forEach(((t, n) => {
            for (const t of e) t.applyToLocalView(n);
        }));
    }
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */    pn(t, e) {
        return this.Ue.getEntries(t, e).next((e => this.En(t, e).next((() => e))));
    }
    /**
     * Applies the local view the given `baseDocs` without retrieving documents
     * from the local store.
     */    En(t, e) {
        return this._n.getAllMutationBatchesAffectingDocumentKeys(t, e).next((t => this.gn(e, t)));
    }
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param sinceReadTime - If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */    getDocumentsMatchingQuery(t, e, n) {
        /**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */
        return function(t) {
            return rt.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(e) ? this.Tn(t, e.path) : Xt(e) ? this.In(t, e, n) : this.An(t, e, n);
    }
    Tn(t, e) {
        // Just do a simple document lookup.
        return this.mn(t, new rt(e)).next((t => {
            let e = tn();
            return t.isFoundDocument() && (e = e.insert(t.key, t)), e;
        }));
    }
    In(t, e, n) {
        const s = e.collectionGroup;
        let i = tn();
        return this.Ut.getCollectionParents(t, s).next((r => Rs.forEach(r, (r => {
            const o = function(t, e) {
                return new jt(e, 
                /*collectionGroup=*/ null, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
            }
            /**
 * Returns true if this query does not specify any query constraints that
 * could remove results.
 */ (e, r.child(s));
            return this.An(t, o, n).next((t => {
                t.forEach(((t, e) => {
                    i = i.insert(t, e);
                }));
            }));
        })).next((() => i))));
    }
    An(t, e, n) {
        // Query the remote documents and overlay mutations.
        let s, i;
        return this.Ue.getDocumentsMatchingQuery(t, e, n).next((n => (s = n, this._n.getAllMutationBatchesAffectingQuery(t, e)))).next((e => (i = e, 
        this.Rn(t, i, s).next((t => {
            s = t;
            for (const t of i) for (const e of t.mutations) {
                const n = e.key;
                let i = s.get(n);
                null == i && (
                // Create invalid document to apply mutations on top of
                i = It.newInvalidDocument(n), s = s.insert(n, i)), De(e, i, t.localWriteTime), i.isFoundDocument() || (s = s.remove(n));
            }
        }))))).next((() => (
        // Finally, filter out any documents that don't actually match
        // the query.
        s.forEach(((t, n) => {
            re(e, n) || (s = s.remove(t));
        })), s)));
    }
    Rn(t, e, n) {
        let s = rn();
        for (const t of e) for (const e of t.mutations) e instanceof Fe && null === n.get(e.key) && (s = s.add(e.key));
        let i = n;
        return this.Ue.getEntries(t, s).next((t => (t.forEach(((t, e) => {
            e.isFoundDocument() && (i = i.insert(t, e));
        })), i)));
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class Bi {
    constructor(t, e, n, s) {
        this.targetId = t, this.fromCache = e, this.bn = n, this.vn = s;
    }
    static Pn(t, e) {
        let n = rn(), s = rn();
        for (const t of e.docChanges) switch (t.type) {
          case 0 /* Added */ :
            n = n.add(t.doc.key);
            break;

          case 1 /* Removed */ :
            s = s.add(t.doc.key);
 // do nothing
                }
        return new Bi(t, e.fromCache, n, s);
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A query engine that takes advantage of the target document mapping in the
 * QueryCache. Query execution is optimized by only reading the documents that
 * previously matched a query plus any documents that were edited after the
 * query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */ class qi {
    /** Sets the document view to query against. */
    Vn(t) {
        this.Sn = t;
    }
    /** Returns all local documents matching the specified query. */    getDocumentsMatchingQuery(t, e, n, s) {
        // Queries that match all documents don't benefit from using
        // key-based lookups. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
        return function(t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.explicitOrderBy.length || 1 === t.explicitOrderBy.length && t.explicitOrderBy[0].field.isKeyField());
        }(e) || n.isEqual(L.min()) ? this.Dn(t, e) : this.Sn.pn(t, s).next((i => {
            const r = this.Cn(e, i);
            return (zt(e) || Ht(e)) && this.Nn(e.limitType, r, s, n) ? this.Dn(t, e) : (b() <= LogLevel.DEBUG && v("QueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), ie(e)), 
            this.Sn.getDocumentsMatchingQuery(t, e, n).next((t => (
            // We merge `previousResults` into `updateResults`, since
            // `updateResults` is already a DocumentMap. If a document is
            // contained in both lists, then its contents are the same.
            r.forEach((e => {
                t = t.insert(e.key, e);
            })), t))));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }
    /** Applies the query filter and sorting to the provided documents.  */    Cn(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        let n = new He(oe(t));
        return e.forEach(((e, s) => {
            re(t, s) && (n = n.add(s));
        })), n;
    }
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */    Nn(t, e, n, s) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                const i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
    }
    Dn(t, e) {
        return b() <= LogLevel.DEBUG && v("QueryEngine", "Using full collection scan to execute query:", ie(e)), 
        this.Sn.getDocumentsMatchingQuery(t, e, L.min());
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */
class Ui {
    constructor(
    /** Manages our in-memory or durable persistence. */
    t, e, n, s) {
        this.persistence = t, this.xn = e, this.R = s, 
        /**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */
        this.kn = new We(F), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.Fn = new Ri((t => bt(t)), Pt), 
        /**
         * The read time of the last entry processed by `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */
        this.$n = L.min(), this._n = t.getMutationQueue(n), this.On = t.getRemoteDocumentCache(), 
        this.qe = t.getTargetCache(), this.Mn = new Li(this.On, this._n, this.persistence.getIndexManager()), 
        this.Ke = t.getBundleCache(), this.xn.Vn(this.Mn);
    }
    collectGarbage(t) {
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e => t.collect(e, this.kn)));
    }
}

function Ki(
/** Manages our in-memory or durable persistence. */
t, e, n, s) {
    return new Ui(t, e, n, s);
}

/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */
// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
async function Qi(t, e) {
    const n = N(t);
    let s = n._n, i = n.Mn;
    const r = await n.persistence.runTransaction("Handle user change", "readonly", (t => {
        // Swap out the mutation queue, grabbing the pending mutation batches
        // before and after.
        let r;
        return n._n.getAllMutationBatches(t).next((o => (r = o, s = n.persistence.getMutationQueue(e), 
        // Recreate our LocalDocumentsView using the new
        // MutationQueue.
        i = new Li(n.On, s, n.persistence.getIndexManager()), s.getAllMutationBatches(t)))).next((e => {
            const n = [], s = [];
            // Union the old/new changed keys.
            let o = rn();
            for (const t of r) {
                n.push(t.batchId);
                for (const e of t.mutations) o = o.add(e.key);
            }
            for (const t of e) {
                s.push(t.batchId);
                for (const e of t.mutations) o = o.add(e.key);
            }
            // Return the set of all (potentially) changed documents and the list
            // of mutation batch IDs that were affected by change.
                        return i.pn(t, o).next((t => ({
                Ln: t,
                removedBatchIds: n,
                addedBatchIds: s
            })));
        }));
    }));
    return n._n = s, n.Mn = i, n.xn.Vn(n.Mn), r;
}

/* Accepts locally generated Mutations and commit them to storage. */
/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */
function ji(t, e) {
    const n = N(t);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (t => {
        const s = e.batch.keys(), i = n.On.newChangeBuffer({
            trackRemovals: !0
        });
        return function(t, e, n, s) {
            const i = n.batch, r = i.keys();
            let o = Rs.resolve();
            return r.forEach((t => {
                o = o.next((() => s.getEntry(e, t))).next((e => {
                    const r = n.docVersions.get(t);
                    C(null !== r), e.version.compareTo(r) < 0 && (i.applyToRemoteDocument(e, n), e.isValidDocument() && 
                    // We use the commitVersion as the readTime rather than the
                    // document's updateTime since the updateTime is not advanced
                    // for updates that do not modify the underlying document.
                    s.addEntry(e, n.commitVersion));
                }));
            })), o.next((() => t._n.removeMutationBatch(e, i)));
        }
        /** Returns the local view of the documents affected by a mutation batch. */
        // PORTING NOTE: Multi-Tab only.
        (n, t, e, i).next((() => i.apply(t))).next((() => n._n.performConsistencyCheck(t))).next((() => n.Mn.pn(t, s)));
    }));
}

/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */
/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */
function Wi(t) {
    const e = N(t);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t => e.qe.getLastRemoteSnapshotVersion(t)));
}

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function Gi(t, e) {
    const n = N(t), s = e.snapshotVersion;
    let i = n.kn;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (t => {
        const r = n.On.newChangeBuffer({
            trackRemovals: !0
        });
        // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                i = n.kn;
        const o = [];
        e.targetChanges.forEach(((e, r) => {
            const c = i.get(r);
            if (!c) return;
            // Only update the remote keys if the target is still active. This
            // ensures that we can persist the updated target data along with
            // the updated assignment.
                        o.push(n.qe.removeMatchingKeys(t, e.removedDocuments, r).next((() => n.qe.addMatchingKeys(t, e.addedDocuments, r))));
            const u = e.resumeToken;
            // Update the resume token if the change includes one.
                        if (u.approximateByteSize() > 0) {
                const a = c.withResumeToken(u, s).withSequenceNumber(t.currentSequenceNumber);
                i = i.insert(r, a), 
                // Update the target data if there are target changes (or if
                // sufficient time has passed since the last update).
                /**
 * Returns true if the newTargetData should be persisted during an update of
 * an active target. TargetData should always be persisted when a target is
 * being released and should not call this function.
 *
 * While the target is active, TargetData updates can be omitted when nothing
 * about the target has changed except metadata like the resume token or
 * snapshot version. Occasionally it's worth the extra write to prevent these
 * values from getting too stale after a crash, but this doesn't have to be
 * too frequent.
 */
                function(t, e, n) {
                    // Always persist target data if we don't already have a resume token.
                    if (C(e.resumeToken.approximateByteSize() > 0), 0 === t.resumeToken.approximateByteSize()) return !0;
                    // Don't allow resume token changes to be buffered indefinitely. This
                    // allows us to be reasonably up-to-date after a crash and avoids needing
                    // to loop over all active queries on shutdown. Especially in the browser
                    // we may not get time to do anything interesting while the current tab is
                    // closing.
                                        if (e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= 3e8) return !0;
                    // Otherwise if the only thing that has changed about a target is its resume
                    // token it's not worth persisting. Note that the RemoteStore keeps an
                    // in-memory view of the currently active targets which includes the current
                    // resume token, so stream failure or user changes will still use an
                    // up-to-date resume token regardless of what we do here.
                                        return n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0;
                }
                /**
 * Notifies local store of the changed views to locally pin documents.
 */ (c, a, e) && o.push(n.qe.updateTargetData(t, a));
            }
        }));
        let c = Xe();
        // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.
        if (e.documentUpdates.forEach(((s, i) => {
            e.resolvedLimboDocuments.has(s) && o.push(n.persistence.referenceDelegate.updateLimboDocument(t, s));
        })), 
        // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
        // documents in advance in a single call.
        o.push(zi(t, r, e.documentUpdates, s, void 0).next((t => {
            c = t;
        }))), !s.isEqual(L.min())) {
            const e = n.qe.getLastRemoteSnapshotVersion(t).next((e => n.qe.setTargetsMetadata(t, t.currentSequenceNumber, s)));
            o.push(e);
        }
        return Rs.waitFor(o).next((() => r.apply(t))).next((() => n.Mn.En(t, c))).next((() => c));
    })).then((t => (n.kn = i, t)));
}

/**
 * Populates document change buffer with documents from backend or a bundle.
 * Returns the document changes resulting from applying those documents.
 *
 * @param txn - Transaction to use to read existing documents from storage.
 * @param documentBuffer - Document buffer to collect the resulted changes to be
 *        applied to storage.
 * @param documents - Documents to be applied.
 * @param globalVersion - A `SnapshotVersion` representing the read time if all
 *        documents have the same read time.
 * @param documentVersions - A DocumentKey-to-SnapshotVersion map if documents
 *        have their own read time.
 *
 * Note: this function will use `documentVersions` if it is defined;
 * when it is not defined, resorts to `globalVersion`.
 */ function zi(t, e, n, s, 
// TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
// this parameter.
i) {
    let r = rn();
    return n.forEach((t => r = r.add(t))), e.getEntries(t, r).next((t => {
        let r = Xe();
        return n.forEach(((n, o) => {
            const c = t.get(n), u = (null == i ? void 0 : i.get(n)) || s;
            // Note: The order of the steps below is important, since we want
            // to ensure that rejected limbo resolutions (which fabricate
            // NoDocuments with SnapshotVersion.min()) never add documents to
            // cache.
            o.isNoDocument() && o.version.isEqual(L.min()) ? (
            // NoDocuments with SnapshotVersion.min() are used in manufactured
            // events. We remove these documents from cache since we lost
            // access.
            e.removeEntry(n, u), r = r.insert(n, o)) : !c.isValidDocument() || o.version.compareTo(c.version) > 0 || 0 === o.version.compareTo(c.version) && c.hasPendingWrites ? (e.addEntry(o, u), 
            r = r.insert(n, o)) : v("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", c.version, " Watch version:", o.version);
        })), r;
    }));
}

/**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */
function Hi(t, e) {
    const n = N(t);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", (t => (void 0 === e && (e = -1), 
    n._n.getNextMutationBatchAfterBatchId(t, e))));
}

/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */
/**
 * Assigns the given target an internal ID so that its results can be pinned so
 * they don't get GC'd. A target must be allocated in the local store before
 * the store can be used to manage its view.
 *
 * Allocating an already allocated `Target` will return the existing `TargetData`
 * for that `Target`.
 */
function Ji(t, e) {
    const n = N(t);
    return n.persistence.runTransaction("Allocate target", "readwrite", (t => {
        let s;
        return n.qe.getTargetData(t, e).next((i => i ? (
        // This target has been listened to previously, so reuse the
        // previous targetID.
        // TODO(mcg): freshen last accessed date?
        s = i, Rs.resolve(s)) : n.qe.allocateTargetId(t).next((i => (s = new Ms(e, i, 0 /* Listen */ , t.currentSequenceNumber), 
        n.qe.addTargetData(t, s).next((() => s)))))));
    })).then((t => {
        // If Multi-Tab is enabled, the existing target data may be newer than
        // the in-memory data
        const s = n.kn.get(t.targetId);
        return (null === s || t.snapshotVersion.compareTo(s.snapshotVersion) > 0) && (n.kn = n.kn.insert(t.targetId, t), 
        n.Fn.set(e, t.targetId)), t;
    }));
}

/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */
// Visible for testing.
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
async function Yi(t, e, n) {
    const s = N(t), i = s.kn.get(e), r = n ? "readwrite" : "readwrite-primary";
    try {
        n || await s.persistence.runTransaction("Release target", r, (t => s.persistence.referenceDelegate.removeTarget(t, i)));
    } catch (t) {
        if (!Ss(t)) throw t;
        // All `releaseTarget` does is record the final metadata state for the
        // target, but we've been recording this periodically during target
        // activity. If we lose this write this could cause a very slight
        // difference in the order of target deletion during GC, but we
        // don't define exact LRU semantics so this is acceptable.
        v("LocalStore", `Failed to update sequence numbers for target ${e}: ${t}`);
    }
    s.kn = s.kn.remove(e), s.Fn.delete(i.target);
}

/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */ function Xi(t, e, n) {
    const s = N(t);
    let i = L.min(), r = rn();
    return s.persistence.runTransaction("Execute query", "readonly", (t => function(t, e, n) {
        const s = N(t), i = s.Fn.get(n);
        return void 0 !== i ? Rs.resolve(s.kn.get(i)) : s.qe.getTargetData(e, n);
    }(s, t, te(e)).next((e => {
        if (e) return i = e.lastLimboFreeSnapshotVersion, s.qe.getMatchingKeysForTargetId(t, e.targetId).next((t => {
            r = t;
        }));
    })).next((() => s.xn.getDocumentsMatchingQuery(t, e, n ? i : L.min(), n ? r : rn()))).next((t => ({
        documents: t,
        Bn: r
    })))));
}

/**
 * Creates a new target using the given bundle name, which will be used to
 * hold the keys of all documents from the bundle in query-document mappings.
 * This ensures that the loaded documents do not get garbage collected
 * right away.
 */
/**
 * Applies the documents from a bundle to the "ground-state" (remote)
 * documents.
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */
async function nr(t, e, n, s) {
    const i = N(t);
    let r = rn(), o = Xe(), c = nn();
    for (const t of n) {
        const n = e.qn(t.metadata.name);
        t.document && (r = r.add(n)), o = o.insert(n, e.Un(t)), c = c.insert(n, e.Kn(t.metadata.readTime));
    }
    const u = i.On.newChangeBuffer({
        trackRemovals: !0
    }), a = await Ji(i, function(t) {
        // It is OK that the path used for the query is not valid, because this will
        // not be read and queried.
        return te(Gt(Q.fromString(`__bundle__/docs/${t}`)));
    }(s));
    // Allocates a target to hold all document keys from the bundle, such that
    // they will not get garbage collected right away.
        return i.persistence.runTransaction("Apply bundle documents", "readwrite", (t => zi(t, u, o, L.min(), c).next((e => (u.apply(t), 
    e))).next((e => i.qe.removeMatchingKeysForTargetId(t, a.targetId).next((() => i.qe.addMatchingKeys(t, r, a.targetId))).next((() => i.Mn.En(t, e))).next((() => e))))));
}

/**
 * Returns a promise of a boolean to indicate if the given bundle has already
 * been loaded and the create time is newer than the current loading bundle.
 */
/**
 * Saves the given `NamedQuery` to local persistence.
 */
async function sr(t, e, n = rn()) {
    // Allocate a target for the named query such that it can be resumed
    // from associated read time if users use it to listen.
    // NOTE: this also means if no corresponding target exists, the new target
    // will remain active and will not get collected, unless users happen to
    // unlisten the query somehow.
    const s = await Ji(t, te(Hs(e.bundledQuery))), i = N(t);
    return i.persistence.runTransaction("Save named query", "readwrite", (t => {
        const r = An(e.readTime);
        // Simply save the query itself if it is older than what the SDK already
        // has.
                if (s.snapshotVersion.compareTo(r) >= 0) return i.Ke.saveNamedQuery(t, e);
        // Update existing target data because the query from the bundle is newer.
                const o = s.withResumeToken(z.EMPTY_BYTE_STRING, r);
        return i.kn = i.kn.insert(o.targetId, o), i.qe.updateTargetData(t, o).next((() => i.qe.removeMatchingKeysForTargetId(t, s.targetId))).next((() => i.qe.addMatchingKeys(t, n, s.targetId))).next((() => i.Ke.saveNamedQuery(t, e)));
    }));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ir {
    constructor(t) {
        this.R = t, this.Qn = new Map, this.jn = new Map;
    }
    getBundleMetadata(t, e) {
        return Rs.resolve(this.Qn.get(e));
    }
    saveBundleMetadata(t, e) {
        /** Decodes a BundleMetadata proto into a BundleMetadata object. */
        var n;
        return this.Qn.set(e.id, {
            id: (n = e).id,
            version: n.version,
            createTime: An(n.createTime)
        }), Rs.resolve();
    }
    getNamedQuery(t, e) {
        return Rs.resolve(this.jn.get(e));
    }
    saveNamedQuery(t, e) {
        return this.jn.set(e.name, function(t) {
            return {
                name: t.name,
                query: Hs(t.bundledQuery),
                readTime: An(t.readTime)
            };
        }(e)), Rs.resolve();
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class rr {
    constructor() {
        // A set of outstanding references to a document sorted by key.
        this.Wn = new He(or.Gn), 
        // A set of outstanding references to a document sorted by target id.
        this.zn = new He(or.Hn);
    }
    /** Returns true if the reference set contains no references. */    isEmpty() {
        return this.Wn.isEmpty();
    }
    /** Adds a reference to the given document key for the given ID. */    addReference(t, e) {
        const n = new or(t, e);
        this.Wn = this.Wn.add(n), this.zn = this.zn.add(n);
    }
    /** Add references to the given document keys for the given ID. */    Jn(t, e) {
        t.forEach((t => this.addReference(t, e)));
    }
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */    removeReference(t, e) {
        this.Yn(new or(t, e));
    }
    Xn(t, e) {
        t.forEach((t => this.removeReference(t, e)));
    }
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */    Zn(t) {
        const e = new rt(new Q([])), n = new or(e, t), s = new or(e, t + 1), i = [];
        return this.zn.forEachInRange([ n, s ], (t => {
            this.Yn(t), i.push(t.key);
        })), i;
    }
    ts() {
        this.Wn.forEach((t => this.Yn(t)));
    }
    Yn(t) {
        this.Wn = this.Wn.delete(t), this.zn = this.zn.delete(t);
    }
    es(t) {
        const e = new rt(new Q([])), n = new or(e, t), s = new or(e, t + 1);
        let i = rn();
        return this.zn.forEachInRange([ n, s ], (t => {
            i = i.add(t.key);
        })), i;
    }
    containsKey(t) {
        const e = new or(t, 0), n = this.Wn.firstAfterOrEqual(e);
        return null !== n && t.isEqual(n.key);
    }
}

class or {
    constructor(t, e) {
        this.key = t, this.ns = e;
    }
    /** Compare by key then by ID */    static Gn(t, e) {
        return rt.comparator(t.key, e.key) || F(t.ns, e.ns);
    }
    /** Compare by ID then by key */    static Hn(t, e) {
        return F(t.ns, e.ns) || rt.comparator(t.key, e.key);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cr {
    constructor(t, e) {
        this.Ut = t, this.referenceDelegate = e, 
        /**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */
        this._n = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.ss = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.rs = new He(or.Gn);
    }
    checkEmpty(t) {
        return Rs.resolve(0 === this._n.length);
    }
    addMutationBatch(t, e, n, s) {
        const i = this.ss;
        this.ss++, this._n.length > 0 && this._n[this._n.length - 1];
        const r = new $s(i, e, n, s);
        this._n.push(r);
        // Track references by document key and index collection parents.
        for (const e of s) this.rs = this.rs.add(new or(e.key, i)), this.Ut.addToCollectionParentIndex(t, e.key.path.popLast());
        return Rs.resolve(r);
    }
    lookupMutationBatch(t, e) {
        return Rs.resolve(this.os(e));
    }
    getNextMutationBatchAfterBatchId(t, e) {
        const n = e + 1, s = this.cs(n), i = s < 0 ? 0 : s;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Rs.resolve(this._n.length > i ? this._n[i] : null);
    }
    getHighestUnacknowledgedBatchId() {
        return Rs.resolve(0 === this._n.length ? -1 : this.ss - 1);
    }
    getAllMutationBatches(t) {
        return Rs.resolve(this._n.slice());
    }
    getAllMutationBatchesAffectingDocumentKey(t, e) {
        const n = new or(e, 0), s = new or(e, Number.POSITIVE_INFINITY), i = [];
        return this.rs.forEachInRange([ n, s ], (t => {
            const e = this.os(t.ns);
            i.push(e);
        })), Rs.resolve(i);
    }
    getAllMutationBatchesAffectingDocumentKeys(t, e) {
        let n = new He(F);
        return e.forEach((t => {
            const e = new or(t, 0), s = new or(t, Number.POSITIVE_INFINITY);
            this.rs.forEachInRange([ e, s ], (t => {
                n = n.add(t.ns);
            }));
        })), Rs.resolve(this.us(n));
    }
    getAllMutationBatchesAffectingQuery(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        const n = e.path, s = n.length + 1;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
        let i = n;
        rt.isDocumentKey(i) || (i = i.child(""));
        const r = new or(new rt(i), 0);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                let o = new He(F);
        return this.rs.forEachWhile((t => {
            const e = t.key.path;
            return !!n.isPrefixOf(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === s && (o = o.add(t.ns)), !0);
        }), r), Rs.resolve(this.us(o));
    }
    us(t) {
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
        const e = [];
        return t.forEach((t => {
            const n = this.os(t);
            null !== n && e.push(n);
        })), e;
    }
    removeMutationBatch(t, e) {
        C(0 === this.hs(e.batchId, "removed")), this._n.shift();
        let n = this.rs;
        return Rs.forEach(e.mutations, (s => {
            const i = new or(s.key, e.batchId);
            return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(t, s.key);
        })).next((() => {
            this.rs = n;
        }));
    }
    Gt(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }
    containsKey(t, e) {
        const n = new or(e, 0), s = this.rs.firstAfterOrEqual(n);
        return Rs.resolve(e.isEqual(s && s.key));
    }
    performConsistencyCheck(t) {
        return this._n.length, Rs.resolve();
    }
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */    hs(t, e) {
        return this.cs(t);
    }
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */    cs(t) {
        if (0 === this._n.length) 
        // As an index this is past the end of the queue
        return 0;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
                return t - this._n[0].batchId;
    }
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */    os(t) {
        const e = this.cs(t);
        if (e < 0 || e >= this._n.length) return null;
        return this._n[e];
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */
class ur {
    /**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    constructor(t, e) {
        this.Ut = t, this.ls = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new We(rt.comparator), 
        /** Size of all cached documents. */
        this.size = 0;
    }
    /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */    addEntry(t, e, n) {
        const s = e.key, i = this.docs.get(s), r = i ? i.size : 0, o = this.ls(e);
        return this.docs = this.docs.insert(s, {
            document: e.clone(),
            size: o,
            readTime: n
        }), this.size += o - r, this.Ut.addToCollectionParentIndex(t, s.path.popLast());
    }
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */    removeEntry(t) {
        const e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }
    getEntry(t, e) {
        const n = this.docs.get(e);
        return Rs.resolve(n ? n.document.clone() : It.newInvalidDocument(e));
    }
    getEntries(t, e) {
        let n = Xe();
        return e.forEach((t => {
            const e = this.docs.get(t);
            n = n.insert(t, e ? e.document.clone() : It.newInvalidDocument(t));
        })), Rs.resolve(n);
    }
    getDocumentsMatchingQuery(t, e, n) {
        let s = Xe();
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
                const i = new rt(e.path.child("")), r = this.docs.getIteratorFrom(i);
        for (;r.hasNext(); ) {
            const {key: t, value: {document: i, readTime: o}} = r.getNext();
            if (!e.path.isPrefixOf(t.path)) break;
            o.compareTo(n) <= 0 || re(e, i) && (s = s.insert(i.key, i.clone()));
        }
        return Rs.resolve(s);
    }
    fs(t, e) {
        return Rs.forEach(this.docs, (t => e(t)));
    }
    newChangeBuffer(t) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new ar(this);
    }
    getSize(t) {
        return Rs.resolve(this.size);
    }
}

/**
 * Creates a new memory-only RemoteDocumentCache.
 *
 * @param indexManager - A class that manages collection group indices.
 * @param sizer - Used to assess the size of a document. For eager GC, this is
 * expected to just return 0 to avoid unnecessarily doing the work of
 * calculating the size.
 */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
class ar extends bi {
    constructor(t) {
        super(), this.Ie = t;
    }
    applyChanges(t) {
        const e = [];
        return this.changes.forEach(((n, s) => {
            s.document.isValidDocument() ? e.push(this.Ie.addEntry(t, s.document, this.getReadTime(n))) : this.Ie.removeEntry(n);
        })), Rs.waitFor(e);
    }
    getFromCache(t, e) {
        return this.Ie.getEntry(t, e);
    }
    getAllFromCache(t, e) {
        return this.Ie.getEntries(t, e);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hr {
    constructor(t) {
        this.persistence = t, 
        /**
         * Maps a target to the data about that target
         */
        this.ds = new Ri((t => bt(t)), Pt), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = L.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.ws = 0, 
        /**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */
        this._s = new rr, this.targetCount = 0, this.ys = fi.Jt();
    }
    forEachTarget(t, e) {
        return this.ds.forEach(((t, n) => e(n))), Rs.resolve();
    }
    getLastRemoteSnapshotVersion(t) {
        return Rs.resolve(this.lastRemoteSnapshotVersion);
    }
    getHighestSequenceNumber(t) {
        return Rs.resolve(this.ws);
    }
    allocateTargetId(t) {
        return this.highestTargetId = this.ys.next(), Rs.resolve(this.highestTargetId);
    }
    setTargetsMetadata(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.ws && (this.ws = e), 
        Rs.resolve();
    }
    te(t) {
        this.ds.set(t.target, t);
        const e = t.targetId;
        e > this.highestTargetId && (this.ys = new fi(e), this.highestTargetId = e), t.sequenceNumber > this.ws && (this.ws = t.sequenceNumber);
    }
    addTargetData(t, e) {
        return this.te(e), this.targetCount += 1, Rs.resolve();
    }
    updateTargetData(t, e) {
        return this.te(e), Rs.resolve();
    }
    removeTargetData(t, e) {
        return this.ds.delete(e.target), this._s.Zn(e.targetId), this.targetCount -= 1, 
        Rs.resolve();
    }
    removeTargets(t, e, n) {
        let s = 0;
        const i = [];
        return this.ds.forEach(((r, o) => {
            o.sequenceNumber <= e && null === n.get(o.targetId) && (this.ds.delete(r), i.push(this.removeMatchingKeysForTargetId(t, o.targetId)), 
            s++);
        })), Rs.waitFor(i).next((() => s));
    }
    getTargetCount(t) {
        return Rs.resolve(this.targetCount);
    }
    getTargetData(t, e) {
        const n = this.ds.get(e) || null;
        return Rs.resolve(n);
    }
    addMatchingKeys(t, e, n) {
        return this._s.Jn(e, n), Rs.resolve();
    }
    removeMatchingKeys(t, e, n) {
        this._s.Xn(e, n);
        const s = this.persistence.referenceDelegate, i = [];
        return s && e.forEach((e => {
            i.push(s.markPotentiallyOrphaned(t, e));
        })), Rs.waitFor(i);
    }
    removeMatchingKeysForTargetId(t, e) {
        return this._s.Zn(e), Rs.resolve();
    }
    getMatchingKeysForTargetId(t, e) {
        const n = this._s.es(e);
        return Rs.resolve(n);
    }
    containsKey(t, e) {
        return Rs.resolve(this._s.containsKey(e));
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
class lr {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    constructor(t, e) {
        this.gs = {}, this.Ne = new T(0), this.xe = !1, this.xe = !0, this.referenceDelegate = t(this), 
        this.qe = new hr(this);
        this.Ut = new Zs, this.Ue = function(t, e) {
            return new ur(t, e);
        }(this.Ut, (t => this.referenceDelegate.ps(t))), this.R = new Ls(e), this.Ke = new ir(this.R);
    }
    start() {
        return Promise.resolve();
    }
    shutdown() {
        // No durable state to ensure is closed on shutdown.
        return this.xe = !1, Promise.resolve();
    }
    get started() {
        return this.xe;
    }
    setDatabaseDeletedListener() {
        // No op.
    }
    setNetworkEnabled() {
        // No op.
    }
    getIndexManager() {
        return this.Ut;
    }
    getMutationQueue(t) {
        let e = this.gs[t.toKey()];
        return e || (e = new cr(this.Ut, this.referenceDelegate), this.gs[t.toKey()] = e), 
        e;
    }
    getTargetCache() {
        return this.qe;
    }
    getRemoteDocumentCache() {
        return this.Ue;
    }
    getBundleCache() {
        return this.Ke;
    }
    runTransaction(t, e, n) {
        v("MemoryPersistence", "Starting transaction:", t);
        const s = new fr(this.Ne.next());
        return this.referenceDelegate.Es(), n(s).next((t => this.referenceDelegate.Ts(s).next((() => t)))).toPromise().then((t => (s.raiseOnCommittedEvent(), 
        t)));
    }
    Is(t, e) {
        return Rs.or(Object.values(this.gs).map((n => () => n.containsKey(t, e))));
    }
}

/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */ class fr extends Is {
    constructor(t) {
        super(), this.currentSequenceNumber = t;
    }
}

class dr {
    constructor(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.As = new rr, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.Rs = null;
    }
    static bs(t) {
        return new dr(t);
    }
    get vs() {
        if (this.Rs) return this.Rs;
        throw D();
    }
    addReference(t, e, n) {
        return this.As.addReference(n, e), this.vs.delete(n.toString()), Rs.resolve();
    }
    removeReference(t, e, n) {
        return this.As.removeReference(n, e), this.vs.add(n.toString()), Rs.resolve();
    }
    markPotentiallyOrphaned(t, e) {
        return this.vs.add(e.toString()), Rs.resolve();
    }
    removeTarget(t, e) {
        this.As.Zn(e.targetId).forEach((t => this.vs.add(t.toString())));
        const n = this.persistence.getTargetCache();
        return n.getMatchingKeysForTargetId(t, e.targetId).next((t => {
            t.forEach((t => this.vs.add(t.toString())));
        })).next((() => n.removeTargetData(t, e)));
    }
    Es() {
        this.Rs = new Set;
    }
    Ts(t) {
        // Remove newly orphaned documents.
        const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
        return Rs.forEach(this.vs, (n => {
            const s = rt.fromPath(n);
            return this.Ps(t, s).next((t => {
                t || e.removeEntry(s);
            }));
        })).next((() => (this.Rs = null, e.apply(t))));
    }
    updateLimboDocument(t, e) {
        return this.Ps(t, e).next((t => {
            t ? this.vs.delete(e.toString()) : this.vs.add(e.toString());
        }));
    }
    ps(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }
    Ps(t, e) {
        return Rs.or([ () => Rs.resolve(this.As.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t, e), () => this.persistence.Is(t, e) ]);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class wr {
    constructor(t) {
        this.uid = t;
    }
    isAuthenticated() {
        return null != this.uid;
    }
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */    toKey() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
    }
    isEqual(t) {
        return t.uid === this.uid;
    }
}

/** A user with a null UID. */ wr.UNAUTHENTICATED = new wr(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
wr.GOOGLE_CREDENTIALS = new wr("google-credentials-uid"), wr.FIRST_PARTY = new wr("first-party-uid"), 
wr.MOCK_USER = new wr("mock-user");

/**
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */
// Visible for testing.
class Ir {
    constructor() {
        this.activeTargetIds = cn();
    }
    Ds(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }
    Cs(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */    Ss() {
        const t = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }
}

class Rr {
    constructor() {
        this.li = new Ir, this.fi = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
    }
    addPendingMutation(t) {
        // No op.
    }
    updateMutationState(t, e, n) {
        // No op.
    }
    addLocalQueryTarget(t) {
        return this.li.Ds(t), this.fi[t] || "not-current";
    }
    updateQueryState(t, e, n) {
        this.fi[t] = e;
    }
    removeLocalQueryTarget(t) {
        this.li.Cs(t);
    }
    isLocalQueryTarget(t) {
        return this.li.activeTargetIds.has(t);
    }
    clearQueryState(t) {
        delete this.fi[t];
    }
    getAllActiveQueryTargets() {
        return this.li.activeTargetIds;
    }
    isActiveQueryTarget(t) {
        return this.li.activeTargetIds.has(t);
    }
    start() {
        return this.li = new Ir, Promise.resolve();
    }
    handleUserChange(t, e, n) {
        // No op.
    }
    setOnlineState(t) {
        // No op.
    }
    shutdown() {}
    writeSequenceNumber(t) {}
    notifyBundleLoaded() {
        // No op.
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class br {
    di(t) {
        // No-op.
    }
    shutdown() {
        // No-op.
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */
/**
 * Browser implementation of ConnectivityMonitor.
 */
class vr {
    constructor() {
        this.wi = () => this._i(), this.mi = () => this.yi(), this.gi = [], this.pi();
    }
    di(t) {
        this.gi.push(t);
    }
    shutdown() {
        window.removeEventListener("online", this.wi), window.removeEventListener("offline", this.mi);
    }
    pi() {
        window.addEventListener("online", this.wi), window.addEventListener("offline", this.mi);
    }
    _i() {
        v("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (const t of this.gi) t(0 /* AVAILABLE */);
    }
    yi() {
        v("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (const t of this.gi) t(1 /* UNAVAILABLE */);
    }
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    static yt() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pr = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
};

/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */
class Vr {
    constructor(t) {
        this.Ei = t.Ei, this.Ti = t.Ti;
    }
    Ii(t) {
        this.Ai = t;
    }
    Ri(t) {
        this.bi = t;
    }
    onMessage(t) {
        this.vi = t;
    }
    close() {
        this.Ti();
    }
    send(t) {
        this.Ei(t);
    }
    Pi() {
        this.Ai();
    }
    Vi(t) {
        this.bi(t);
    }
    Si(t) {
        this.vi(t);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Sr extends 
/**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
    constructor(t) {
        this.databaseInfo = t, this.databaseId = t.databaseId;
        const e = t.ssl ? "https" : "http";
        this.Di = e + "://" + t.host, this.Ci = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
    }
    Ni(t, e, n, s) {
        const i = this.xi(t, e);
        v("RestConnection", "Sending: ", i, n);
        const r = {};
        return this.ki(r, s), this.Fi(t, i, r, n).then((t => (v("RestConnection", "Received: ", t), 
        t)), (e => {
            throw V("RestConnection", `${t} failed with error: `, e, "url: ", i, "request:", n), 
            e;
        }));
    }
    $i(t, e, n, s) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.Ni(t, e, n, s);
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    ki(t, e) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.10.0", 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), 
        e) for (const n in e.authHeaders) e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
    }
    xi(t, e) {
        const n = Pr[t];
        return `${this.Di}/v1/${e}:${n}`;
    }
} {
    constructor(t) {
        super(t), this.forceLongPolling = t.forceLongPolling, this.autoDetectLongPolling = t.autoDetectLongPolling, 
        this.useFetchStreams = t.useFetchStreams;
    }
    Fi(t, e, n, s) {
        return new Promise(((i, r) => {
            const o = new XhrIo;
            o.listenOnce(EventType.COMPLETE, (() => {
                try {
                    switch (o.getLastErrorCode()) {
                      case ErrorCode.NO_ERROR:
                        const e = o.getResponseJson();
                        v("Connection", "XHR received:", JSON.stringify(e)), i(e);
                        break;

                      case ErrorCode.TIMEOUT:
                        v("Connection", 'RPC "' + t + '" timed out'), r(new A(I.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case ErrorCode.HTTP_ERROR:
                        const n = o.getStatus();
                        if (v("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", o.getResponseText()), 
                        n > 0) {
                            const t = o.getResponseJson().error;
                            if (t && t.status && t.message) {
                                const e = function(t) {
                                    const e = t.toLowerCase().replace(/_/g, "-");
                                    return Object.values(I).indexOf(e) >= 0 ? e : I.UNKNOWN;
                                }(t.status);
                                r(new A(e, t.message));
                            } else r(new A(I.UNKNOWN, "Server responded with status " + o.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        r(new A(I.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        D();
                    }
                } finally {
                    v("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            const c = JSON.stringify(s);
            o.send(e, "POST", c, n, 15);
        }));
    }
    Oi(t, e) {
        const u = [ this.Di, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], a = createWebChannelTransport(), h = getStatEventTarget(), l = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.autoDetectLongPolling
        };
        this.useFetchStreams && (l.xmlHttpFactory = new FetchXmlHttpFactory({})), this.ki(l.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (l.httpHeadersOverwriteParam = "$httpHeaders");
        const f = u.join("");
        v("Connection", "Creating WebChannel: " + f, l);
        const d = a.createWebChannel(f, l);
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                let w = !1, T = !1;
        // A flag to determine whether the stream was closed (by us or through an
        // error/close event) to avoid delivering multiple close events or sending
        // on a closed stream
                const R = new Vr({
            Ei: t => {
                T ? v("Connection", "Not sending because WebChannel is closed:", t) : (w || (v("Connection", "Opening WebChannel transport."), 
                d.open(), w = !0), v("Connection", "WebChannel sending:", t), d.send(t));
            },
            Ti: () => d.close()
        }), b = (t, e, n) => {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            t.listen(e, (t => {
                try {
                    n(t);
                } catch (t) {
                    setTimeout((() => {
                        throw t;
                    }), 0);
                }
            }));
        };
        // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
                return b(d, WebChannel.EventType.OPEN, (() => {
            T || v("Connection", "WebChannel transport opened.");
        })), b(d, WebChannel.EventType.CLOSE, (() => {
            T || (T = !0, v("Connection", "WebChannel transport closed"), R.Vi());
        })), b(d, WebChannel.EventType.ERROR, (t => {
            T || (T = !0, V("Connection", "WebChannel transport errored:", t), R.Vi(new A(I.UNAVAILABLE, "The operation could not be completed")));
        })), b(d, WebChannel.EventType.MESSAGE, (t => {
            var e;
            if (!T) {
                const n = t.data[0];
                C(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                const s = n, i = s.error || (null === (e = s[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    v("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    const t = i.status;
                    let e = 
                    /**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */
                    function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const e = Ue[t];
                        if (void 0 !== e) return je(e);
                    }(t), n = i.message;
                    void 0 === e && (e = I.INTERNAL, n = "Unknown error status: " + t + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    T = !0, R.Vi(new A(e, n)), d.close();
                } else v("Connection", "WebChannel received:", n), R.Si(n);
            }
        })), b(h, Event.STAT_EVENT, (t => {
            t.stat === Stat.PROXY ? v("Connection", "Detected buffering proxy") : t.stat === Stat.NOPROXY && v("Connection", "Detected no buffering proxy");
        })), setTimeout((() => {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            R.Pi();
        }), 0), R;
    }
}

/** The Platform's 'document' implementation or null if not available. */ function Cr() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Nr(t) {
    return new pn(t, /* useProto3Json= */ !0);
}

/**
 * An instance of the Platform's 'TextEncoder' implementation.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
class xr {
    constructor(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n = 1e3
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , s = 1.5
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i = 6e4) {
        this.Se = t, this.timerId = e, this.Mi = n, this.Li = s, this.Bi = i, this.qi = 0, 
        this.Ui = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.Ki = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    reset() {
        this.qi = 0;
    }
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */    Qi() {
        this.qi = this.Bi;
    }
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */    ji(t) {
        // Cancel any pending backoff operation.
        this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        const e = Math.floor(this.qi + this.Wi()), n = Math.max(0, Date.now() - this.Ki), s = Math.max(0, e - n);
        // Guard against lastAttemptTime being in the future due to a clock change.
                s > 0 && v("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.qi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), 
        this.Ui = this.Se.enqueueAfterDelay(this.timerId, s, (() => (this.Ki = Date.now(), 
        t()))), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.qi *= this.Li, this.qi < this.Mi && (this.qi = this.Mi), this.qi > this.Bi && (this.qi = this.Bi);
    }
    Gi() {
        null !== this.Ui && (this.Ui.skipDelay(), this.Ui = null);
    }
    cancel() {
        null !== this.Ui && (this.Ui.cancel(), this.Ui = null);
    }
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */    Wi() {
        return (Math.random() - .5) * this.qi;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */
class kr {
    constructor(t, e, n, s, i, r) {
        this.Se = t, this.zi = n, this.Hi = s, this.Ji = i, this.listener = r, this.state = 0 /* Initial */ , 
        /**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */
        this.Yi = 0, this.Xi = null, this.stream = null, this.Zi = new xr(t, e);
    }
    /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */    tr() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */    er() {
        return 2 /* Open */ === this.state;
    }
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */    start() {
        3 /* Error */ !== this.state ? this.auth() : this.nr();
    }
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */    async stop() {
        this.tr() && await this.close(0 /* Initial */);
    }
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */    sr() {
        this.state = 0 /* Initial */ , this.Zi.reset();
    }
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */    ir() {
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
        this.er() && null === this.Xi && (this.Xi = this.Se.enqueueAfterDelay(this.zi, 6e4, (() => this.rr())));
    }
    /** Sends a message to the underlying stream. */    cr(t) {
        this.ur(), this.stream.send(t);
    }
    /** Called by the idle timer when the stream should close due to inactivity. */    async rr() {
        if (this.er()) 
        // When timing out an idle stream there's no reason to force the stream into backoff when
        // it restarts so set the stream state to Initial instead of Error.
        return this.close(0 /* Initial */);
    }
    /** Marks the stream as active again. */    ur() {
        this.Xi && (this.Xi.cancel(), this.Xi = null);
    }
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */    async close(t, e) {
        // Cancel any outstanding timers (they're guaranteed not to execute).
        this.ur(), this.Zi.cancel(), 
        // Invalidates any stream-related callbacks (e.g. from auth or the
        // underlying stream), guaranteeing they won't execute.
        this.Yi++, 3 /* Error */ !== t ? 
        // If this is an intentional close ensure we don't delay our next connection attempt.
        this.Zi.reset() : e && e.code === I.RESOURCE_EXHAUSTED ? (
        // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
        P(e.toString()), P("Using maximum backoff delay to prevent overloading the backend."), 
        this.Zi.Qi()) : e && e.code === I.UNAUTHENTICATED && 
        // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
        // just expired.
        this.Ji.invalidateToken(), 
        // Clean up the underlying stream because we are no longer interested in events.
        null !== this.stream && (this.ar(), this.stream.close(), this.stream = null), 
        // This state must be assigned before calling onClose() to allow the callback to
        // inhibit backoff or otherwise manipulate the state in its non-started state.
        this.state = t, 
        // Notify the listener that the stream closed.
        await this.listener.Ri(e);
    }
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */    ar() {}
    auth() {
        this.state = 1 /* Starting */;
        const t = this.hr(this.Yi), e = this.Yi;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.Ji.getToken().then((t => {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            this.Yi === e && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            this.lr(t);
        }), (e => {
            t((() => {
                const t = new A(I.UNKNOWN, "Fetching auth token failed: " + e.message);
                return this.dr(t);
            }));
        }));
    }
    lr(t) {
        const e = this.hr(this.Yi);
        this.stream = this.wr(t), this.stream.Ii((() => {
            e((() => (this.state = 2 /* Open */ , this.listener.Ii())));
        })), this.stream.Ri((t => {
            e((() => this.dr(t)));
        })), this.stream.onMessage((t => {
            e((() => this.onMessage(t)));
        }));
    }
    nr() {
        this.state = 4 /* Backoff */ , this.Zi.ji((async () => {
            this.state = 0 /* Initial */ , this.start();
        }));
    }
    // Visible for tests
    dr(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return v("PersistentStream", `close with error: ${t}`), this.stream = null, this.close(3 /* Error */ , t);
    }
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */    hr(t) {
        return e => {
            this.Se.enqueueAndForget((() => this.Yi === t ? e() : (v("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
            Promise.resolve())));
        };
    }
}

/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */ class Fr extends kr {
    constructor(t, e, n, s, i) {
        super(t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , e, n, i), 
        this.R = s;
    }
    wr(t) {
        return this.Hi.Oi("Listen", t);
    }
    onMessage(t) {
        // A successful response means the stream is healthy
        this.Zi.reset();
        const e = Fn(this.R, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return L.min();
            const e = t.targetChange;
            return e.targetIds && e.targetIds.length ? L.min() : e.readTime ? An(e.readTime) : L.min();
        }(t);
        return this.listener._r(e, n);
    }
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */    mr(t) {
        const e = {};
        e.database = Dn(this.R), e.addTarget = function(t, e) {
            let n;
            const s = e.target;
            return n = Vt(s) ? {
                documents: Ln(t, s)
            } : {
                query: Bn(t, s)
            }, n.targetId = e.targetId, e.resumeToken.approximateByteSize() > 0 ? n.resumeToken = Tn(t, e.resumeToken) : e.snapshotVersion.compareTo(L.min()) > 0 && (
            // TODO(wuandy): Consider removing above check because it is most likely true.
            // Right now, many tests depend on this behaviour though (leaving min() out
            // of serialization).
            n.readTime = En(t, e.snapshotVersion.toTimestamp())), n;
        }(this.R, t);
        const n = Un(this.R, t);
        n && (e.labels = n), this.cr(e);
    }
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */    yr(t) {
        const e = {};
        e.database = Dn(this.R), e.removeTarget = t, this.cr(e);
    }
}

/**
 * A Stream that implements the Write RPC.
 *
 * The Write RPC requires the caller to maintain special streamToken
 * state in between calls, to help the server understand which responses the
 * client has processed by the time the next request is made. Every response
 * will contain a streamToken; this value must be passed to the next
 * request.
 *
 * After calling start() on this stream, the next request must be a handshake,
 * containing whatever streamToken is on hand. Once a response to this
 * request is received, all pending mutations may be submitted. When
 * submitting multiple batches of mutations at the same time, it's
 * okay to use the same streamToken for the calls to writeMutations.
 *
 * TODO(b/33271235): Use proto types
 */ class $r extends kr {
    constructor(t, e, n, s, i) {
        super(t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , e, n, i), 
        this.R = s, this.gr = !1;
    }
    /**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */    get pr() {
        return this.gr;
    }
    // Override of PersistentStream.start
    start() {
        this.gr = !1, this.lastStreamToken = void 0, super.start();
    }
    ar() {
        this.gr && this.Er([]);
    }
    wr(t) {
        return this.Hi.Oi("Write", t);
    }
    onMessage(t) {
        if (
        // Always capture the last stream token.
        C(!!t.streamToken), this.lastStreamToken = t.streamToken, this.gr) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.Zi.reset();
            const e = Mn(t.writeResults, t.commitTime), n = An(t.commitTime);
            return this.listener.Tr(n, e);
        }
        // The first response is always the handshake response
        return C(!t.writeResults || 0 === t.writeResults.length), this.gr = !0, this.listener.Ir();
    }
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */    Ar() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        const t = {};
        t.database = Dn(this.R), this.cr(t);
    }
    /** Sends a group of mutations to the Firestore backend to apply. */    Er(t) {
        const e = {
            streamToken: this.lastStreamToken,
            writes: t.map((t => $n(this.R, t)))
        };
        this.cr(e);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */
/**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */
class Or extends class {} {
    constructor(t, e, n) {
        super(), this.credentials = t, this.Hi = e, this.R = n, this.Rr = !1;
    }
    br() {
        if (this.Rr) throw new A(I.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    /** Gets an auth token and invokes the provided RPC. */    Ni(t, e, n) {
        return this.br(), this.credentials.getToken().then((s => this.Hi.Ni(t, e, n, s))).catch((t => {
            throw "FirebaseError" === t.name ? (t.code === I.UNAUTHENTICATED && this.credentials.invalidateToken(), 
            t) : new A(I.UNKNOWN, t.toString());
        }));
    }
    /** Gets an auth token and invokes the provided RPC with streamed results. */    $i(t, e, n) {
        return this.br(), this.credentials.getToken().then((s => this.Hi.$i(t, e, n, s))).catch((t => {
            throw "FirebaseError" === t.name ? (t.code === I.UNAUTHENTICATED && this.credentials.invalidateToken(), 
            t) : new A(I.UNKNOWN, t.toString());
        }));
    }
    terminate() {
        this.Rr = !0;
    }
}

// TODO(firestorexp): Make sure there is only one Datastore instance per
// firestore-exp client.
/**
 * A component used by the RemoteStore to track the OnlineState (that is,
 * whether or not the client as a whole should be considered to be online or
 * offline), implementing the appropriate heuristics.
 *
 * In particular, when the client is trying to connect to the backend, we
 * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
 * a connection to succeed. If we have too many failures or the timeout elapses,
 * then we set the OnlineState to Offline, and the client will behave as if
 * it is offline (get()s will return cached data, etc.).
 */
class Mr {
    constructor(t, e) {
        this.asyncQueue = t, this.onlineStateHandler = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */
        this.vr = 0, 
        /**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */
        this.Pr = null, 
        /**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */
        this.Vr = !0;
    }
    /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */    Sr() {
        0 === this.vr && (this.Dr("Unknown" /* Unknown */), this.Pr = this.asyncQueue.enqueueAfterDelay("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (() => (this.Pr = null, 
        this.Cr("Backend didn't respond within 10 seconds."), this.Dr("Offline" /* Offline */), 
        Promise.resolve()))));
    }
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */    Nr(t) {
        "Online" /* Online */ === this.state ? this.Dr("Unknown" /* Unknown */) : (this.vr++, 
        this.vr >= 1 && (this.kr(), this.Cr(`Connection failed 1 times. Most recent error: ${t.toString()}`), 
        this.Dr("Offline" /* Offline */)));
    }
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */    set(t) {
        this.kr(), this.vr = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Vr = !1), this.Dr(t);
    }
    Dr(t) {
        t !== this.state && (this.state = t, this.onlineStateHandler(t));
    }
    Cr(t) {
        const e = `Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
        this.Vr ? (P(e), this.Vr = !1) : v("OnlineStateTracker", e);
    }
    kr() {
        null !== this.Pr && (this.Pr.cancel(), this.Pr = null);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lr {
    constructor(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    e, n, s, i) {
        this.localStore = t, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, 
        /**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */
        this.Fr = [], 
        /**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */
        this.$r = new Map, 
        /**
         * A set of reasons for why the RemoteStore may be offline. If empty, the
         * RemoteStore may start its network connections.
         */
        this.Or = new Set, 
        /**
         * Event handlers that get called when the network is disabled or enabled.
         *
         * PORTING NOTE: These functions are used on the Web client to create the
         * underlying streams (to support tree-shakeable streams). On Android and iOS,
         * the streams are created during construction of RemoteStore.
         */
        this.Mr = [], this.Lr = i, this.Lr.di((t => {
            n.enqueueAndForget((async () => {
                // Porting Note: Unlike iOS, `restartNetwork()` is called even when the
                // network becomes unreachable as we don't have any other way to tear
                // down our streams.
                zr(this) && (v("RemoteStore", "Restarting streams for network reachability change."), 
                await async function(t) {
                    const e = N(t);
                    e.Or.add(4 /* ConnectivityChange */), await qr(e), e.Br.set("Unknown" /* Unknown */), 
                    e.Or.delete(4 /* ConnectivityChange */), await Br(e);
                }(this));
            }));
        })), this.Br = new Mr(n, s);
    }
}

async function Br(t) {
    if (zr(t)) for (const e of t.Mr) await e(/* enabled= */ !0);
}

/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */ async function qr(t) {
    for (const e of t.Mr) await e(/* enabled= */ !1);
}

/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */
function Ur(t, e) {
    const n = N(t);
    n.$r.has(e.targetId) || (
    // Mark this as something the client is currently listening for.
    n.$r.set(e.targetId, e), Gr(n) ? 
    // The listen will be sent in onWatchStreamOpen
    Wr(n) : lo(n).er() && Qr(n, e));
}

/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */ function Kr(t, e) {
    const n = N(t), s = lo(n);
    n.$r.delete(e), s.er() && jr(n, e), 0 === n.$r.size && (s.er() ? s.ir() : zr(n) && 
    // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    n.Br.set("Unknown" /* Unknown */));
}

/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */ function Qr(t, e) {
    t.qr.U(e.targetId), lo(t).mr(e);
}

/**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */ function jr(t, e) {
    t.qr.U(e), lo(t).yr(e);
}

function Wr(t) {
    t.qr = new wn({
        getRemoteKeysForTarget: e => t.remoteSyncer.getRemoteKeysForTarget(e),
        lt: e => t.$r.get(e) || null
    }), lo(t).start(), t.Br.Sr();
}

/**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */ function Gr(t) {
    return zr(t) && !lo(t).tr() && t.$r.size > 0;
}

function zr(t) {
    return 0 === N(t).Or.size;
}

function Hr(t) {
    t.qr = void 0;
}

async function Jr(t) {
    t.$r.forEach(((e, n) => {
        Qr(t, e);
    }));
}

async function Yr(t, e) {
    Hr(t), 
    // If we still need the watch stream, retry the connection.
    Gr(t) ? (t.Br.Nr(e), Wr(t)) : 
    // No need to restart watch stream because there are no active targets.
    // The online state is set to unknown because there is no active attempt
    // at establishing a connection
    t.Br.set("Unknown" /* Unknown */);
}

async function Xr(t, e, n) {
    if (
    // Mark the client as online since we got a message from the server
    t.Br.set("Online" /* Online */), e instanceof fn && 2 /* Removed */ === e.state && e.cause) 
    // There was an error on a target, don't wait for a consistent snapshot
    // to raise events
    try {
        await 
        /** Handles an error on a target */
        async function(t, e) {
            const n = e.cause;
            for (const s of e.targetIds) 
            // A watched target might have been removed already.
            t.$r.has(s) && (await t.remoteSyncer.rejectListen(s, n), t.$r.delete(s), t.qr.removeTarget(s));
        }
        /**
 * Attempts to fill our write pipeline with writes from the LocalStore.
 *
 * Called internally to bootstrap or refill the write pipeline and by
 * SyncEngine whenever there are new mutations to process.
 *
 * Starts the write stream if necessary.
 */ (t, e);
    } catch (n) {
        v("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), n), 
        await Zr(t, n);
    } else if (e instanceof hn ? t.qr.X(e) : e instanceof ln ? t.qr.rt(e) : t.qr.et(e), 
    !n.isEqual(L.min())) try {
        const e = await Wi(t.localStore);
        n.compareTo(e) >= 0 && 
        // We have received a target change with a global snapshot if the snapshot
        // version is not equal to SnapshotVersion.min().
        await 
        /**
 * Takes a batch of changes from the Datastore, repackages them as a
 * RemoteEvent, and passes that on to the listener, which is typically the
 * SyncEngine.
 */
        function(t, e) {
            const n = t.qr.ut(e);
            // Update in-memory resume tokens. LocalStore will update the
            // persistent view of these when applying the completed RemoteEvent.
                        return n.targetChanges.forEach(((n, s) => {
                if (n.resumeToken.approximateByteSize() > 0) {
                    const i = t.$r.get(s);
                    // A watched target might have been removed already.
                                        i && t.$r.set(s, i.withResumeToken(n.resumeToken, e));
                }
            })), 
            // Re-establish listens for the targets that have been invalidated by
            // existence filter mismatches.
            n.targetMismatches.forEach((e => {
                const n = t.$r.get(e);
                if (!n) 
                // A watched target might have been removed already.
                return;
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                                t.$r.set(e, n.withResumeToken(z.EMPTY_BYTE_STRING, n.snapshotVersion)), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                jr(t, e);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                const s = new Ms(n.target, e, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                Qr(t, s);
            })), t.remoteSyncer.applyRemoteEvent(n);
        }(t, n);
    } catch (e) {
        v("RemoteStore", "Failed to raise snapshot:", e), await Zr(t, e);
    }
}

/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */ async function Zr(t, e, n) {
    if (!Ss(e)) throw e;
    t.Or.add(1 /* IndexedDbFailed */), 
    // Disable network and raise offline snapshots
    await qr(t), t.Br.set("Offline" /* Offline */), n || (
    // Use a simple read operation to determine if IndexedDB recovered.
    // Ideally, we would expose a health check directly on SimpleDb, but
    // RemoteStore only has access to persistence through LocalStore.
    n = () => Wi(t.localStore)), 
    // Probe IndexedDB periodically and re-enable network
    t.asyncQueue.enqueueRetryable((async () => {
        v("RemoteStore", "Retrying IndexedDB access"), await n(), t.Or.delete(1 /* IndexedDbFailed */), 
        await Br(t);
    }));
}

/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */ function to(t, e) {
    return e().catch((n => Zr(t, n, e)));
}

async function eo(t) {
    const e = N(t), n = fo(e);
    let s = e.Fr.length > 0 ? e.Fr[e.Fr.length - 1].batchId : -1;
    for (;no(e); ) try {
        const t = await Hi(e.localStore, s);
        if (null === t) {
            0 === e.Fr.length && n.ir();
            break;
        }
        s = t.batchId, so(e, t);
    } catch (t) {
        await Zr(e, t);
    }
    io(e) && ro(e);
}

/**
 * Returns true if we can add to the write pipeline (i.e. the network is
 * enabled and the write pipeline is not full).
 */ function no(t) {
    return zr(t) && t.Fr.length < 10;
}

/**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */ function so(t, e) {
    t.Fr.push(e);
    const n = fo(t);
    n.er() && n.pr && n.Er(e.mutations);
}

function io(t) {
    return zr(t) && !fo(t).tr() && t.Fr.length > 0;
}

function ro(t) {
    fo(t).start();
}

async function oo(t) {
    fo(t).Ar();
}

async function co(t) {
    const e = fo(t);
    // Send the write pipeline now that the stream is established.
        for (const n of t.Fr) e.Er(n.mutations);
}

async function uo(t, e, n) {
    const s = t.Fr.shift(), i = Os.from(s, e, n);
    await to(t, (() => t.remoteSyncer.applySuccessfulWrite(i))), 
    // It's possible that with the completion of this mutation another
    // slot has freed up.
    await eo(t);
}

async function ao(t, e) {
    // If the write stream closed after the write handshake completes, a write
    // operation failed and we fail the pending operation.
    e && fo(t).pr && 
    // This error affects the actual write.
    await async function(t, e) {
        // Only handle permanent errors here. If it's transient, just let the retry
        // logic kick in.
        if (n = e.code, Qe(n) && n !== I.ABORTED) {
            // This was a permanent error, the request itself was the problem
            // so it's not going to succeed if we resend it.
            const n = t.Fr.shift();
            // In this case it's also unlikely that the server itself is melting
            // down -- this was just a bad request so inhibit backoff on the next
            // restart.
                        fo(t).sr(), await to(t, (() => t.remoteSyncer.rejectFailedWrite(n.batchId, e))), 
            // It's possible that with the completion of this mutation
            // another slot has freed up.
            await eo(t);
        }
        var n;
    }(t, e), 
    // The write stream might have been started by refilling the write
    // pipeline for failed writes
    io(t) && ro(t);
}

/**
 * Toggles the network state when the client gains or loses its primary lease.
 */
async function ho(t, e) {
    const n = N(t);
    e ? (n.Or.delete(2 /* IsSecondary */), await Br(n)) : e || (n.Or.add(2 /* IsSecondary */), 
    await qr(n), n.Br.set("Unknown" /* Unknown */));
}

/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function lo(t) {
    return t.Ur || (
    // Create stream (but note that it is not started yet).
    t.Ur = function(t, e, n) {
        const s = N(t);
        return s.br(), new Fr(e, s.Hi, s.credentials, s.R, n);
    }
    /**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (t.datastore, t.asyncQueue, {
        Ii: Jr.bind(null, t),
        Ri: Yr.bind(null, t),
        _r: Xr.bind(null, t)
    }), t.Mr.push((async e => {
        e ? (t.Ur.sr(), Gr(t) ? Wr(t) : t.Br.set("Unknown" /* Unknown */)) : (await t.Ur.stop(), 
        Hr(t));
    }))), t.Ur;
}

/**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function fo(t) {
    return t.Kr || (
    // Create stream (but note that it is not started yet).
    t.Kr = function(t, e, n) {
        const s = N(t);
        return s.br(), new $r(e, s.Hi, s.credentials, s.R, n);
    }(t.datastore, t.asyncQueue, {
        Ii: oo.bind(null, t),
        Ri: ao.bind(null, t),
        Ir: co.bind(null, t),
        Tr: uo.bind(null, t)
    }), t.Mr.push((async e => {
        e ? (t.Kr.sr(), 
        // This will start the write stream if necessary.
        await eo(t)) : (await t.Kr.stop(), t.Fr.length > 0 && (v("RemoteStore", `Stopping write stream with ${t.Fr.length} pending writes`), 
        t.Fr = []));
    }))), t.Kr;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */
class wo {
    constructor(t, e, n, s, i) {
        this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = s, this.removalCallback = i, 
        this.deferred = new As, this.then = this.deferred.promise.then.bind(this.deferred.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.deferred.promise.catch((t => {}));
    }
    /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */    static createAndSchedule(t, e, n, s, i) {
        const r = Date.now() + n, o = new wo(t, e, r, s, i);
        return o.start(n), o;
    }
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */    start(t) {
        this.timerHandle = setTimeout((() => this.handleDelayElapsed()), t);
    }
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */    skipDelay() {
        return this.handleDelayElapsed();
    }
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */    cancel(t) {
        null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new A(I.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }
    handleDelayElapsed() {
        this.asyncQueue.enqueueAndForget((() => null !== this.timerHandle ? (this.clearTimeout(), 
        this.op().then((t => this.deferred.resolve(t)))) : Promise.resolve()));
    }
    clearTimeout() {
        null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), 
        this.timerHandle = null);
    }
}

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */ function _o(t, e) {
    if (P("AsyncQueue", `${e}: ${t}`), Ss(t)) return new A(I.UNAVAILABLE, `${e}: ${t}`);
    throw t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class mo {
    /** The default ordering is by key if the comparator is omitted */
    constructor(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.comparator = t ? (e, n) => t(e, n) || rt.comparator(e.key, n.key) : (t, e) => rt.comparator(t.key, e.key), 
        this.keyedMap = tn(), this.sortedSet = new We(this.comparator);
    }
    /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */    static emptySet(t) {
        return new mo(t.comparator);
    }
    has(t) {
        return null != this.keyedMap.get(t);
    }
    get(t) {
        return this.keyedMap.get(t);
    }
    first() {
        return this.sortedSet.minKey();
    }
    last() {
        return this.sortedSet.maxKey();
    }
    isEmpty() {
        return this.sortedSet.isEmpty();
    }
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */    indexOf(t) {
        const e = this.keyedMap.get(t);
        return e ? this.sortedSet.indexOf(e) : -1;
    }
    get size() {
        return this.sortedSet.size;
    }
    /** Iterates documents in order defined by "comparator" */    forEach(t) {
        this.sortedSet.inorderTraversal(((e, n) => (t(e), !1)));
    }
    /** Inserts or updates a document with the same key */    add(t) {
        // First remove the element if we have it.
        const e = this.delete(t.key);
        return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
    }
    /** Deletes a document with a given key */    delete(t) {
        const e = this.get(t);
        return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this;
    }
    isEqual(t) {
        if (!(t instanceof mo)) return !1;
        if (this.size !== t.size) return !1;
        const e = this.sortedSet.getIterator(), n = t.sortedSet.getIterator();
        for (;e.hasNext(); ) {
            const t = e.getNext().key, s = n.getNext().key;
            if (!t.isEqual(s)) return !1;
        }
        return !0;
    }
    toString() {
        const t = [];
        return this.forEach((e => {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }
    copy(t, e) {
        const n = new mo;
        return n.comparator = this.comparator, n.keyedMap = t, n.sortedSet = e, n;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class yo {
    constructor() {
        this.Qr = new We(rt.comparator);
    }
    track(t) {
        const e = t.doc.key, n = this.Qr.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.Qr = this.Qr.insert(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.Qr = this.Qr.insert(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.Qr = this.Qr.insert(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.Qr = this.Qr.insert(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.Qr = this.Qr.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.Qr = this.Qr.insert(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.Qr = this.Qr.insert(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        D() : this.Qr = this.Qr.insert(e, t);
    }
    jr() {
        const t = [];
        return this.Qr.inorderTraversal(((e, n) => {
            t.push(n);
        })), t;
    }
}

class go {
    constructor(t, e, n, s, i, r, o, c) {
        this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = s, this.mutatedKeys = i, 
        this.fromCache = r, this.syncStateChanged = o, this.excludesMetadataChanges = c;
    }
    /** Returns a view snapshot as if all documents in the snapshot were added. */    static fromInitialDocuments(t, e, n, s) {
        const i = [];
        return e.forEach((t => {
            i.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new go(t, e, mo.emptySet(e), i, n, s, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }
    get hasPendingWrites() {
        return !this.mutatedKeys.isEmpty();
    }
    isEqual(t) {
        if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && ne(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
        const e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (let t = 0; t < e.length; t++) if (e[t].type !== n[t].type || !e[t].doc.isEqual(n[t].doc)) return !1;
        return !0;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */ class po {
    constructor() {
        this.Wr = void 0, this.listeners = [];
    }
}

class Eo {
    constructor() {
        this.queries = new Ri((t => se(t)), ne), this.onlineState = "Unknown" /* Unknown */ , 
        this.Gr = new Set;
    }
}

async function To(t, e) {
    const n = N(t), s = e.query;
    let i = !1, r = n.queries.get(s);
    if (r || (i = !0, r = new po), i) try {
        r.Wr = await n.onListen(s);
    } catch (t) {
        const n = _o(t, `Initialization of query '${ie(e.query)}' failed`);
        return void e.onError(n);
    }
    if (n.queries.set(s, r), r.listeners.push(e), 
    // Run global snapshot listeners if a consistent snapshot has been emitted.
    e.zr(n.onlineState), r.Wr) {
        e.Hr(r.Wr) && bo(n);
    }
}

async function Io(t, e) {
    const n = N(t), s = e.query;
    let i = !1;
    const r = n.queries.get(s);
    if (r) {
        const t = r.listeners.indexOf(e);
        t >= 0 && (r.listeners.splice(t, 1), i = 0 === r.listeners.length);
    }
    if (i) return n.queries.delete(s), n.onUnlisten(s);
}

function Ao(t, e) {
    const n = N(t);
    let s = !1;
    for (const t of e) {
        const e = t.query, i = n.queries.get(e);
        if (i) {
            for (const e of i.listeners) e.Hr(t) && (s = !0);
            i.Wr = t;
        }
    }
    s && bo(n);
}

function Ro(t, e, n) {
    const s = N(t), i = s.queries.get(e);
    if (i) for (const t of i.listeners) t.onError(n);
    // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
    // after an error.
        s.queries.delete(e);
}

// Call all global snapshot listeners that have been set.
function bo(t) {
    t.Gr.forEach((t => {
        t.next();
    }));
}

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */ class vo {
    constructor(t, e, n) {
        this.query = t, this.Jr = e, 
        /**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */
        this.Yr = !1, this.Xr = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {};
    }
    /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */    Hr(t) {
        if (!this.options.includeMetadataChanges) {
            // Remove the metadata only changes.
            const e = [];
            for (const n of t.docChanges) 3 /* Metadata */ !== n.type && e.push(n);
            t = new go(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, 
            /* excludesMetadataChanges= */ !0);
        }
        let e = !1;
        return this.Yr ? this.Zr(t) && (this.Jr.next(t), e = !0) : this.eo(t, this.onlineState) && (this.no(t), 
        e = !0), this.Xr = t, e;
    }
    onError(t) {
        this.Jr.error(t);
    }
    /** Returns whether a snapshot was raised. */    zr(t) {
        this.onlineState = t;
        let e = !1;
        return this.Xr && !this.Yr && this.eo(this.Xr, t) && (this.no(this.Xr), e = !0), 
        e;
    }
    eo(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                const n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return (!this.options.so || !n) && (!t.docs.isEmpty() || "Offline" /* Offline */ === e);
        // Raise data from cache if we have any documents or we are offline
        }
    Zr(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        const e = this.Xr && this.Xr.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }
    no(t) {
        t = go.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.Yr = !0, 
        this.Jr.next(t);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */ class Po {
    constructor(t, 
    // How many bytes this element takes to store in the bundle.
    e) {
        this.payload = t, this.byteLength = e;
    }
    io() {
        return "metadata" in this.payload;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper to convert objects from bundles to model objects in the SDK.
 */ class Vo {
    constructor(t) {
        this.R = t;
    }
    qn(t) {
        return Pn(this.R, t);
    }
    /**
     * Converts a BundleDocument to a MutableDocument.
     */    Un(t) {
        return t.metadata.exists ? xn(this.R, t.document, !1) : It.newNoDocument(this.qn(t.metadata.name), this.Kn(t.metadata.readTime));
    }
    Kn(t) {
        return An(t);
    }
}

/**
 * A class to process the elements from a bundle, load them into local
 * storage and provide progress update while loading.
 */ class So {
    constructor(t, e, n) {
        this.ro = t, this.localStore = e, this.R = n, 
        /** Batched queries to be saved into storage */
        this.queries = [], 
        /** Batched documents to be saved into storage */
        this.documents = [], this.progress = Do(t);
    }
    /**
     * Adds an element from the bundle to the loader.
     *
     * Returns a new progress if adding the element leads to a new progress,
     * otherwise returns null.
     */    oo(t) {
        this.progress.bytesLoaded += t.byteLength;
        let e = this.progress.documentsLoaded;
        return t.payload.namedQuery ? this.queries.push(t.payload.namedQuery) : t.payload.documentMetadata ? (this.documents.push({
            metadata: t.payload.documentMetadata
        }), t.payload.documentMetadata.exists || ++e) : t.payload.document && (this.documents[this.documents.length - 1].document = t.payload.document, 
        ++e), e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, 
        Object.assign({}, this.progress)) : null;
    }
    co(t) {
        const e = new Map, n = new Vo(this.R);
        for (const s of t) if (s.metadata.queries) {
            const t = n.qn(s.metadata.name);
            for (const n of s.metadata.queries) {
                const s = (e.get(n) || rn()).add(t);
                e.set(n, s);
            }
        }
        return e;
    }
    /**
     * Update the progress to 'Success' and return the updated progress.
     */    async complete() {
        const t = await nr(this.localStore, new Vo(this.R), this.documents, this.ro.id), e = this.co(this.documents);
        for (const t of this.queries) await sr(this.localStore, t, e.get(t.name));
        return this.progress.taskState = "Success", new Mi(Object.assign({}, this.progress), t);
    }
}

/**
 * Returns a `LoadBundleTaskProgress` representing the initial progress of
 * loading a bundle.
 */ function Do(t) {
    return {
        taskState: "Running",
        documentsLoaded: 0,
        bytesLoaded: 0,
        totalDocuments: t.totalDocuments,
        totalBytes: t.totalBytes
    };
}

/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co {
    constructor(t) {
        this.key = t;
    }
}

class No {
    constructor(t) {
        this.key = t;
    }
}

/**
 * View is responsible for computing the final merged truth of what docs are in
 * a query. It gets notified of local and remote changes to docs, and applies
 * the query filters and limits to determine the most correct possible results.
 */ class xo {
    constructor(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.uo = e, this.ao = null, 
        /**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */
        this.current = !1, 
        /** Documents in the view but not in the remote target */
        this.ho = rn(), 
        /** Document Keys that have local changes */
        this.mutatedKeys = rn(), this.lo = oe(t), this.fo = new mo(this.lo);
    }
    /**
     * The set of remote documents that the server has told us belongs to the target associated with
     * this view.
     */    get wo() {
        return this.uo;
    }
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges - The doc changes to apply to this view.
     * @param previousChanges - If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @returns a new set of docs, changes, and refill flag.
     */    _o(t, e) {
        const n = e ? e.mo : new yo, s = e ? e.fo : this.fo;
        let i = e ? e.mutatedKeys : this.mutatedKeys, r = s, o = !1;
        // Track the last doc in a (full) limit. This is necessary, because some
        // update (a delete, or an update moving a doc past the old limit) might
        // mean there is some other document in the local cache that either should
        // come (1) between the old last limit doc and the new last document, in the
        // case of updates, or (2) after the new last document, in the case of
        // deletes. So we keep this doc at the old limit to compare the updates to.
        // Note that this should never get used in a refill (when previousChanges is
        // set), because there will only be adds -- no deletes or updates.
        const c = zt(this.query) && s.size === this.query.limit ? s.last() : null, u = Ht(this.query) && s.size === this.query.limit ? s.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.inorderTraversal(((t, e) => {
            const a = s.get(t), h = re(this.query, e) ? e : null, l = !!a && this.mutatedKeys.has(a.key), f = !!h && (h.hasLocalMutations || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            this.mutatedKeys.has(h.key) && h.hasCommittedMutations);
            let d = !1;
            // Calculate change
                        if (a && h) {
                a.data.isEqual(h.data) ? l !== f && (n.track({
                    type: 3 /* Metadata */ ,
                    doc: h
                }), d = !0) : this.yo(a, h) || (n.track({
                    type: 2 /* Modified */ ,
                    doc: h
                }), d = !0, (c && this.lo(h, c) > 0 || u && this.lo(h, u) < 0) && (
                // This doc moved from inside the limit to outside the limit.
                // That means there may be some other doc in the local cache
                // that should be included instead.
                o = !0));
            } else !a && h ? (n.track({
                type: 0 /* Added */ ,
                doc: h
            }), d = !0) : a && !h && (n.track({
                type: 1 /* Removed */ ,
                doc: a
            }), d = !0, (c || u) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            o = !0));
            d && (h ? (r = r.add(h), i = f ? i.add(t) : i.delete(t)) : (r = r.delete(t), i = i.delete(t)));
        })), zt(this.query) || Ht(this.query)) for (;r.size > this.query.limit; ) {
            const t = zt(this.query) ? r.last() : r.first();
            r = r.delete(t.key), i = i.delete(t.key), n.track({
                type: 1 /* Removed */ ,
                doc: t
            });
        }
        return {
            fo: r,
            mo: n,
            Nn: o,
            mutatedKeys: i
        };
    }
    yo(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
    }
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges - The set of changes to make to the view's docs.
     * @param updateLimboDocuments - Whether to update limbo documents based on
     *        this change.
     * @param targetChange - A target change to apply for computing limbo docs and
     *        sync state.
     * @returns A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    applyChanges(t, e, n) {
        const s = this.fo;
        this.fo = t.fo, this.mutatedKeys = t.mutatedKeys;
        // Sort changes based on type and query comparator
        const i = t.mo.jr();
        i.sort(((t, e) => function(t, e) {
            const n = t => {
                switch (t) {
                  case 0 /* Added */ :
                    return 1;

                  case 2 /* Modified */ :
                  case 3 /* Metadata */ :
                    // A metadata change is converted to a modified change at the public
                    // api layer.  Since we sort by document key and then change type,
                    // metadata and modified changes must be sorted equivalently.
                    return 2;

                  case 1 /* Removed */ :
                    return 0;

                  default:
                    return D();
                }
            };
            return n(t) - n(e);
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (t.type, e.type) || this.lo(t.doc, e.doc))), this.po(n);
        const r = e ? this.Eo() : [], o = 0 === this.ho.size && this.current ? 1 /* Synced */ : 0 /* Local */ , c = o !== this.ao;
        if (this.ao = o, 0 !== i.length || c) {
            return {
                snapshot: new go(this.query, t.fo, s, i, t.mutatedKeys, 0 /* Local */ === o, c, 
                /* excludesMetadataChanges= */ !1),
                To: r
            };
        }
        // no changes
        return {
            To: r
        };
    }
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */    zr(t) {
        return this.current && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.current = !1, this.applyChanges({
            fo: this.fo,
            mo: new yo,
            mutatedKeys: this.mutatedKeys,
            Nn: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            To: []
        };
    }
    /**
     * Returns whether the doc for the given key should be in limbo.
     */    Io(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.uo.has(t) && (
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.fo.has(t) && !this.fo.get(t).hasLocalMutations);
    }
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */    po(t) {
        t && (t.addedDocuments.forEach((t => this.uo = this.uo.add(t))), t.modifiedDocuments.forEach((t => {})), 
        t.removedDocuments.forEach((t => this.uo = this.uo.delete(t))), this.current = t.current);
    }
    Eo() {
        // We can only determine limbo documents when we're in-sync with the server.
        if (!this.current) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                const t = this.ho;
        this.ho = rn(), this.fo.forEach((t => {
            this.Io(t.key) && (this.ho = this.ho.add(t.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        const e = [];
        return t.forEach((t => {
            this.ho.has(t) || e.push(new No(t));
        })), this.ho.forEach((n => {
            t.has(n) || e.push(new Co(n));
        })), e;
    }
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @returns The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    Ao(t) {
        this.uo = t.Bn, this.ho = rn();
        const e = this._o(t.documents);
        return this.applyChanges(e, /*updateLimboDocuments=*/ !0);
    }
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    Ro() {
        return go.fromInitialDocuments(this.query, this.fo, this.mutatedKeys, 0 /* Local */ === this.ao);
    }
}

/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */
class ko {
    constructor(
    /**
     * The query itself.
     */
    t, 
    /**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
    e, 
    /**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
    n) {
        this.query = t, this.targetId = e, this.view = n;
    }
}

/** Tracks a limbo resolution. */ class Fo {
    constructor(t) {
        this.key = t, 
        /**
         * Set to true once we've received a document. This is used in
         * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
         * decide whether it needs to manufacture a delete event for the target once
         * the target is CURRENT.
         */
        this.bo = !1;
    }
}

/**
 * An implementation of `SyncEngine` coordinating with other parts of SDK.
 *
 * The parts of SyncEngine that act as a callback to RemoteStore need to be
 * registered individually. This is done in `syncEngineWrite()` and
 * `syncEngineListen()` (as well as `applyPrimaryState()`) as these methods
 * serve as entry points to RemoteStore's functionality.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class $o {
    constructor(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    s, i, r) {
        this.localStore = t, this.remoteStore = e, this.eventManager = n, this.sharedClientState = s, 
        this.currentUser = i, this.maxConcurrentLimboResolutions = r, this.vo = {}, this.Po = new Ri((t => se(t)), ne), 
        this.Vo = new Map, 
        /**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query. The strings in this set are the result of calling
         * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
         *
         * The `Set` type was chosen because it provides efficient lookup and removal
         * of arbitrary elements and it also maintains insertion order, providing the
         * desired queue-like FIFO semantics.
         */
        this.So = new Set, 
        /**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */
        this.Do = new We(rt.comparator), 
        /**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */
        this.Co = new Map, this.No = new rr, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.xo = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.ko = new Map, this.Fo = fi.Yt(), this.onlineState = "Unknown" /* Unknown */ , 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.$o = void 0;
    }
    get isPrimaryClient() {
        return !0 === this.$o;
    }
}

/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */
async function Oo(t, e) {
    const n = fc(t);
    let s, i;
    const r = n.Po.get(e);
    if (r) 
    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
    // already exists when EventManager calls us for the first time. This
    // happens when the primary tab is already listening to this query on
    // behalf of another tab and the user of the primary also starts listening
    // to the query. EventManager will not have an assigned target ID in this
    // case and calls `listen` to obtain this ID.
    s = r.targetId, n.sharedClientState.addLocalQueryTarget(s), i = r.view.Ro(); else {
        const t = await Ji(n.localStore, te(e)), r = n.sharedClientState.addLocalQueryTarget(t.targetId);
        s = t.targetId, i = await Mo(n, e, s, "current" === r), n.isPrimaryClient && Ur(n.remoteStore, t);
    }
    return i;
}

/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */ async function Mo(t, e, n, s) {
    // PORTING NOTE: On Web only, we inject the code that registers new Limbo
    // targets based on view changes. This allows us to only depend on Limbo
    // changes when user code includes queries.
    t.Oo = (e, n, s) => async function(t, e, n, s) {
        let i = e.view._o(n);
        i.Nn && (
        // The query has a limit and some docs were removed, so we need
        // to re-run the query against the local store to make sure we
        // didn't lose any good docs that had been past the limit.
        i = await Xi(t.localStore, e.query, 
        /* usePreviousResults= */ !1).then((({documents: t}) => e.view._o(t, i))));
        const r = s && s.targetChanges.get(e.targetId), o = e.view.applyChanges(i, 
        /* updateLimboDocuments= */ t.isPrimaryClient, r);
        return Yo(t, e.targetId, o.To), o.snapshot;
    }(t, e, n, s);
    const i = await Xi(t.localStore, e, 
    /* usePreviousResults= */ !0), r = new xo(e, i.Bn), o = r._o(i.documents), c = an.createSynthesizedTargetChangeForCurrentChange(n, s && "Offline" /* Offline */ !== t.onlineState), u = r.applyChanges(o, 
    /* updateLimboDocuments= */ t.isPrimaryClient, c);
    Yo(t, n, u.To);
    const a = new ko(e, n, r);
    return t.Po.set(e, a), t.Vo.has(n) ? t.Vo.get(n).push(e) : t.Vo.set(n, [ e ]), u.snapshot;
}

/** Stops listening to the query. */ async function Lo(t, e) {
    const n = N(t), s = n.Po.get(e), i = n.Vo.get(s.targetId);
    if (i.length > 1) return n.Vo.set(s.targetId, i.filter((t => !ne(t, e)))), void n.Po.delete(e);
    // No other queries are mapped to the target, clean up the query and the target.
        if (n.isPrimaryClient) {
        // We need to remove the local query target first to allow us to verify
        // whether any other client is still interested in this target.
        n.sharedClientState.removeLocalQueryTarget(s.targetId);
        n.sharedClientState.isActiveQueryTarget(s.targetId) || await Yi(n.localStore, s.targetId, 
        /*keepPersistedTargetData=*/ !1).then((() => {
            n.sharedClientState.clearQueryState(s.targetId), Kr(n.remoteStore, s.targetId), 
            Ho(n, s.targetId);
        })).catch(yi);
    } else Ho(n, s.targetId), await Yi(n.localStore, s.targetId, 
    /*keepPersistedTargetData=*/ !0);
}

/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */ async function Bo(t, e, n) {
    const s = dc(t);
    try {
        const t = await function(t, e) {
            const n = N(t), s = M.now(), i = e.reduce(((t, e) => t.add(e.key)), rn());
            let r;
            return n.persistence.runTransaction("Locally write mutations", "readwrite", (t => n.Mn.pn(t, i).next((i => {
                r = i;
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                const o = [];
                for (const t of e) {
                    const e = Ce(t, r.get(t.key));
                    null != e && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    o.push(new Fe(t.key, e, Tt(e.value.mapValue), ve.exists(!0)));
                }
                return n._n.addMutationBatch(t, s, o, e);
            })))).then((t => (t.applyToLocalDocumentSet(r), {
                batchId: t.batchId,
                changes: r
            })));
        }(s.localStore, e);
        s.sharedClientState.addPendingMutation(t.batchId), function(t, e, n) {
            let s = t.xo[t.currentUser.toKey()];
            s || (s = new We(F));
            s = s.insert(e, n), t.xo[t.currentUser.toKey()] = s;
        }
        /**
 * Resolves or rejects the user callback for the given batch and then discards
 * it.
 */ (s, t.batchId, n), await tc(s, t.changes), await eo(s.remoteStore);
    } catch (t) {
        // If we can't persist the mutation, we reject the user callback and
        // don't send the mutation. The user can then retry the write.
        const e = _o(t, "Failed to persist write");
        n.reject(e);
    }
}

/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */ async function qo(t, e) {
    const n = N(t);
    try {
        const t = await Gi(n.localStore, e);
        // Update `receivedDocument` as appropriate for any limbo targets.
                e.targetChanges.forEach(((t, e) => {
            const s = n.Co.get(e);
            s && (
            // Since this is a limbo resolution lookup, it's for a single document
            // and it could be added, modified, or removed, but not a combination.
            C(t.addedDocuments.size + t.modifiedDocuments.size + t.removedDocuments.size <= 1), 
            t.addedDocuments.size > 0 ? s.bo = !0 : t.modifiedDocuments.size > 0 ? C(s.bo) : t.removedDocuments.size > 0 && (C(s.bo), 
            s.bo = !1));
        })), await tc(n, t, e);
    } catch (t) {
        await yi(t);
    }
}

/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */ function Uo(t, e, n) {
    const s = N(t);
    // If we are the secondary client, we explicitly ignore the remote store's
    // online state (the local client may go offline, even though the primary
    // tab remains online) and only apply the primary tab's online state from
    // SharedClientState.
        if (s.isPrimaryClient && 0 /* RemoteStore */ === n || !s.isPrimaryClient && 1 /* SharedClientState */ === n) {
        const t = [];
        s.Po.forEach(((n, s) => {
            const i = s.view.zr(e);
            i.snapshot && t.push(i.snapshot);
        })), function(t, e) {
            const n = N(t);
            n.onlineState = e;
            let s = !1;
            n.queries.forEach(((t, n) => {
                for (const t of n.listeners) 
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                t.zr(e) && (s = !0);
            })), s && bo(n);
        }(s.eventManager, e), t.length && s.vo._r(t), s.onlineState = e, s.isPrimaryClient && s.sharedClientState.setOnlineState(e);
    }
}

/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */ async function Ko(t, e, n) {
    const s = N(t);
    // PORTING NOTE: Multi-tab only.
        s.sharedClientState.updateQueryState(e, "rejected", n);
    const i = s.Co.get(e), r = i && i.key;
    if (r) {
        // TODO(klimt): We really only should do the following on permission
        // denied errors, but we don't have the cause code here.
        // It's a limbo doc. Create a synthetic event saying it was deleted.
        // This is kind of a hack. Ideally, we would have a method in the local
        // store to purge a document. However, it would be tricky to keep all of
        // the local store's invariants with another method.
        let t = new We(rt.comparator);
        t = t.insert(r, It.newNoDocument(r, L.min()));
        const n = rn().add(r), i = new un(L.min(), 
        /* targetChanges= */ new Map, 
        /* targetMismatches= */ new He(F), t, n);
        await qo(s, i), 
        // Since this query failed, we won't want to manually unlisten to it.
        // We only remove it from bookkeeping after we successfully applied the
        // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
        // this query when the RemoteStore restarts the Watch stream, which should
        // re-trigger the target failure.
        s.Do = s.Do.remove(r), s.Co.delete(e), Zo(s);
    } else await Yi(s.localStore, e, 
    /* keepPersistedTargetData */ !1).then((() => Ho(s, e, n))).catch(yi);
}

async function Qo(t, e) {
    const n = N(t), s = e.batch.batchId;
    try {
        const t = await ji(n.localStore, e);
        // The local store may or may not be able to apply the write result and
        // raise events immediately (depending on whether the watcher is caught
        // up), so we raise user callbacks first so that they consistently happen
        // before listen events.
                zo(n, s, /*error=*/ null), Go(n, s), n.sharedClientState.updateMutationState(s, "acknowledged"), 
        await tc(n, t);
    } catch (t) {
        await yi(t);
    }
}

async function jo(t, e, n) {
    const s = N(t);
    try {
        const t = await function(t, e) {
            const n = N(t);
            return n.persistence.runTransaction("Reject batch", "readwrite-primary", (t => {
                let s;
                return n._n.lookupMutationBatch(t, e).next((e => (C(null !== e), s = e.keys(), n._n.removeMutationBatch(t, e)))).next((() => n._n.performConsistencyCheck(t))).next((() => n.Mn.pn(t, s)));
            }));
        }
        /**
 * Returns the largest (latest) batch id in mutation queue that is pending
 * server response.
 *
 * Returns `BATCHID_UNKNOWN` if the queue is empty.
 */ (s.localStore, e);
        // The local store may or may not be able to apply the write result and
        // raise events immediately (depending on whether the watcher is caught up),
        // so we raise user callbacks first so that they consistently happen before
        // listen events.
                zo(s, e, n), Go(s, e), s.sharedClientState.updateMutationState(e, "rejected", n), 
        await tc(s, t);
    } catch (n) {
        await yi(n);
    }
}

/**
 * Registers a user callback that resolves when all pending mutations at the moment of calling
 * are acknowledged .
 */ async function Wo(t, e) {
    const n = N(t);
    zr(n.remoteStore) || v("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
    try {
        const t = await function(t) {
            const e = N(t);
            return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (t => e._n.getHighestUnacknowledgedBatchId(t)));
        }(n.localStore);
        if (-1 === t) 
        // Trigger the callback right away if there is no pending writes at the moment.
        return void e.resolve();
        const s = n.ko.get(t) || [];
        s.push(e), n.ko.set(t, s);
    } catch (t) {
        const n = _o(t, "Initialization of waitForPendingWrites() operation failed");
        e.reject(n);
    }
}

/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */ function Go(t, e) {
    (t.ko.get(e) || []).forEach((t => {
        t.resolve();
    })), t.ko.delete(e);
}

/** Reject all outstanding callbacks waiting for pending writes to complete. */ function zo(t, e, n) {
    const s = N(t);
    let i = s.xo[s.currentUser.toKey()];
    // NOTE: Mutations restored from persistence won't have callbacks, so it's
    // okay for there to be no callback for this ID.
        if (i) {
        const t = i.get(e);
        t && (n ? t.reject(n) : t.resolve(), i = i.remove(e)), s.xo[s.currentUser.toKey()] = i;
    }
}

function Ho(t, e, n = null) {
    t.sharedClientState.removeLocalQueryTarget(e);
    for (const s of t.Vo.get(e)) t.Po.delete(s), n && t.vo.Mo(s, n);
    if (t.Vo.delete(e), t.isPrimaryClient) {
        t.No.Zn(e).forEach((e => {
            t.No.containsKey(e) || 
            // We removed the last reference for this key
            Jo(t, e);
        }));
    }
}

function Jo(t, e) {
    t.So.delete(e.path.canonicalString());
    // It's possible that the target already got removed because the query failed. In that case,
    // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
    const n = t.Do.get(e);
    null !== n && (Kr(t.remoteStore, n), t.Do = t.Do.remove(e), t.Co.delete(n), Zo(t));
}

function Yo(t, e, n) {
    for (const s of n) if (s instanceof Co) t.No.addReference(s.key, e), Xo(t, s); else if (s instanceof No) {
        v("SyncEngine", "Document no longer in limbo: " + s.key), t.No.removeReference(s.key, e);
        t.No.containsKey(s.key) || 
        // We removed the last reference for this key
        Jo(t, s.key);
    } else D();
}

function Xo(t, e) {
    const n = e.key, s = n.path.canonicalString();
    t.Do.get(n) || t.So.has(s) || (v("SyncEngine", "New document in limbo: " + n), t.So.add(s), 
    Zo(t));
}

/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */ function Zo(t) {
    for (;t.So.size > 0 && t.Do.size < t.maxConcurrentLimboResolutions; ) {
        const e = t.So.values().next().value;
        t.So.delete(e);
        const n = new rt(Q.fromString(e)), s = t.Fo.next();
        t.Co.set(s, new Fo(n)), t.Do = t.Do.insert(n, s), Ur(t.remoteStore, new Ms(te(Gt(n.path)), s, 2 /* LimboResolution */ , T.o));
    }
}

async function tc(t, e, n) {
    const s = N(t), i = [], r = [], o = [];
    s.Po.isEmpty() || (s.Po.forEach(((t, c) => {
        o.push(s.Oo(c, e, n).then((t => {
            if (t) {
                s.isPrimaryClient && s.sharedClientState.updateQueryState(c.targetId, t.fromCache ? "not-current" : "current"), 
                i.push(t);
                const e = Bi.Pn(c.targetId, t);
                r.push(e);
            }
        })));
    })), await Promise.all(o), s.vo._r(i), await async function(t, e) {
        const n = N(t);
        try {
            await n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t => Rs.forEach(e, (e => Rs.forEach(e.bn, (s => n.persistence.referenceDelegate.addReference(t, e.targetId, s))).next((() => Rs.forEach(e.vn, (s => n.persistence.referenceDelegate.removeReference(t, e.targetId, s)))))))));
        } catch (t) {
            if (!Ss(t)) throw t;
            // If `notifyLocalViewChanges` fails, we did not advance the sequence
            // number for the documents that were included in this transaction.
            // This might trigger them to be deleted earlier than they otherwise
            // would have, but it should not invalidate the integrity of the data.
            v("LocalStore", "Failed to update sequence numbers: " + t);
        }
        for (const t of e) {
            const e = t.targetId;
            if (!t.fromCache) {
                const t = n.kn.get(e), s = t.snapshotVersion, i = t.withLastLimboFreeSnapshotVersion(s);
                // Advance the last limbo free snapshot version
                                n.kn = n.kn.insert(e, i);
            }
        }
    }(s.localStore, r));
}

async function ec(t, e) {
    const n = N(t);
    if (!n.currentUser.isEqual(e)) {
        v("SyncEngine", "User change. New user:", e.toKey());
        const t = await Qi(n.localStore, e);
        n.currentUser = e, 
        // Fails tasks waiting for pending writes requested by previous user.
        function(t, e) {
            t.ko.forEach((t => {
                t.forEach((t => {
                    t.reject(new A(I.CANCELLED, e));
                }));
            })), t.ko.clear();
        }(n, "'waitForPendingWrites' promise is rejected due to a user change."), 
        // TODO(b/114226417): Consider calling this only in the primary tab.
        n.sharedClientState.handleUserChange(e, t.removedBatchIds, t.addedBatchIds), await tc(n, t.Ln);
    }
}

function nc(t, e) {
    const n = N(t), s = n.Co.get(e);
    if (s && s.bo) return rn().add(s.key);
    {
        let t = rn();
        const s = n.Vo.get(e);
        if (!s) return t;
        for (const e of s) {
            const s = n.Po.get(e);
            t = t.unionWith(s.view.wo);
        }
        return t;
    }
}

function fc(t) {
    const e = N(t);
    return e.remoteStore.remoteSyncer.applyRemoteEvent = qo.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = nc.bind(null, e), 
    e.remoteStore.remoteSyncer.rejectListen = Ko.bind(null, e), e.vo._r = Ao.bind(null, e.eventManager), 
    e.vo.Mo = Ro.bind(null, e.eventManager), e;
}

function dc(t) {
    const e = N(t);
    return e.remoteStore.remoteSyncer.applySuccessfulWrite = Qo.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = jo.bind(null, e), 
    e;
}

/**
 * Loads a Firestore bundle into the SDK. The returned promise resolves when
 * the bundle finished loading.
 *
 * @param syncEngine - SyncEngine to use.
 * @param bundleReader - Bundle to load into the SDK.
 * @param task - LoadBundleTask used to update the loading progress to public API.
 */ function wc(t, e, n) {
    const s = N(t);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
        (async function(t, e, n) {
        try {
            const s = await e.getMetadata();
            if (await function(t, e) {
                const n = N(t), s = An(e.createTime);
                return n.persistence.runTransaction("hasNewerBundle", "readonly", (t => n.Ke.getBundleMetadata(t, e.id))).then((t => !!t && t.createTime.compareTo(s) >= 0));
            }
            /**
 * Saves the given `BundleMetadata` to local persistence.
 */ (t.localStore, s)) return await e.close(), void n._completeWith(function(t) {
                return {
                    taskState: "Success",
                    documentsLoaded: t.totalDocuments,
                    bytesLoaded: t.totalBytes,
                    totalDocuments: t.totalDocuments,
                    totalBytes: t.totalBytes
                };
            }(s));
            n._updateProgress(Do(s));
            const i = new So(s, t.localStore, e.R);
            let r = await e.Lo();
            for (;r; ) {
                const t = await i.oo(r);
                t && n._updateProgress(t), r = await e.Lo();
            }
            const o = await i.complete();
            // TODO(b/160876443): This currently raises snapshots with
            // `fromCache=false` if users already listen to some queries and bundles
            // has newer version.
                        await tc(t, o.wn, 
            /* remoteEvent */ void 0), 
            // Save metadata, so loading the same bundle will skip.
            await function(t, e) {
                const n = N(t);
                return n.persistence.runTransaction("Save bundle", "readwrite", (t => n.Ke.saveBundleMetadata(t, e)));
            }
            /**
 * Returns a promise of a `NamedQuery` associated with given query name. Promise
 * resolves to undefined if no persisted data can be found.
 */ (t.localStore, s), n._completeWith(o.progress);
        } catch (t) {
            V("SyncEngine", `Loading bundle failed with ${t}`), n._failWith(t);
        }
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */)(s, e, n).then((() => {
        s.sharedClientState.notifyBundleLoaded();
    }));
}

class _c {
    constructor() {
        this.synchronizeTabs = !1;
    }
    async initialize(t) {
        this.R = Nr(t.databaseInfo.databaseId), this.sharedClientState = this.Bo(t), this.persistence = this.qo(t), 
        await this.persistence.start(), this.gcScheduler = this.Uo(t), this.localStore = this.Ko(t);
    }
    Uo(t) {
        return null;
    }
    Ko(t) {
        return Ki(this.persistence, new qi, t.initialUser, this.R);
    }
    qo(t) {
        return new lr(dr.bs, this.R);
    }
    Bo(t) {
        return new Rr;
    }
    async terminate() {
        this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), 
        await this.persistence.shutdown();
    }
}

/**
 * Initializes and wires the components that are needed to interface with the
 * network.
 */ class gc {
    async initialize(t, e) {
        this.localStore || (this.localStore = t.localStore, this.sharedClientState = t.sharedClientState, 
        this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), 
        this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(e, 
        /* startAsPrimary=*/ !t.synchronizeTabs), this.sharedClientState.onlineStateHandler = t => Uo(this.syncEngine, t, 1 /* SharedClientState */), 
        this.remoteStore.remoteSyncer.handleCredentialChange = ec.bind(null, this.syncEngine), 
        await ho(this.remoteStore, this.syncEngine.isPrimaryClient));
    }
    createEventManager(t) {
        return new Eo;
    }
    createDatastore(t) {
        const e = Nr(t.databaseInfo.databaseId), n = (s = t.databaseInfo, new Sr(s));
        var s;
        /** Return the Platform-specific connectivity monitor. */        return function(t, e, n) {
            return new Or(t, e, n);
        }(t.credentials, n, e);
    }
    createRemoteStore(t) {
        return e = this.localStore, n = this.datastore, s = t.asyncQueue, i = t => Uo(this.syncEngine, t, 0 /* RemoteStore */), 
        r = vr.yt() ? new vr : new br, new Lr(e, n, s, i, r);
        var e, n, s, i, r;
        /** Re-enables the network. Idempotent. */    }
    createSyncEngine(t, e) {
        return function(t, e, n, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        s, i, r, o) {
            const c = new $o(t, e, n, s, i, r);
            return o && (c.$o = !0), c;
        }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t.initialUser, t.maxConcurrentLimboResolutions, e);
    }
    terminate() {
        return async function(t) {
            const e = N(t);
            v("RemoteStore", "RemoteStore shutting down."), e.Or.add(5 /* Shutdown */), await qr(e), 
            e.Lr.shutdown(), 
            // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
            // triggering spurious listener events with cached data, etc.
            e.Br.set("Unknown" /* Unknown */);
        }(this.remoteStore);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * How many bytes to read each time when `ReadableStreamReader.read()` is
 * called. Only applicable for byte streams that we control (e.g. those backed
 * by an UInt8Array).
 */
/**
 * Builds a `ByteStreamReader` from a UInt8Array.
 * @param source - The data source to use.
 * @param bytesPerRead - How many bytes each `read()` from the returned reader
 *        will read.
 */
function pc(t, e = 10240) {
    let n = 0;
    return {
        async read() {
            if (n < t.byteLength) {
                const s = {
                    value: t.slice(n, n + e),
                    done: !1
                };
                return n += e, s;
            }
            return {
                done: !0
            };
        },
        async cancel() {},
        releaseLock() {},
        closed: Promise.reject("unimplemented")
    };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */
class Ec {
    constructor(t) {
        this.observer = t, 
        /**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */
        this.muted = !1;
    }
    next(t) {
        this.observer.next && this.jo(this.observer.next, t);
    }
    error(t) {
        this.observer.error ? this.jo(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
    }
    Wo() {
        this.muted = !0;
    }
    jo(t, e) {
        this.muted || setTimeout((() => {
            this.muted || t(e);
        }), 0);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A class representing a bundle.
 *
 * Takes a bundle stream or buffer, and presents abstractions to read bundled
 * elements out of the underlying content.
 */ class Tc {
    constructor(
    /** The reader to read from underlying binary bundle data source. */
    t, e) {
        this.Go = t, this.R = e, 
        /** Cached bundle metadata. */
        this.metadata = new As, 
        /**
         * Internal buffer to hold bundle content, accumulating incomplete element
         * content.
         */
        this.buffer = new Uint8Array, this.zo = new TextDecoder("utf-8"), 
        // Read the metadata (which is the first element).
        this.Ho().then((t => {
            t && t.io() ? this.metadata.resolve(t.payload.metadata) : this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null == t ? void 0 : t.payload)}`));
        }), (t => this.metadata.reject(t)));
    }
    close() {
        return this.Go.cancel();
    }
    async getMetadata() {
        return this.metadata.promise;
    }
    async Lo() {
        // Makes sure metadata is read before proceeding.
        return await this.getMetadata(), this.Ho();
    }
    /**
     * Reads from the head of internal buffer, and pulling more data from
     * underlying stream if a complete element cannot be found, until an
     * element(including the prefixed length and the JSON string) is found.
     *
     * Once a complete element is read, it is dropped from internal buffer.
     *
     * Returns either the bundled element, or null if we have reached the end of
     * the stream.
     */    async Ho() {
        const t = await this.Jo();
        if (null === t) return null;
        const e = this.zo.decode(t), n = Number(e);
        isNaN(n) && this.Yo(`length string (${e}) is not valid number`);
        const s = await this.Xo(n);
        return new Po(JSON.parse(s), t.length + n);
    }
    /** First index of '{' from the underlying buffer. */    Zo() {
        return this.buffer.findIndex((t => t === "{".charCodeAt(0)));
    }
    /**
     * Reads from the beginning of the internal buffer, until the first '{', and
     * return the content.
     *
     * If reached end of the stream, returns a null.
     */    async Jo() {
        for (;this.Zo() < 0; ) {
            if (await this.tc()) break;
        }
        // Broke out of the loop because underlying stream is closed, and there
        // happens to be no more data to process.
                if (0 === this.buffer.length) return null;
        const t = this.Zo();
        // Broke out of the loop because underlying stream is closed, but still
        // cannot find an open bracket.
                t < 0 && this.Yo("Reached the end of bundle when a length string is expected.");
        const e = this.buffer.slice(0, t);
        // Update the internal buffer to drop the read length.
                return this.buffer = this.buffer.slice(t), e;
    }
    /**
     * Reads from a specified position from the internal buffer, for a specified
     * number of bytes, pulling more data from the underlying stream if needed.
     *
     * Returns a string decoded from the read bytes.
     */    async Xo(t) {
        for (;this.buffer.length < t; ) {
            await this.tc() && this.Yo("Reached the end of bundle when more is expected.");
        }
        const e = this.zo.decode(this.buffer.slice(0, t));
        // Update the internal buffer to drop the read json string.
                return this.buffer = this.buffer.slice(t), e;
    }
    Yo(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        throw this.Go.cancel(), new Error(`Invalid bundle format: ${t}`);
    }
    /**
     * Pulls more data from underlying stream to internal buffer.
     * Returns a boolean indicating whether the stream is finished.
     */    async tc() {
        const t = await this.Go.read();
        if (!t.done) {
            const e = new Uint8Array(this.buffer.length + t.value.length);
            e.set(this.buffer), e.set(t.value, this.buffer.length), this.buffer = e;
        }
        return t.done;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */
class Ic {
    constructor(t) {
        this.datastore = t, 
        // The version of each document that was read during this transaction.
        this.readVersions = new Map, this.mutations = [], this.committed = !1, 
        /**
         * A deferred usage error that occurred previously in this transaction that
         * will cause the transaction to fail once it actually commits.
         */
        this.lastWriteError = null, 
        /**
         * Set of documents that have been written in the transaction.
         *
         * When there's more than one write to the same key in a transaction, any
         * writes after the first are handled differently.
         */
        this.writtenDocs = new Set;
    }
    async lookup(t) {
        if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw new A(I.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
        const e = await async function(t, e) {
            const n = N(t), s = Dn(n.R) + "/documents", i = {
                documents: e.map((t => vn(n.R, t)))
            }, r = await n.$i("BatchGetDocuments", s, i), o = new Map;
            r.forEach((t => {
                const e = kn(n.R, t);
                o.set(e.key.toString(), e);
            }));
            const c = [];
            return e.forEach((t => {
                const e = o.get(t.toString());
                C(!!e), c.push(e);
            })), c;
        }(this.datastore, t);
        return e.forEach((t => this.recordVersion(t))), e;
    }
    set(t, e) {
        this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }
    update(t, e) {
        try {
            this.write(e.toMutation(t, this.preconditionForUpdate(t)));
        } catch (t) {
            this.lastWriteError = t;
        }
        this.writtenDocs.add(t.toString());
    }
    delete(t) {
        this.write(new Le(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }
    async commit() {
        if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
        const t = this.readVersions;
        // For each mutation, note that the doc was written.
                this.mutations.forEach((e => {
            t.delete(e.key.toString());
        })), 
        // For each document that was read but not written to, we want to perform
        // a `verify` operation.
        t.forEach(((t, e) => {
            const n = rt.fromPath(e);
            this.mutations.push(new Be(n, this.precondition(n)));
        })), await async function(t, e) {
            const n = N(t), s = Dn(n.R) + "/documents", i = {
                writes: e.map((t => $n(n.R, t)))
            };
            await n.Ni("Commit", s, i);
        }(this.datastore, this.mutations), this.committed = !0;
    }
    recordVersion(t) {
        let e;
        if (t.isFoundDocument()) e = t.version; else {
            if (!t.isNoDocument()) throw D();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
            e = L.min();
        }
        const n = this.readVersions.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new A(I.ABORTED, "Document version changed between two reads.");
        } else this.readVersions.set(t.key.toString(), e);
    }
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */    precondition(t) {
        const e = this.readVersions.get(t.toString());
        return !this.writtenDocs.has(t.toString()) && e ? ve.updateTime(e) : ve.none();
    }
    /**
     * Returns the precondition for a document if the operation is an update.
     */    preconditionForUpdate(t) {
        const e = this.readVersions.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.writtenDocs.has(t.toString()) && e) {
            if (e.isEqual(L.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new A(I.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return ve.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
        return ve.exists(!0);
    }
    write(t) {
        this.ensureCommitNotCalled(), this.mutations.push(t);
    }
    ensureCommitNotCalled() {}
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */
class Ac {
    constructor(t, e, n, s) {
        this.asyncQueue = t, this.datastore = e, this.updateFunction = n, this.deferred = s, 
        this.ec = 5, this.Zi = new xr(this.asyncQueue, "transaction_retry" /* TransactionRetry */);
    }
    /** Runs the transaction and sets the result on deferred. */    run() {
        this.ec -= 1, this.nc();
    }
    nc() {
        this.Zi.ji((async () => {
            const t = new Ic(this.datastore), e = this.sc(t);
            e && e.then((e => {
                this.asyncQueue.enqueueAndForget((() => t.commit().then((() => {
                    this.deferred.resolve(e);
                })).catch((t => {
                    this.ic(t);
                }))));
            })).catch((t => {
                this.ic(t);
            }));
        }));
    }
    sc(t) {
        try {
            const e = this.updateFunction(t);
            return !nt(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.deferred.reject(t), null;
        }
    }
    ic(t) {
        this.ec > 0 && this.rc(t) ? (this.ec -= 1, this.asyncQueue.enqueueAndForget((() => (this.nc(), 
        Promise.resolve())))) : this.deferred.reject(t);
    }
    rc(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            const e = t.code;
            return "aborted" === e || "failed-precondition" === e || !Qe(e);
        }
        return !1;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */
class Rc {
    constructor(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e, n) {
        this.credentials = t, this.asyncQueue = e, this.databaseInfo = n, this.user = wr.UNAUTHENTICATED, 
        this.clientId = k.u(), this.credentialListener = () => Promise.resolve(), this.credentials.setChangeListener(e, (async t => {
            v("FirestoreClient", "Received user=", t.uid), await this.credentialListener(t), 
            this.user = t;
        }));
    }
    async getConfiguration() {
        return {
            asyncQueue: this.asyncQueue,
            databaseInfo: this.databaseInfo,
            clientId: this.clientId,
            credentials: this.credentials,
            initialUser: this.user,
            maxConcurrentLimboResolutions: 100
        };
    }
    setCredentialChangeListener(t) {
        this.credentialListener = t;
    }
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */    verifyNotTerminated() {
        if (this.asyncQueue.isShuttingDown) throw new A(I.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    terminate() {
        this.asyncQueue.enterRestrictedMode();
        const t = new As;
        return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async () => {
            try {
                this.onlineComponents && await this.onlineComponents.terminate(), this.offlineComponents && await this.offlineComponents.terminate(), 
                // `removeChangeListener` must be called after shutting down the
                // RemoteStore as it will prevent the RemoteStore from retrieving
                // auth tokens.
                this.credentials.removeChangeListener(), t.resolve();
            } catch (e) {
                const n = _o(e, "Failed to shutdown persistence");
                t.reject(n);
            }
        })), t.promise;
    }
}

async function bc(t, e) {
    t.asyncQueue.verifyOperationInProgress(), v("FirestoreClient", "Initializing OfflineComponentProvider");
    const n = await t.getConfiguration();
    await e.initialize(n);
    let s = n.initialUser;
    t.setCredentialChangeListener((async t => {
        s.isEqual(t) || (await Qi(e.localStore, t), s = t);
    })), 
    // When a user calls clearPersistence() in one client, all other clients
    // need to be terminated to allow the delete to succeed.
    e.persistence.setDatabaseDeletedListener((() => t.terminate())), t.offlineComponents = e;
}

async function vc(t, e) {
    t.asyncQueue.verifyOperationInProgress();
    const n = await Pc(t);
    v("FirestoreClient", "Initializing OnlineComponentProvider");
    const s = await t.getConfiguration();
    await e.initialize(n, s), 
    // The CredentialChangeListener of the online component provider takes
    // precedence over the offline component provider.
    t.setCredentialChangeListener((t => async function(t, e) {
        const n = N(t);
        n.asyncQueue.verifyOperationInProgress(), v("RemoteStore", "RemoteStore received new credentials");
        const s = zr(n);
        // Tear down and re-create our network streams. This will ensure we get a
        // fresh auth token for the new user and re-fill the write pipeline with
        // new mutations from the LocalStore (since mutations are per-user).
                n.Or.add(3 /* CredentialChange */), await qr(n), s && 
        // Don't set the network status to Unknown if we are offline.
        n.Br.set("Unknown" /* Unknown */), await n.remoteSyncer.handleCredentialChange(e), 
        n.Or.delete(3 /* CredentialChange */), await Br(n);
    }(e.remoteStore, t))), t.onlineComponents = e;
}

async function Pc(t) {
    return t.offlineComponents || (v("FirestoreClient", "Using default OfflineComponentProvider"), 
    await bc(t, new _c)), t.offlineComponents;
}

async function Vc(t) {
    return t.onlineComponents || (v("FirestoreClient", "Using default OnlineComponentProvider"), 
    await vc(t, new gc)), t.onlineComponents;
}

function Sc(t) {
    return Pc(t).then((t => t.persistence));
}

function Dc(t) {
    return Pc(t).then((t => t.localStore));
}

function Cc(t) {
    return Vc(t).then((t => t.remoteStore));
}

function Nc(t) {
    return Vc(t).then((t => t.syncEngine));
}

async function xc(t) {
    const e = await Vc(t), n = e.eventManager;
    return n.onListen = Oo.bind(null, e.syncEngine), n.onUnlisten = Lo.bind(null, e.syncEngine), 
    n;
}

/** Enables the network connection and re-enqueues all pending operations. */ function kc(t) {
    return t.asyncQueue.enqueue((async () => {
        const e = await Sc(t), n = await Cc(t);
        return e.setNetworkEnabled(!0), function(t) {
            const e = N(t);
            return e.Or.delete(0 /* UserDisabled */), Br(e);
        }(n);
    }));
}

/** Disables the network connection. Pending operations will not complete. */ function Fc(t) {
    return t.asyncQueue.enqueue((async () => {
        const e = await Sc(t), n = await Cc(t);
        return e.setNetworkEnabled(!1), async function(t) {
            const e = N(t);
            e.Or.add(0 /* UserDisabled */), await qr(e), 
            // Set the OnlineState to Offline so get()s return from cache, etc.
            e.Br.set("Offline" /* Offline */);
        }(n);
    }));
}

/**
 * Returns a Promise that resolves when all writes that were pending at the time
 * this method was called received server acknowledgement. An acknowledgement
 * can be either acceptance or rejection.
 */ function $c(t, e) {
    const n = new As;
    return t.asyncQueue.enqueueAndForget((async () => async function(t, e, n) {
        try {
            const s = await function(t, e) {
                const n = N(t);
                return n.persistence.runTransaction("read document", "readonly", (t => n.Mn.mn(t, e)));
            }(t, e);
            s.isFoundDocument() ? n.resolve(s) : s.isNoDocument() ? n.resolve(null) : n.reject(new A(I.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
        } catch (t) {
            const s = _o(t, `Failed to get document '${e} from cache`);
            n.reject(s);
        }
    }
    /**
 * Retrieves a latency-compensated document from the backend via a
 * SnapshotListener.
 */ (await Dc(t), e, n))), n.promise;
}

function Oc(t, e, n = {}) {
    const s = new As;
    return t.asyncQueue.enqueueAndForget((async () => function(t, e, n, s, i) {
        const r = new Ec({
            next: r => {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                e.enqueueAndForget((() => Io(t, o)));
                const c = r.docs.has(n);
                !c && r.fromCache ? 
                // TODO(dimond): If we're online and the document doesn't
                // exist then we resolve with a doc.exists set to false. If
                // we're offline however, we reject the Promise in this
                // case. Two options: 1) Cache the negative response from
                // the server so we can deliver that even when you're
                // offline 2) Actually reject the Promise in the online case
                // if the document doesn't exist.
                i.reject(new A(I.UNAVAILABLE, "Failed to get document because the client is offline.")) : c && r.fromCache && s && "server" === s.source ? i.reject(new A(I.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(r);
            },
            error: t => i.reject(t)
        }), o = new vo(Gt(n.path), r, {
            includeMetadataChanges: !0,
            so: !0
        });
        return To(t, o);
    }(await xc(t), t.asyncQueue, e, n, s))), s.promise;
}

function Mc(t, e) {
    const n = new As;
    return t.asyncQueue.enqueueAndForget((async () => async function(t, e, n) {
        try {
            const s = await Xi(t, e, 
            /* usePreviousResults= */ !0), i = new xo(e, s.Bn), r = i._o(s.documents), o = i.applyChanges(r, 
            /* updateLimboDocuments= */ !1);
            n.resolve(o.snapshot);
        } catch (t) {
            const s = _o(t, `Failed to execute query '${e} against cache`);
            n.reject(s);
        }
    }
    /**
 * Retrieves a latency-compensated query snapshot from the backend via a
 * SnapshotListener.
 */ (await Dc(t), e, n))), n.promise;
}

function Lc(t, e, n = {}) {
    const s = new As;
    return t.asyncQueue.enqueueAndForget((async () => function(t, e, n, s, i) {
        const r = new Ec({
            next: n => {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                e.enqueueAndForget((() => Io(t, o))), n.fromCache && "server" === s.source ? i.reject(new A(I.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
            },
            error: t => i.reject(t)
        }), o = new vo(n, r, {
            includeMetadataChanges: !0,
            so: !0
        });
        return To(t, o);
    }(await xc(t), t.asyncQueue, e, n, s))), s.promise;
}

function Bc(t, e) {
    const n = new Ec(e);
    return t.asyncQueue.enqueueAndForget((async () => function(t, e) {
        N(t).Gr.add(e), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        e.next();
    }(await xc(t), n))), () => {
        n.Wo(), t.asyncQueue.enqueueAndForget((async () => function(t, e) {
            N(t).Gr.delete(e);
        }(await xc(t), n)));
    };
}

/**
 * Takes an updateFunction in which a set of reads and writes can be performed
 * atomically. In the updateFunction, the client can read and write values
 * using the supplied transaction object. After the updateFunction, all
 * changes will be committed. If a retryable error occurs (ex: some other
 * client has changed any of the data referenced), then the updateFunction
 * will be called again after a backoff. If the updateFunction still fails
 * after all retries, then the transaction will be rejected.
 *
 * The transaction object passed to the updateFunction contains methods for
 * accessing documents and collections. Unlike other datastore access, data
 * accessed with the transaction will not reflect local changes that have not
 * been committed. For this reason, it is required that all reads are
 * performed before any writes. Transactions must be performed while online.
 */ function qc(t, e) {
    const n = new As;
    return t.asyncQueue.enqueueAndForget((async () => {
        const s = await function(t) {
            return Vc(t).then((t => t.datastore));
        }(t);
        new Ac(t.asyncQueue, s, e, n).run();
    })), n.promise;
}

function Uc(t, e, n, s) {
    const i = function(t, e) {
        let n;
        n = "string" == typeof t ? (new TextEncoder).encode(t) : t;
        return function(t, e) {
            return new Tc(t, e);
        }(function(t, e) {
            if (t instanceof Uint8Array) return pc(t, e);
            if (t instanceof ArrayBuffer) return pc(new Uint8Array(t), e);
            if (t instanceof ReadableStream) return t.getReader();
            throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
        }(n), e);
    }
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (n, Nr(e));
    t.asyncQueue.enqueueAndForget((async () => {
        wc(await Nc(t), i, s);
    }));
}

function Kc(t, e) {
    return t.asyncQueue.enqueue((async () => function(t, e) {
        const n = N(t);
        return n.persistence.runTransaction("Get named query", "readonly", (t => n.Ke.getNamedQuery(t, e)));
    }(await Dc(t), e)));
}

class Qc {
    /**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     * @param useFetchStreams Whether to use the Fetch API instead of
     * XMLHTTPRequest
     */
    constructor(t, e, n, s, i, r, o, c) {
        this.databaseId = t, this.appId = e, this.persistenceKey = n, this.host = s, this.ssl = i, 
        this.forceLongPolling = r, this.autoDetectLongPolling = o, this.useFetchStreams = c;
    }
}

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */
class jc {
    constructor(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    get isDefaultDatabase() {
        return "(default)" === this.database;
    }
    isEqual(t) {
        return t instanceof jc && t.projectId === this.projectId && t.database === this.database;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wc = new Map;

/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gc {
    constructor(t, e) {
        this.user = e, this.type = "OAuth", this.authHeaders = {}, 
        // Set the headers using Object Literal notation to avoid minification
        this.authHeaders.Authorization = `Bearer ${t}`;
    }
}

/** A CredentialsProvider that always yields an empty token. */ class zc {
    constructor() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.changeListener = null;
    }
    getToken() {
        return Promise.resolve(null);
    }
    invalidateToken() {}
    setChangeListener(t, e) {
        this.changeListener = e, 
        // Fire with initial user.
        t.enqueueRetryable((() => e(wr.UNAUTHENTICATED)));
    }
    removeChangeListener() {
        this.changeListener = null;
    }
}

/**
 * A CredentialsProvider that always returns a constant token. Used for
 * emulator token mocking.
 */ class Hc {
    constructor(t) {
        this.token = t, 
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.changeListener = null;
    }
    getToken() {
        return Promise.resolve(this.token);
    }
    invalidateToken() {}
    setChangeListener(t, e) {
        this.changeListener = e, 
        // Fire with initial user.
        t.enqueueRetryable((() => e(this.token.user)));
    }
    removeChangeListener() {
        this.changeListener = null;
    }
}

class Jc {
    constructor(t) {
        /** Tracks the current User. */
        this.currentUser = wr.UNAUTHENTICATED, 
        /** Promise that allows blocking on the initialization of Firebase Auth. */
        this.oc = new As, 
        /**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */
        this.cc = 0, this.forceRefresh = !1, this.auth = null, this.asyncQueue = null, this.uc = () => {
            this.cc++, this.currentUser = this.ac(), this.oc.resolve(), this.changeListener && this.asyncQueue.enqueueRetryable((() => this.changeListener(this.currentUser)));
        };
        const e = t => {
            v("FirebaseCredentialsProvider", "Auth detected"), this.auth = t, this.auth.addAuthTokenListener(this.uc);
        };
        t.onInit((t => e(t))), 
        // Our users can initialize Auth right after Firestore, so we give it
        // a chance to register itself with the component framework before we
        // determine whether to start up in unauthenticated mode.
        setTimeout((() => {
            if (!this.auth) {
                const n = t.getImmediate({
                    optional: !0
                });
                n ? e(n) : (
                // If auth is still not available, proceed with `null` user
                v("FirebaseCredentialsProvider", "Auth not yet detected"), this.oc.resolve());
            }
        }), 0);
    }
    getToken() {
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
        const t = this.cc, e = this.forceRefresh;
        return this.forceRefresh = !1, this.auth ? this.auth.getToken(e).then((e => 
        // Cancel the request since the token changed while the request was
        // outstanding so the response is potentially for a previous user (which
        // user, we can't be sure).
        this.cc !== t ? (v("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
        this.getToken()) : e ? (C("string" == typeof e.accessToken), new Gc(e.accessToken, this.currentUser)) : null)) : Promise.resolve(null);
    }
    invalidateToken() {
        this.forceRefresh = !0;
    }
    setChangeListener(t, e) {
        this.asyncQueue = t, 
        // Blocks the AsyncQueue until the next user is available.
        this.asyncQueue.enqueueRetryable((async () => {
            await this.oc.promise, await e(this.currentUser), this.changeListener = e;
        }));
    }
    removeChangeListener() {
        this.auth && this.auth.removeAuthTokenListener(this.uc), this.changeListener = () => Promise.resolve();
    }
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    ac() {
        const t = this.auth && this.auth.getUid();
        return C(null === t || "string" == typeof t), new wr(t);
    }
}

/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */ class Yc {
    constructor(t, e, n) {
        this.hc = t, this.lc = e, this.fc = n, this.type = "FirstParty", this.user = wr.FIRST_PARTY;
    }
    get authHeaders() {
        const t = {
            "X-Goog-AuthUser": this.lc
        }, e = this.hc.auth.getAuthHeaderValueForFirstParty([]);
        // Use array notation to prevent minification
                return e && (t.Authorization = e), this.fc && (t["X-Goog-Iam-Authorization-Token"] = this.fc), 
        t;
    }
}

/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */ class Xc {
    constructor(t, e, n) {
        this.hc = t, this.lc = e, this.fc = n;
    }
    getToken() {
        return Promise.resolve(new Yc(this.hc, this.lc, this.fc));
    }
    setChangeListener(t, e) {
        // Fire with initial uid.
        t.enqueueRetryable((() => e(wr.FIRST_PARTY)));
    }
    removeChangeListener() {}
    invalidateToken() {}
}

/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zc(t, e, n) {
    if (!n) throw new A(I.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${e}.`);
}

function tu(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new A(I.INVALID_ARGUMENT, `Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);
    return e;
}

/**
 * Validates that two boolean options are not set at the same time.
 */ function eu(t, e, n, s) {
    if (!0 === e && !0 === s) throw new A(I.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}

/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */ function nu(t) {
    if (!rt.isDocumentKey(t)) throw new A(I.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`);
}

/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */ function su(t) {
    if (rt.isDocumentKey(t)) throw new A(I.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`);
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
/** Returns a string describing the type / value of the provided input. */
function iu(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = `${t.substring(0, 20)}...`), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        {
            const e = 
            /** Hacky method to try to get the constructor name for an object. */
            function(t) {
                if (t.constructor) {
                    const e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                    if (e && e.length > 1) return e[1];
                }
                return null;
            }
            /**
 * Casts `obj` to `T`, optionally unwrapping Compat types to expose the
 * underlying instance. Throws if  `obj` is not an instance of `T`.
 *
 * This cast is used in the Lite and Full SDK to verify instance types for
 * arguments passed to the public API.
 */ (t);
            return e ? `a custom ${e} object` : "an object";
        }
    }
    return "function" == typeof t ? "a function" : D();
}

function ru(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    if ("_delegate" in t && (
    // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t = t._delegate), !(t instanceof e)) {
        if (e.name === t.constructor.name) throw new A(I.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        {
            const n = iu(t);
            throw new A(I.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
        }
    }
    return t;
}

function ou(t, e) {
    if (e <= 0) throw new A(I.INVALID_ARGUMENT, `Function ${t}() requires a positive number, but it was: ${e}.`);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
class cu {
    constructor(t) {
        var e;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new A(I.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = true;
        } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new A(I.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
        this.useFetchStreams = !!t.useFetchStreams, eu("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
    }
    isEqual(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ class uu {
    /** @hideconstructor */
    constructor(t, e) {
        /**
         * Whether it's a Firestore or Firestore Lite instance.
         */
        this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new cu({}), 
        this._settingsFrozen = !1, t instanceof jc ? (this._databaseId = t, this._credentials = new zc) : (this._app = t, 
        this._databaseId = function(t) {
            if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new A(I.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
            return new jc(t.options.projectId);
        }
        /**
 * Modify this instance to communicate with the Cloud Firestore emulator.
 *
 * Note: This must be called before this instance has been used to do any
 * operations.
 *
 * @param firestore - The Firestore instance to configure to connect to the
 * emulator.
 * @param host - the emulator host (ex: localhost).
 * @param port - the emulator port (ex: 9000).
 * @param options.mockUserToken - the mock auth token to use for unit testing
 * Security Rules.
 */ (t), this._credentials = new Jc(e));
    }
    /**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */    get app() {
        if (!this._app) throw new A(I.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this._app;
    }
    get _initialized() {
        return this._settingsFrozen;
    }
    get _terminated() {
        return void 0 !== this._terminateTask;
    }
    _setSettings(t) {
        if (this._settingsFrozen) throw new A(I.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new cu(t), void 0 !== t.credentials && (this._credentials = function(t) {
            if (!t) return new zc;
            switch (t.type) {
              case "gapi":
                const e = t.client;
                // Make sure this really is a Gapi client.
                                return C(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new Xc(e, t.sessionIndex || "0", t.iamToken || null);

              case "provider":
                return t.client;

              default:
                throw new A(I.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(t.credentials));
    }
    _getSettings() {
        return this._settings;
    }
    _freezeSettings() {
        return this._settingsFrozen = !0, this._settings;
    }
    _delete() {
        return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
    }
    /** Returns a JSON-serializable representation of this Firestore instance. */    toJSON() {
        return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
        };
    }
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */    _terminate() {
        /**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
        return function(t) {
            const e = Wc.get(t);
            e && (v("ComponentProvider", "Removing Datastore"), Wc.delete(t), e.terminate());
        }(this), Promise.resolve();
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */
class au {
    /** @hideconstructor */
    constructor(t, 
    /**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */
    e, n) {
        this.converter = e, this._key = n, 
        /** The type of this Firestore reference. */
        this.type = "document", this.firestore = t;
    }
    get _path() {
        return this._key.path;
    }
    /**
     * The document's identifier within its collection.
     */    get id() {
        return this._key.path.lastSegment();
    }
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */    get path() {
        return this._key.path.canonicalString();
    }
    /**
     * The collection this `DocumentReference` belongs to.
     */    get parent() {
        return new lu(this.firestore, this.converter, this._key.path.popLast());
    }
    withConverter(t) {
        return new au(this.firestore, t, this._key);
    }
}

/**
 * A `Query` refers to a Query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */ class hu {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    constructor(t, 
    /**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */
    e, n) {
        this.converter = e, this._query = n, 
        /** The type of this Firestore reference. */
        this.type = "query", this.firestore = t;
    }
    withConverter(t) {
        return new hu(this.firestore, t, this._query);
    }
}

/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link query}).
 */ class lu extends hu {
    /** @hideconstructor */
    constructor(t, e, n) {
        super(t, e, Gt(n)), this._path = n, 
        /** The type of this Firestore reference. */
        this.type = "collection";
    }
    /** The collection's identifier. */    get id() {
        return this._query.path.lastSegment();
    }
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */    get path() {
        return this._query.path.canonicalString();
    }
    /**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */    get parent() {
        const t = this._path.popLast();
        return t.isEmpty() ? null : new au(this.firestore, 
        /* converter= */ null, new rt(t));
    }
    withConverter(t) {
        return new lu(this.firestore, t, this._path);
    }
}

function fu(t, e, ...n) {
    if (t = getModularInstance(t), Zc("collection", "path", e), t instanceof uu) {
        const s = Q.fromString(e, ...n);
        return su(s), new lu(t, /* converter= */ null, s);
    }
    {
        if (!(t instanceof au || t instanceof lu)) throw new A(I.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const s = Q.fromString(t.path, ...n).child(Q.fromString(e));
        return su(s), new lu(t.firestore, 
        /* converter= */ null, s);
    }
}

// TODO(firestorelite): Consider using ErrorFactory -
// https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106
/**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root Firestore instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */ function du(t, e) {
    if (t = ru(t, uu), Zc("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new A(I.INVALID_ARGUMENT, `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
    return new hu(t, 
    /* converter= */ null, 
    /**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
    function(t) {
        return new jt(Q.emptyPath(), t);
    }(e));
}

function wu(t, e, ...n) {
    if (t = getModularInstance(t), 
    // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (e = k.u()), Zc("doc", "path", e), t instanceof uu) {
        const s = Q.fromString(e, ...n);
        return nu(s), new au(t, 
        /* converter= */ null, new rt(s));
    }
    {
        if (!(t instanceof au || t instanceof lu)) throw new A(I.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const s = t._path.child(Q.fromString(e, ...n));
        return nu(s), new au(t.firestore, t instanceof lu ? t.converter : null, new rt(s));
    }
}

/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function _u(t, e) {
    return t = getModularInstance(t), e = getModularInstance(e), (t instanceof au || t instanceof lu) && (e instanceof au || e instanceof lu) && (t.firestore === e.firestore && t.path === e.path && t.converter === e.converter);
}

/**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function mu(t, e) {
    return t = getModularInstance(t), e = getModularInstance(e), t instanceof hu && e instanceof hu && (t.firestore === e.firestore && ne(t._query, e._query) && t.converter === e.converter);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yu {
    constructor() {
        // The last promise in the queue.
        this.dc = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.wc = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this._c = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.mc = [], 
        // visible for testing
        this.yc = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.gc = !1, 
        // Enabled during shutdown on Safari to prevent future access to IndexedDB.
        this.Ec = !1, 
        // List of TimerIds to fast-forward delays for.
        this.Tc = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.Zi = new xr(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.Ic = () => {
            const t = Cr();
            t && v("AsyncQueue", "Visibility state changed to " + t.visibilityState), this.Zi.Gi();
        };
        const t = Cr();
        t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.Ic);
    }
    get isShuttingDown() {
        return this._c;
    }
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */    enqueueAndForget(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }
    enqueueAndForgetEvenWhileRestricted(t) {
        this.Ac(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Rc(t);
    }
    enterRestrictedMode(t) {
        if (!this._c) {
            this._c = !0, this.Ec = t || !1;
            const e = Cr();
            e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.Ic);
        }
    }
    enqueue(t) {
        if (this.Ac(), this._c) 
        // Return a Promise which never resolves.
        return new Promise((() => {}));
        // Create a deferred Promise that we can return to the callee. This
        // allows us to return a "hanging Promise" only to the callee and still
        // advance the queue even when the operation is not run.
                const e = new As;
        return this.Rc((() => this._c && this.Ec ? Promise.resolve() : (t().then(e.resolve, e.reject), 
        e.promise))).then((() => e.promise));
    }
    enqueueRetryable(t) {
        this.enqueueAndForget((() => (this.wc.push(t), this.bc())));
    }
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */    async bc() {
        if (0 !== this.wc.length) {
            try {
                await this.wc[0](), this.wc.shift(), this.Zi.reset();
            } catch (t) {
                if (!Ss(t)) throw t;
 // Failure will be handled by AsyncQueue
                                v("AsyncQueue", "Operation failed with retryable error: " + t);
            }
            this.wc.length > 0 && 
            // If there are additional operations, we re-schedule `retryNextOp()`.
            // This is necessary to run retryable operations that failed during
            // their initial attempt since we don't know whether they are already
            // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
            // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
            // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
            // call scheduled here.
            // Since `backoffAndRun()` cancels an existing backoff and schedules a
            // new backoff on every call, there is only ever a single additional
            // operation in the queue.
            this.Zi.ji((() => this.bc()));
        }
    }
    Rc(t) {
        const e = this.dc.then((() => (this.gc = !0, t().catch((t => {
            this.yc = t, this.gc = !1;
            // Re-throw the error so that this.tail becomes a rejected Promise and
            // all further attempts to chain (via .then) will just short-circuit
            // and return the rejected Promise.
            throw P("INTERNAL UNHANDLED ERROR: ", 
            /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error - Error or FirestoreError
 */
            function(t) {
                let e = t.message || "";
                t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack);
                return e;
            }
            /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (t)), t;
        })).then((t => (this.gc = !1, t))))));
        return this.dc = e, e;
    }
    enqueueAfterDelay(t, e, n) {
        this.Ac(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.Tc.indexOf(t) > -1 && (e = 0);
        const s = wo.createAndSchedule(this, t, e, n, (t => this.vc(t)));
        return this.mc.push(s), s;
    }
    Ac() {
        this.yc && D();
    }
    verifyOperationInProgress() {}
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */    async Pc() {
        // Operations in the queue prior to draining may have enqueued additional
        // operations. Keep draining the queue until the tail is no longer advanced,
        // which indicates that no more new operations were enqueued and that all
        // operations were executed.
        let t;
        do {
            t = this.dc, await t;
        } while (t !== this.dc);
    }
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */    Vc(t) {
        for (const e of this.mc) if (e.timerId === t) return !0;
        return !1;
    }
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */    Sc(t) {
        // Note that draining may generate more delayed ops, so we do that first.
        return this.Pc().then((() => {
            // Run ops in the same order they'd run if they ran naturally.
            this.mc.sort(((t, e) => t.targetTimeMs - e.targetTimeMs));
            for (const e of this.mc) if (e.skipDelay(), "all" /* All */ !== t && e.timerId === t) break;
            return this.Pc();
        }));
    }
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */    Dc(t) {
        this.Tc.push(t);
    }
    /** Called once a DelayedOperation is run or canceled. */    vc(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        const e = this.mc.indexOf(t);
        this.mc.splice(e, 1);
    }
}

function gu(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        const n = t;
        for (const t of e) if (t in n && "function" == typeof n[t]) return !0;
        return !1;
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Represents the task of loading a Firestore bundle. It provides progress of bundle
 * loading, as well as task completion and error events.
 *
 * The API is compatible with `Promise<LoadBundleTaskProgress>`.
 */ (t, [ "next", "error", "complete" ]);
}

class pu {
    constructor() {
        this._progressObserver = {}, this._taskCompletionResolver = new As, this._lastProgress = {
            taskState: "Running",
            totalBytes: 0,
            totalDocuments: 0,
            bytesLoaded: 0,
            documentsLoaded: 0
        };
    }
    /**
     * Registers functions to listen to bundle loading progress events.
     * @param next - Called when there is a progress update from bundle loading. Typically `next` calls occur
     *   each time a Firestore document is loaded from the bundle.
     * @param error - Called when an error occurs during bundle loading. The task aborts after reporting the
     *   error, and there should be no more updates after this.
     * @param complete - Called when the loading task is complete.
     */    onProgress(t, e, n) {
        this._progressObserver = {
            next: t,
            error: e,
            complete: n
        };
    }
    /**
     * Implements the `Promise<LoadBundleTaskProgress>.catch` interface.
     *
     * @param onRejected - Called when an error occurs during bundle loading.
     */    catch(t) {
        return this._taskCompletionResolver.promise.catch(t);
    }
    /**
     * Implements the `Promise<LoadBundleTaskProgress>.then` interface.
     *
     * @param onFulfilled - Called on the completion of the loading task with a final `LoadBundleTaskProgress` update.
     *   The update will always have its `taskState` set to `"Success"`.
     * @param onRejected - Called when an error occurs during bundle loading.
     */    then(t, e) {
        return this._taskCompletionResolver.promise.then(t, e);
    }
    /**
     * Notifies all observers that bundle loading has completed, with a provided
     * `LoadBundleTaskProgress` object.
     *
     * @private
     */    _completeWith(t) {
        this._updateProgress(t), this._progressObserver.complete && this._progressObserver.complete(), 
        this._taskCompletionResolver.resolve(t);
    }
    /**
     * Notifies all observers that bundle loading has failed, with a provided
     * `Error` as the reason.
     *
     * @private
     */    _failWith(t) {
        this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), 
        this._progressObserver.error && this._progressObserver.error(t), this._taskCompletionResolver.reject(t);
    }
    /**
     * Notifies a progress update of loading a bundle.
     * @param progress - The new progress.
     *
     * @private
     */    _updateProgress(t) {
        this._lastProgress = t, this._progressObserver.next && this._progressObserver.next(t);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** DOMException error code constants. */ const Eu = -1;

/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */
class Tu extends uu {
    /** @hideconstructor */
    constructor(t, e) {
        super(t, e), 
        /**
         * Whether it's a Firestore or Firestore Lite instance.
         */
        this.type = "firestore", this._queue = new yu, this._persistenceKey = "name" in t ? t.name : "[DEFAULT]";
    }
    _terminate() {
        return this._firestoreClient || 
        // The client must be initialized to ensure that all subsequent API
        // usage throws an exception.
        Au(this), this._firestoreClient.terminate();
    }
}

/**
 * @internal
 */ function Iu(t) {
    return t._firestoreClient || Au(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient;
}

function Au(t) {
    var e;
    const n = t._freezeSettings(), s = function(t, e, n, s) {
        return new Qc(t, e, n, s.host, s.ssl, s.experimentalForceLongPolling, s.experimentalAutoDetectLongPolling, s.useFetchStreams);
    }(t._databaseId, (null === (e = t._app) || void 0 === e ? void 0 : e.options.appId) || "", t._persistenceKey, n);
    t._firestoreClient = new Rc(t._credentials, t._queue, s);
}

/**
 * Waits until all currently pending writes for the active user have been
 * acknowledged by the backend.
 *
 * The returned Promise resolves immediately if there are no outstanding writes.
 * Otherwise, the Promise waits for all previously issued writes (including
 * those written in a previous app session), but it does not wait for writes
 * that were added after the function is called. If you want to wait for
 * additional writes, call `waitForPendingWrites()` again.
 *
 * Any outstanding `waitForPendingWrites()` Promises are rejected during user
 * changes.
 *
 * @returns A Promise which resolves when all currently pending writes have been
 * acknowledged by the backend.
 */ function vu(t) {
    return function(t) {
        const e = new As;
        return t.asyncQueue.enqueueAndForget((async () => Wo(await Nc(t), e))), e.promise;
    }(Iu(t = ru(t, Tu)));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class Vu {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t) {
        for (let e = 0; e < t.length; ++e) if (0 === t[e].length) throw new A(I.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this._internalPath = new W(t);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */    isEqual(t) {
        return this._internalPath.isEqual(t._internalPath);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing an array of bytes.
 */ class Su {
    /** @hideconstructor */
    constructor(t) {
        this._byteString = t;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */    static fromBase64String(t) {
        try {
            return new Su(z.fromBase64String(t));
        } catch (t) {
            throw new A(I.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t);
        }
    }
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */    static fromUint8Array(t) {
        return new Su(z.fromUint8Array(t));
    }
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */    toBase64() {
        return this._byteString.toBase64();
    }
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */    toUint8Array() {
        return this._byteString.toUint8Array();
    }
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */    toString() {
        return "Bytes(base64: " + this.toBase64() + ")";
    }
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */    isEqual(t) {
        return this._byteString.isEqual(t._byteString);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class Du {
    /**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */
    constructor(t) {
        this._methodName = t;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class Cu {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    constructor(t, e) {
        if (!isFinite(t) || t < -90 || t > 90) throw new A(I.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new A(I.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this._lat = t, this._long = e;
    }
    /**
     * The latitude of this `GeoPoint` instance.
     */    get latitude() {
        return this._lat;
    }
    /**
     * The longitude of this `GeoPoint` instance.
     */    get longitude() {
        return this._long;
    }
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */    isEqual(t) {
        return this._lat === t._lat && this._long === t._long;
    }
    /** Returns a JSON-serializable representation of this GeoPoint. */    toJSON() {
        return {
            latitude: this._lat,
            longitude: this._long
        };
    }
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */    _compareTo(t) {
        return F(this._lat, t._lat) || F(this._long, t._long);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Nu = /^__.*__$/;

/** The result of parsing document data (e.g. for a setData call). */ class xu {
    constructor(t, e, n) {
        this.data = t, this.fieldMask = e, this.fieldTransforms = n;
    }
    toMutation(t, e) {
        return null !== this.fieldMask ? new Fe(t, this.data, this.fieldMask, e, this.fieldTransforms) : new ke(t, this.data, e, this.fieldTransforms);
    }
}

/** The result of parsing "update" data (i.e. for an updateData call). */ class ku {
    constructor(t, 
    // The fieldMask does not include document transforms.
    e, n) {
        this.data = t, this.fieldMask = e, this.fieldTransforms = n;
    }
    toMutation(t, e) {
        return new Fe(t, this.data, this.fieldMask, e, this.fieldTransforms);
    }
}

function Fu(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw D();
    }
}

/** A "context" object passed around while parsing user data. */ class $u {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    constructor(t, e, n, s, i, r) {
        this.settings = t, this.databaseId = e, this.R = n, this.ignoreUndefinedProperties = s, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.Cc(), this.fieldTransforms = i || [], this.fieldMask = r || [];
    }
    get path() {
        return this.settings.path;
    }
    get Nc() {
        return this.settings.Nc;
    }
    /** Returns a new context with the specified settings overwritten. */    xc(t) {
        return new $u(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.R, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
    }
    kc(t) {
        var e;
        const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), s = this.xc({
            path: n,
            Fc: !1
        });
        return s.$c(t), s;
    }
    Oc(t) {
        var e;
        const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), s = this.xc({
            path: n,
            Fc: !1
        });
        return s.Cc(), s;
    }
    Mc(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.xc({
            path: void 0,
            Fc: !0
        });
    }
    Lc(t) {
        return na(t, this.settings.methodName, this.settings.Bc || !1, this.path, this.settings.qc);
    }
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */    contains(t) {
        return void 0 !== this.fieldMask.find((e => t.isPrefixOf(e))) || void 0 !== this.fieldTransforms.find((e => t.isPrefixOf(e.field)));
    }
    Cc() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (let t = 0; t < this.path.length; t++) this.$c(this.path.get(t));
    }
    $c(t) {
        if (0 === t.length) throw this.Lc("Document fields must not be empty");
        if (Fu(this.Nc) && Nu.test(t)) throw this.Lc('Document fields cannot begin and end with "__"');
    }
}

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ class Ou {
    constructor(t, e, n) {
        this.databaseId = t, this.ignoreUndefinedProperties = e, this.R = n || Nr(t);
    }
    /** Creates a new top-level parse context. */    Uc(t, e, n, s = !1) {
        return new $u({
            Nc: t,
            methodName: e,
            qc: n,
            path: W.emptyPath(),
            Fc: !1,
            Bc: s
        }, this.databaseId, this.R, this.ignoreUndefinedProperties);
    }
}

function Mu(t) {
    const e = t._freezeSettings(), n = Nr(t._databaseId);
    return new Ou(t._databaseId, !!e.ignoreUndefinedProperties, n);
}

/** Parse document data from a set() call. */ function Lu(t, e, n, s, i, r = {}) {
    const o = t.Uc(r.merge || r.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    Xu("Data must be an object, but it was:", o, s);
    const c = Ju(s, o);
    let u, a;
    if (r.merge) u = new G(o.fieldMask), a = o.fieldTransforms; else if (r.mergeFields) {
        const t = [];
        for (const s of r.mergeFields) {
            const i = Zu(e, s, n);
            if (!o.contains(i)) throw new A(I.INVALID_ARGUMENT, `Field '${i}' is specified in your field mask but missing from your input data.`);
            sa(t, i) || t.push(i);
        }
        u = new G(t), a = o.fieldTransforms.filter((t => u.covers(t.field)));
    } else u = null, a = o.fieldTransforms;
    return new xu(new Et(c), u, a);
}

class Bu extends Du {
    _toFieldTransform(t) {
        if (2 /* MergeSet */ !== t.Nc) throw 1 /* Update */ === t.Nc ? t.Lc(`${this._methodName}() can only appear at the top level of your update data`) : t.Lc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
        return t.fieldMask.push(t.path), null;
    }
    isEqual(t) {
        return t instanceof Bu;
    }
}

/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue - The sentinel FieldValue for which to create a child
 *     context.
 * @param context - The parent context.
 * @param arrayElement - Whether or not the FieldValue has an array.
 */ function qu(t, e, n) {
    return new $u({
        Nc: 3 /* Argument */ ,
        qc: e.settings.qc,
        methodName: t._methodName,
        Fc: n
    }, e.databaseId, e.R, e.ignoreUndefinedProperties);
}

class Uu extends Du {
    _toFieldTransform(t) {
        return new Ae(t.path, new _e);
    }
    isEqual(t) {
        return t instanceof Uu;
    }
}

class Ku extends Du {
    constructor(t, e) {
        super(t), this.Kc = e;
    }
    _toFieldTransform(t) {
        const e = qu(this, t, 
        /*array=*/ !0), n = this.Kc.map((t => Hu(t, e))), s = new me(n);
        return new Ae(t.path, s);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class Qu extends Du {
    constructor(t, e) {
        super(t), this.Kc = e;
    }
    _toFieldTransform(t) {
        const e = qu(this, t, 
        /*array=*/ !0), n = this.Kc.map((t => Hu(t, e))), s = new ge(n);
        return new Ae(t.path, s);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class ju extends Du {
    constructor(t, e) {
        super(t), this.Qc = e;
    }
    _toFieldTransform(t) {
        const e = new Ee(t.R, he(t.R, this.Qc));
        return new Ae(t.path, e);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

/** Parse update data from an update() call. */ function Wu(t, e, n, s) {
    const i = t.Uc(1 /* Update */ , e, n);
    Xu("Data must be an object, but it was:", i, s);
    const r = [], o = Et.empty();
    q(s, ((t, s) => {
        const c = ea(e, t, n);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                s = getModularInstance(s);
        const u = i.Oc(c);
        if (s instanceof Bu) 
        // Add it to the field mask, but don't add anything to updateData.
        r.push(c); else {
            const t = Hu(s, u);
            null != t && (r.push(c), o.set(c, t));
        }
    }));
    const c = new G(r);
    return new ku(o, c, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function Gu(t, e, n, s, i, r) {
    const o = t.Uc(1 /* Update */ , e, n), c = [ Zu(e, s, n) ], u = [ i ];
    if (r.length % 2 != 0) throw new A(I.INVALID_ARGUMENT, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
    for (let t = 0; t < r.length; t += 2) c.push(Zu(e, r[t])), u.push(r[t + 1]);
    const h = [], l = Et.empty();
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (let t = c.length - 1; t >= 0; --t) if (!sa(h, c[t])) {
        const e = c[t];
        let n = u[t];
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                n = getModularInstance(n);
        const s = o.Oc(e);
        if (n instanceof Bu) 
        // Add it to the field mask, but don't add anything to updateData.
        h.push(e); else {
            const t = Hu(n, s);
            null != t && (h.push(e), l.set(e, t));
        }
    }
    const f = new G(h);
    return new ku(l, f, o.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function zu(t, e, n, s = !1) {
    return Hu(n, t.Uc(s ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function Hu(t, e) {
    if (Yu(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t = getModularInstance(t))) return Xu("Unsupported field value:", e, t), Ju(t, e);
    if (t instanceof Du) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Fu(e.Nc)) throw e.Lc(`${t._methodName}() can only be used with update() and set()`);
        if (!e.path) throw e.Lc(`${t._methodName}() is not currently supported inside arrays`);
        const n = t._toFieldTransform(e);
        n && e.fieldTransforms.push(n);
    }
    /**
 * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
 *
 * @returns The parsed value
 */ (t, e), null;
    if (void 0 === t && e.ignoreUndefinedProperties) 
    // If the input is undefined it can never participate in the fieldMask, so
    // don't handle this below. If `ignoreUndefinedProperties` is false,
    // `parseScalarValue` will reject an undefined value.
    return null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.fieldMask.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.Fc && 4 /* ArrayArgument */ !== e.Nc) throw e.Lc("Nested arrays are not supported");
        return function(t, e) {
            const n = [];
            let s = 0;
            for (const i of t) {
                let t = Hu(i, e.Mc(s));
                null == t && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                t = {
                    nullValue: "NULL_VALUE"
                }), n.push(t), s++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === (t = getModularInstance(t))) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return he(e.R, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            const n = M.fromDate(t);
            return {
                timestampValue: En(e.R, n)
            };
        }
        if (t instanceof M) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            const n = new M(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: En(e.R, n)
            };
        }
        if (t instanceof Cu) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof Su) return {
            bytesValue: Tn(e.R, t._byteString)
        };
        if (t instanceof au) {
            const n = e.databaseId, s = t.firestore._databaseId;
            if (!s.isEqual(n)) throw e.Lc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);
            return {
                referenceValue: Rn(t.firestore._databaseId || e.databaseId, t._key.path)
            };
        }
        throw e.Lc(`Unsupported field value: ${iu(t)}`);
    }
    /**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */ (t, e);
}

function Ju(t, e) {
    const n = {};
    return U(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.fieldMask.push(e.path) : q(t, ((t, s) => {
        const i = Hu(s, e.kc(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function Yu(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof M || t instanceof Cu || t instanceof Su || t instanceof au || t instanceof Du);
}

function Xu(t, e, n) {
    if (!Yu(n) || !function(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }(n)) {
        const s = iu(n);
        throw "an object" === s ? e.Lc(t + " a custom object") : e.Lc(t + " " + s);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Zu(t, e, n) {
    if ((
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    e = getModularInstance(e)) instanceof Vu) return e._internalPath;
    if ("string" == typeof e) return ea(t, e);
    throw na("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Matches any characters in a field path string that are reserved.
 */ const ta = new RegExp("[~\\*/\\[\\]]");

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */ function ea(t, e, n) {
    if (e.search(ta) >= 0) throw na(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`, t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
    try {
        return new Vu(...e.split("."))._internalPath;
    } catch (s) {
        throw na(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }
}

function na(t, e, n, s, i) {
    const r = s && !s.isEmpty(), o = void 0 !== i;
    let c = `Function ${e}() called with invalid data`;
    n && (c += " (via `toFirestore()`)"), c += ". ";
    let u = "";
    return (r || o) && (u += " (found", r && (u += ` in field ${s}`), o && (u += ` in document ${i}`), 
    u += ")"), new A(I.INVALID_ARGUMENT, c + t + u);
}

/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */ function sa(t, e) {
    return t.some((t => t.isEqual(e)));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class ia {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    constructor(t, e, n, s, i) {
        this._firestore = t, this._userDataWriter = e, this._key = n, this._document = s, 
        this._converter = i;
    }
    /** Property of the `DocumentSnapshot` that provides the document's ID. */    get id() {
        return this._key.path.lastSegment();
    }
    /**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */    get ref() {
        return new au(this._firestore, this._converter, this._key);
    }
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */    exists() {
        return null !== this._document;
    }
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */    data() {
        if (this._document) {
            if (this._converter) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                const t = new ra(this._firestore, this._userDataWriter, this._key, this._document, 
                /* converter= */ null);
                return this._converter.fromFirestore(t);
            }
            return this._userDataWriter.convertValue(this._document.data.value);
        }
    }
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(t) {
        if (this._document) {
            const e = this._document.data.field(oa("DocumentSnapshot.get", t));
            if (null !== e) return this._userDataWriter.convertValue(e);
        }
    }
}

/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */ class ra extends ia {
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */
    data() {
        return super.data();
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function oa(t, e) {
    return "string" == typeof e ? ea(t, e) : e instanceof Vu ? e._internalPath : e._delegate._internalPath;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class ca {
    /** @hideconstructor */
    constructor(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    /**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */    isEqual(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }
}

/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class ua extends ia {
    /** @hideconstructor protected */
    constructor(t, e, n, s, i, r) {
        super(t, e, n, s, r), this._firestore = t, this._firestoreImpl = t, this.metadata = i;
    }
    /**
     * Property of the `DocumentSnapshot` that signals whether or not the data
     * exists. True if the document exists.
     */    exists() {
        return super.exists();
    }
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */    data(t = {}) {
        if (this._document) {
            if (this._converter) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                const e = new aa(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, 
                /* converter= */ null);
                return this._converter.fromFirestore(e, t);
            }
            return this._userDataWriter.convertValue(this._document.data.value, t.serverTimestamps);
        }
    }
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `FieldValue.serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(t, e = {}) {
        if (this._document) {
            const n = this._document.data.field(oa("DocumentSnapshot.get", t));
            if (null !== n) return this._userDataWriter.convertValue(n, e.serverTimestamps);
        }
    }
}

/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */ class aa extends ua {
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @override
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document.
     */
    data(t = {}) {
        return super.data(t);
    }
}

/**
 * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
 * representing the results of a query. The documents can be accessed as an
 * array via the `docs` property or enumerated using the `forEach` method. The
 * number of documents can be determined via the `empty` and `size`
 * properties.
 */ class ha {
    /** @hideconstructor */
    constructor(t, e, n, s) {
        this._firestore = t, this._userDataWriter = e, this._snapshot = s, this.metadata = new ca(s.hasPendingWrites, s.fromCache), 
        this.query = n;
    }
    /** An array of all the documents in the `QuerySnapshot`. */    get docs() {
        const t = [];
        return this.forEach((e => t.push(e))), t;
    }
    /** The number of documents in the `QuerySnapshot`. */    get size() {
        return this._snapshot.docs.size;
    }
    /** True if there are no documents in the `QuerySnapshot`. */    get empty() {
        return 0 === this.size;
    }
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */    forEach(t, e) {
        this._snapshot.docs.forEach((n => {
            t.call(e, new aa(this._firestore, this._userDataWriter, n.key, n, new ca(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
        }));
    }
    /**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */    docChanges(t = {}) {
        const e = !!t.includeMetadataChanges;
        if (e && this._snapshot.excludesMetadataChanges) throw new A(I.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = 
        /** Calculates the array of DocumentChanges for a given ViewSnapshot. */
        function(t, e) {
            if (t._snapshot.oldDocs.isEmpty()) {
                let e = 0;
                return t._snapshot.docChanges.map((n => ({
                    type: "added",
                    doc: new aa(t._firestore, t._userDataWriter, n.doc.key, n.doc, new ca(t._snapshot.mutatedKeys.has(n.doc.key), t._snapshot.fromCache), t.query.converter),
                    oldIndex: -1,
                    newIndex: e++
                })));
            }
            {
                // A DocumentSet that is updated incrementally as changes are applied to use
                // to lookup the index of a document.
                let n = t._snapshot.oldDocs;
                return t._snapshot.docChanges.filter((t => e || 3 /* Metadata */ !== t.type)).map((e => {
                    const s = new aa(t._firestore, t._userDataWriter, e.doc.key, e.doc, new ca(t._snapshot.mutatedKeys.has(e.doc.key), t._snapshot.fromCache), t.query.converter);
                    let i = -1, r = -1;
                    return 0 /* Added */ !== e.type && (i = n.indexOf(e.doc.key), n = n.delete(e.doc.key)), 
                    1 /* Removed */ !== e.type && (n = n.add(e.doc), r = n.indexOf(e.doc.key)), {
                        type: la(e.type),
                        doc: s,
                        oldIndex: i,
                        newIndex: r
                    };
                }));
            }
        }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
    }
}

function la(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return D();
    }
}

// TODO(firestoreexp): Add tests for snapshotEqual with different snapshot
// metadata
/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ function fa(t, e) {
    return t instanceof ua && e instanceof ua ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof ha && e instanceof ha && (t._firestore === e._firestore && mu(t.query, e.query) && t.metadata.isEqual(e.metadata) && t._snapshot.isEqual(e._snapshot));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function da(t) {
    if (Ht(t) && 0 === t.explicitOrderBy.length) throw new A(I.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link (startAt:1)}, {@link (startAfter:1)}, {@link
 * endBefore:1}, {@link (endAt:1)}, {@link limit} or {@link limitToLast} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ class wa {}

/**
 * Creates a new immutable instance of `Query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The Query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function _a(t, ...e) {
    for (const n of e) t = n._apply(t);
    return t;
}

class ma extends wa {
    constructor(t, e, n) {
        super(), this.jc = t, this.Wc = e, this.Gc = n, this.type = "where";
    }
    _apply(t) {
        const e = Mu(t.firestore), n = function(t, e, n, s, i, r, o) {
            let c;
            if (i.isKeyField()) {
                if ("array-contains" /* ARRAY_CONTAINS */ === r || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === r) throw new A(I.INVALID_ARGUMENT, `Invalid Query. You can't perform '${r}' queries on FieldPath.documentId().`);
                if ("in" /* IN */ === r || "not-in" /* NOT_IN */ === r) {
                    Aa(o, r);
                    const e = [];
                    for (const n of o) e.push(Ia(s, t, n));
                    c = {
                        arrayValue: {
                            values: e
                        }
                    };
                } else c = Ia(s, t, o);
            } else "in" /* IN */ !== r && "not-in" /* NOT_IN */ !== r && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== r || Aa(o, r), 
            c = zu(n, e, o, 
            /* allowArrays= */ "in" /* IN */ === r || "not-in" /* NOT_IN */ === r);
            const u = St.create(i, r, c);
            return function(t, e) {
                if (e.g()) {
                    const n = Yt(t);
                    if (null !== n && !n.isEqual(e.field)) throw new A(I.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);
                    const s = Jt(t);
                    null !== s && Ra(t, e.field, s);
                }
                const n = function(t, e) {
                    for (const n of t.filters) if (e.indexOf(n.op) >= 0) return n.op;
                    return null;
                }(t, 
                /**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
 * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
 *
 * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
 * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
 */
                function(t) {
                    switch (t) {
                      case "!=" /* NOT_EQUAL */ :
                        return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

                      case "array-contains" /* ARRAY_CONTAINS */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

                      case "in" /* IN */ :
                        return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "not-in" /* NOT_IN */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

                      default:
                        return [];
                    }
                }(e.op));
                if (null !== n) 
                // Special case when it's a duplicate op to give a slightly clearer error message.
                throw n === e.op ? new A(I.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new A(I.INVALID_ARGUMENT, `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`);
            }(t, u), u;
        }(t._query, "where", e, t.firestore._databaseId, this.jc, this.Wc, this.Gc);
        return new hu(t.firestore, t.converter, function(t, e) {
            const n = t.filters.concat([ e ]);
            return new jt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, n));
    }
}

/**
 * Creates a `QueryConstraint` that enforces that documents must contain the
 * specified field and that the value should satisfy the relation constraint
 * provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created `Query`.
 */ class ya extends wa {
    constructor(t, e) {
        super(), this.jc = t, this.zc = e, this.type = "orderBy";
    }
    _apply(t) {
        const e = function(t, e, n) {
            if (null !== t.startAt) throw new A(I.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new A(I.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            const s = new qt(e, n);
            return function(t, e) {
                if (null === Jt(t)) {
                    // This is the first order by. It must match any inequality.
                    const n = Yt(t);
                    null !== n && Ra(t, n, e.field);
                }
            }(t, s), s;
        }
        /**
 * Create a Bound from a query and a document.
 *
 * Note that the Bound will always include the key of the document
 * and so only the provided document will compare equal to the returned
 * position.
 *
 * Will throw if the document does not contain all fields of the order by
 * of the query or if any of the fields in the order by are an uncommitted
 * server timestamp.
 */ (t._query, this.jc, this.zc);
        return new hu(t.firestore, t.converter, function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            const n = t.explicitOrderBy.concat([ e ]);
            return new jt(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, e));
    }
}

/**
 * Creates a `QueryConstraint` that sorts the query result by the
 * specified field, optionally in descending order instead of ascending.
 *
 * @param fieldPath - The field to sort by.
 * @param directionStr - Optional direction to sort by ('asc' or 'desc'). If
 * not specified, order will be ascending.
 * @returns The created `Query`.
 */ class ga extends wa {
    constructor(t, e, n) {
        super(), this.type = t, this.Hc = e, this.Jc = n;
    }
    _apply(t) {
        return new hu(t.firestore, t.converter, ee(t._query, this.Hc, this.Jc));
    }
}

/**
 * Creates a `QueryConstraint` that only returns the first matching documents.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created `Query`.
 */ class pa extends wa {
    constructor(t, e, n) {
        super(), this.type = t, this.Yc = e, this.Xc = n;
    }
    _apply(t) {
        const e = Ta(t, this.type, this.Yc, this.Xc);
        return new hu(t.firestore, t.converter, function(t, e) {
            return new jt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
        }(t._query, e));
    }
}

class Ea extends wa {
    constructor(t, e, n) {
        super(), this.type = t, this.Yc = e, this.Xc = n;
    }
    _apply(t) {
        const e = Ta(t, this.type, this.Yc, this.Xc);
        return new hu(t.firestore, t.converter, function(t, e) {
            return new jt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
        }(t._query, e));
    }
}

/** Helper function to create a bound from a document or fields */
function Ta(t, e, n, s) {
    if (n[0] = getModularInstance(n[0]), n[0] instanceof ia) return function(t, e, n, s, i) {
        if (!s) throw new A(I.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${n}().`);
        const r = [];
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
                for (const n of Zt(t)) if (n.field.isKeyField()) r.push(dt(e, s.key)); else {
            const t = s.data.field(n.field);
            if (Z(t)) throw new A(I.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + n.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
            if (null === t) {
                const t = n.field.canonicalString();
                throw new A(I.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`);
            }
            r.push(t);
        }
        return new Lt(r, i);
    }
    /**
 * Converts a list of field values to a Bound for the given query.
 */ (t._query, t.firestore._databaseId, e, n[0]._document, s);
    {
        const i = Mu(t.firestore);
        return function(t, e, n, s, i, r) {
            // Use explicit order by's because it has to match the query the user made
            const o = t.explicitOrderBy;
            if (i.length > o.length) throw new A(I.INVALID_ARGUMENT, `Too many arguments provided to ${s}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
            const c = [];
            for (let r = 0; r < i.length; r++) {
                const u = i[r];
                if (o[r].field.isKeyField()) {
                    if ("string" != typeof u) throw new A(I.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${s}(), but got a ${typeof u}`);
                    if (!Xt(t) && -1 !== u.indexOf("/")) throw new A(I.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${s}() must be a plain document ID, but '${u}' contains a slash.`);
                    const n = t.path.child(Q.fromString(u));
                    if (!rt.isDocumentKey(n)) throw new A(I.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${s}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);
                    const i = new rt(n);
                    c.push(dt(e, i));
                } else {
                    const t = zu(n, s, u);
                    c.push(t);
                }
            }
            return new Lt(c, r);
        }
        /**
 * Parses the given documentIdValue into a ReferenceValue, throwing
 * appropriate errors if the value is anything other than a DocumentReference
 * or String, or if the string is malformed.
 */ (t._query, t.firestore._databaseId, i, e, n, s);
    }
}

function Ia(t, e, n) {
    if ("string" == typeof (n = getModularInstance(n))) {
        if ("" === n) throw new A(I.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!Xt(e) && -1 !== n.indexOf("/")) throw new A(I.INVALID_ARGUMENT, `Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
        const s = e.path.child(Q.fromString(n));
        if (!rt.isDocumentKey(s)) throw new A(I.INVALID_ARGUMENT, `Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);
        return dt(t, new rt(s));
    }
    if (n instanceof au) return dt(t, n._key);
    throw new A(I.INVALID_ARGUMENT, `Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${iu(n)}.`);
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function Aa(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new A(I.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
    if (t.length > 10) throw new A(I.INVALID_ARGUMENT, `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`);
}

function Ra(t, e, n) {
    if (!n.isEqual(e)) throw new A(I.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */ class ba {
    convertValue(t, e = "none") {
        switch (ot(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return Y(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.convertTimestamp(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.convertServerTimestamp(t, e);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.convertBytes(X(t.bytesValue));

          case 7 /* RefValue */ :
            return this.convertReference(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.convertGeoPoint(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.convertArray(t.arrayValue, e);

          case 10 /* ObjectValue */ :
            return this.convertObject(t.mapValue, e);

          default:
            throw D();
        }
    }
    convertObject(t, e) {
        const n = {};
        return q(t.fields, ((t, s) => {
            n[t] = this.convertValue(s, e);
        })), n;
    }
    convertGeoPoint(t) {
        return new Cu(Y(t.latitude), Y(t.longitude));
    }
    convertArray(t, e) {
        return (t.values || []).map((t => this.convertValue(t, e)));
    }
    convertServerTimestamp(t, e) {
        switch (e) {
          case "previous":
            const n = tt(t);
            return null == n ? null : this.convertValue(n, e);

          case "estimate":
            return this.convertTimestamp(et(t));

          default:
            return null;
        }
    }
    convertTimestamp(t) {
        const e = J(t);
        return new M(e.seconds, e.nanos);
    }
    convertDocumentKey(t, e) {
        const n = Q.fromString(t);
        C(Zn(n));
        const s = new jc(n.get(1), n.get(3)), i = new rt(n.popFirst(5));
        return s.isEqual(e) || 
        // TODO(b/64130202): Somehow support foreign references.
        P(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), 
        i;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function va(t, e, n) {
    let s;
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return s = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, 
    s;
}

class Pa extends ba {
    constructor(t) {
        super(), this.firestore = t;
    }
    convertBytes(t) {
        return new Su(t);
    }
    convertReference(t) {
        const e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new au(this.firestore, /* converter= */ null, e);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch.commit} is
 * called.
 */ class Va {
    /** @hideconstructor */
    constructor(t, e) {
        this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = !1, 
        this._dataReader = Mu(t);
    }
    set(t, e, n) {
        this._verifyNotCommitted();
        const s = Sa(t, this._firestore), i = va(s.converter, e, n), r = Lu(this._dataReader, "WriteBatch.set", s._key, i, null !== s.converter, n);
        return this._mutations.push(r.toMutation(s._key, ve.none())), this;
    }
    update(t, e, n, ...s) {
        this._verifyNotCommitted();
        const i = Sa(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let r;
        return r = "string" == typeof (e = getModularInstance(e)) || e instanceof Vu ? Gu(this._dataReader, "WriteBatch.update", i._key, e, n, s) : Wu(this._dataReader, "WriteBatch.update", i._key, e), 
        this._mutations.push(r.toMutation(i._key, ve.exists(!0))), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */    delete(t) {
        this._verifyNotCommitted();
        const e = Sa(t, this._firestore);
        return this._mutations = this._mutations.concat(new Le(e._key, ve.none())), this;
    }
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * The result of these writes will only be reflected in document reads that
     * occur after the returned Promise resolves. If the client is offline, the
     * write fails. If you would like to see local modifications or buffer writes
     * until the client is online, use the full Firestore SDK.
     *
     * @returns A Promise resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit (note that it won't
     * resolve while you're offline).
     */    commit() {
        return this._verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
    }
    _verifyNotCommitted() {
        if (this._committed) throw new A(I.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }
}

function Sa(t, e) {
    if ((t = getModularInstance(t)).firestore !== e) throw new A(I.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ class Da extends ba {
    constructor(t) {
        super(), this.firestore = t;
    }
    convertBytes(t) {
        return new Su(t);
    }
    convertReference(t) {
        const e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new au(this.firestore, /* converter= */ null, e);
    }
}

/**
 * Reads the document referred to by this `DocumentReference` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function Ca(t, e, n, ...s) {
    t = ru(t, au);
    const i = ru(t.firestore, Tu), r = Mu(i);
    let o;
    o = "string" == typeof (
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    e = getModularInstance(e)) || e instanceof Vu ? Gu(r, "updateDoc", t._key, e, n, s) : Wu(r, "updateDoc", t._key, e);
    return xa(i, [ o.toMutation(t._key, ve.exists(!0)) ]);
}

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */ function Na(t, ...e) {
    var n, s, i;
    t = getModularInstance(t);
    let r = {
        includeMetadataChanges: !1
    }, o = 0;
    "object" != typeof e[o] || gu(e[o]) || (r = e[o], o++);
    const c = {
        includeMetadataChanges: r.includeMetadataChanges
    };
    if (gu(e[o])) {
        const t = e[o];
        e[o] = null === (n = t.next) || void 0 === n ? void 0 : n.bind(t), e[o + 1] = null === (s = t.error) || void 0 === s ? void 0 : s.bind(t), 
        e[o + 2] = null === (i = t.complete) || void 0 === i ? void 0 : i.bind(t);
    }
    let u, h, l;
    if (t instanceof au) h = ru(t.firestore, Tu), l = Gt(t._key.path), u = {
        next: n => {
            e[o] && e[o](ka(h, t, n));
        },
        error: e[o + 1],
        complete: e[o + 2]
    }; else {
        const n = ru(t, hu);
        h = ru(n.firestore, Tu), l = n._query;
        const s = new Da(h);
        u = {
            next: t => {
                e[o] && e[o](new ha(h, s, n, t));
            },
            error: e[o + 1],
            complete: e[o + 2]
        }, da(t._query);
    }
    return function(t, e, n, s) {
        const i = new Ec(s), r = new vo(e, i, n);
        return t.asyncQueue.enqueueAndForget((async () => To(await xc(t), r))), () => {
            i.Wo(), t.asyncQueue.enqueueAndForget((async () => Io(await xc(t), r)));
        };
    }(Iu(h), l, c, u);
}

/**
 * Locally writes `mutations` on the async queue.
 * @internal
 */
function xa(t, e) {
    return function(t, e) {
        const n = new As;
        return t.asyncQueue.enqueueAndForget((async () => Bo(await Nc(t), e, n))), n.promise;
    }(Iu(t), e);
}

/**
 * Converts a ViewSnapshot that contains the single document specified by `ref`
 * to a DocumentSnapshot.
 */ function ka(t, e, n) {
    const s = n.docs.get(e._key), i = new Da(t);
    return new ua(t, i, e._key, s, new ca(n.hasPendingWrites, n.fromCache), e.converter);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ class Fa extends class {
    /** @hideconstructor */
    constructor(t, e) {
        this._firestore = t, this._transaction = e, this._dataReader = Mu(t);
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    get(t) {
        const e = Sa(t, this._firestore), n = new Pa(this._firestore);
        return this._transaction.lookup([ e._key ]).then((t => {
            if (!t || 1 !== t.length) return D();
            const s = t[0];
            if (s.isFoundDocument()) return new ia(this._firestore, n, s.key, s, e.converter);
            if (s.isNoDocument()) return new ia(this._firestore, n, e._key, null, e.converter);
            throw D();
        }));
    }
    set(t, e, n) {
        const s = Sa(t, this._firestore), i = va(s.converter, e, n), r = Lu(this._dataReader, "Transaction.set", s._key, i, null !== s.converter, n);
        return this._transaction.set(s._key, r), this;
    }
    update(t, e, n, ...s) {
        const i = Sa(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let r;
        return r = "string" == typeof (e = getModularInstance(e)) || e instanceof Vu ? Gu(this._dataReader, "Transaction.update", i._key, e, n, s) : Wu(this._dataReader, "Transaction.update", i._key, e), 
        this._transaction.update(i._key, r), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */    delete(t) {
        const e = Sa(t, this._firestore);
        return this._transaction.delete(e._key), this;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ {
    // This class implements the same logic as the Transaction API in the Lite SDK
    // but is subclassed in order to return its own DocumentSnapshot types.
    /** @hideconstructor */
    constructor(t, e) {
        super(t, e), this._firestore = t;
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    get(t) {
        const e = Sa(t, this._firestore), n = new Da(this._firestore);
        return super.get(t).then((t => new ua(this._firestore, n, e._key, t._document, new ca(
        /* hasPendingWrites= */ !1, 
        /* fromCache= */ !1), e.converter)));
    }
}

/**
 * Executes the given `updateFunction` and then attempts to commit the changes
 * applied within the transaction. If any document read within the transaction
 * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
 * commit after 5 attempts, the transaction fails.
 *
 * The maximum number of writes allowed in a single transaction is 500.
 *
 * @param firestore - A reference to the Firestore database to run this
 * transaction against.
 * @param updateFunction - The function to execute within the transaction
 * context.
 * @returns If the transaction completed successfully or was explicitly aborted
 * (the `updateFunction` returned a failed promise), the promise returned by the
 * `updateFunction `is returned here. Otherwise, if the transaction failed, a
 * rejected promise with the corresponding failure error is returned.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Helper function to assert Uint8Array is available at runtime. */
function $a() {
    if ("undefined" == typeof Uint8Array) throw new A(I.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function Oa() {
    if ("undefined" == typeof atob) throw new A(I.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/** Immutable class holding a blob (binary data) */ class Ma {
    constructor(t) {
        this._delegate = t;
    }
    static fromBase64String(t) {
        return Oa(), new Ma(Su.fromBase64String(t));
    }
    static fromUint8Array(t) {
        return $a(), new Ma(Su.fromUint8Array(t));
    }
    toBase64() {
        return Oa(), this._delegate.toBase64();
    }
    toUint8Array() {
        return $a(), this._delegate.toUint8Array();
    }
    isEqual(t) {
        return this._delegate.isEqual(t._delegate);
    }
    toString() {
        return "Blob(base64: " + this.toBase64() + ")";
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const La = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.";

/**
 * The persistence provider included with the memory-only SDK. This provider
 * errors for all attempts to access persistence.
 */ class Ba {
    enableIndexedDbPersistence(t, e) {
        throw new A(I.FAILED_PRECONDITION, La);
    }
    enableMultiTabIndexedDbPersistence(t) {
        throw new A(I.FAILED_PRECONDITION, La);
    }
    clearIndexedDbPersistence(t) {
        throw new A(I.FAILED_PRECONDITION, La);
    }
}

/**
 * Compat class for Firestore. Exposes Firestore Legacy API, but delegates
 * to the functional API of firestore-exp.
 */ class Ua {
    constructor(t, e, n) {
        this._delegate = e, this.Zc = n, this.INTERNAL = {
            delete: () => this.terminate()
        }, t instanceof jc || (this.tu = t);
    }
    get _databaseId() {
        return this._delegate._databaseId;
    }
    settings(t) {
        const e = this._delegate._getSettings();
        t.merge || e.host === t.host || V("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."), 
        t.merge && 
        // Remove the property from the settings once the merge is completed
        delete (t = Object.assign(Object.assign({}, e), t)).merge, this._delegate._setSettings(t);
    }
    useEmulator(t, e, n = {}) {
        !function(t, e, n, s = {}) {
            var i;
            const r = (t = ru(t, uu))._getSettings();
            if ("firestore.googleapis.com" !== r.host && r.host !== e && V("Host has been set in both settings() and useEmulator(), emulator host will be used"), 
            t._setSettings(Object.assign(Object.assign({}, r), {
                host: `${e}:${n}`,
                ssl: !1
            })), s.mockUserToken) {
                let e, n;
                if ("string" == typeof s.mockUserToken) e = s.mockUserToken, n = wr.MOCK_USER; else {
                    // Let createMockUserToken validate first (catches common mistakes like
                    // invalid field "uid" and missing field "sub" / "user_id".)
                    e = createMockUserToken(s.mockUserToken, null === (i = t._app) || void 0 === i ? void 0 : i.options.projectId);
                    const r = s.mockUserToken.sub || s.mockUserToken.user_id;
                    if (!r) throw new A(I.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
                    n = new wr(r);
                }
                t._credentials = new Hc(new Gc(e, n));
            }
        }(this._delegate, t, e, n);
    }
    enableNetwork() {
        return kc(Iu(ru(this._delegate, Tu)));
    }
    disableNetwork() {
        return Fc(Iu(ru(this._delegate, Tu)));
    }
    enablePersistence(t) {
        let e = !1, n = !1;
        return t && (e = !!t.synchronizeTabs, n = !!t.experimentalForceOwningTab, eu("synchronizeTabs", e, "experimentalForceOwningTab", n)), 
        e ? this.Zc.enableMultiTabIndexedDbPersistence(this) : this.Zc.enableIndexedDbPersistence(this, n);
    }
    clearPersistence() {
        return this.Zc.clearIndexedDbPersistence(this);
    }
    terminate() {
        return this.tu && (this.tu._removeServiceInstance("firestore"), this.tu._removeServiceInstance("firestore-exp")), 
        this._delegate._delete();
    }
    waitForPendingWrites() {
        return vu(this._delegate);
    }
    onSnapshotsInSync(t) {
        return function(t, e) {
            return Bc(Iu(t = ru(t, Tu)), gu(e) ? e : {
                next: e
            });
        }(this._delegate, t);
    }
    get app() {
        if (!this.tu) throw new A(I.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this.tu;
    }
    collection(t) {
        try {
            return new sh(this, fu(this._delegate, t));
        } catch (t) {
            throw Ha(t, "collection()", "Firestore.collection()");
        }
    }
    doc(t) {
        try {
            return new za(this, wu(this._delegate, t));
        } catch (t) {
            throw Ha(t, "doc()", "Firestore.doc()");
        }
    }
    collectionGroup(t) {
        try {
            return new th(this, du(this._delegate, t));
        } catch (t) {
            throw Ha(t, "collectionGroup()", "Firestore.collectionGroup()");
        }
    }
    runTransaction(t) {
        return function(t, e) {
            return qc(Iu(t), (n => e(new Fa(t, n))));
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        /**
 * Returns a sentinel for use with {@link @firebase/firestore/lite#(updateDoc:1)} or
 * {@link @firebase/firestore/lite#(setDoc:1)} with `{merge: true}` to mark a field for deletion.
 */ (this._delegate, (e => t(new ja(this, e))));
    }
    batch() {
        return Iu(this._delegate), new Wa(new Va(this._delegate, (t => xa(this._delegate, t))));
    }
    loadBundle(t) {
        throw new A(I.FAILED_PRECONDITION, '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?');
    }
    namedQuery(t) {
        throw new A(I.FAILED_PRECONDITION, '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?');
    }
}

class Ka extends ba {
    constructor(t) {
        super(), this.firestore = t;
    }
    convertBytes(t) {
        return new Ma(new Su(t));
    }
    convertReference(t) {
        const e = this.convertDocumentKey(t, this.firestore._databaseId);
        return za.eu(e, this.firestore, /* converter= */ null);
    }
}

function Qa(t) {
    var e;
    e = t, R.setLogLevel(e);
}

/**
 * A reference to a transaction.
 */ class ja {
    constructor(t, e) {
        this._firestore = t, this._delegate = e, this._userDataWriter = new Ka(t);
    }
    get(t) {
        const e = ih(t);
        return this._delegate.get(e).then((t => new Xa(this._firestore, new ua(this._firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata, e.converter))));
    }
    set(t, e, n) {
        const s = ih(t);
        return n ? (tu("Transaction.set", n), this._delegate.set(s, e, n)) : this._delegate.set(s, e), 
        this;
    }
    update(t, e, n, ...s) {
        const i = ih(t);
        return 2 === arguments.length ? this._delegate.update(i, e) : this._delegate.update(i, e, n, ...s), 
        this;
    }
    delete(t) {
        const e = ih(t);
        return this._delegate.delete(e), this;
    }
}

class Wa {
    constructor(t) {
        this._delegate = t;
    }
    set(t, e, n) {
        const s = ih(t);
        return n ? (tu("WriteBatch.set", n), this._delegate.set(s, e, n)) : this._delegate.set(s, e), 
        this;
    }
    update(t, e, n, ...s) {
        const i = ih(t);
        return 2 === arguments.length ? this._delegate.update(i, e) : this._delegate.update(i, e, n, ...s), 
        this;
    }
    delete(t) {
        const e = ih(t);
        return this._delegate.delete(e), this;
    }
    commit() {
        return this._delegate.commit();
    }
}

/**
 * Wraps a `PublicFirestoreDataConverter` translating the types from the
 * experimental SDK into corresponding types from the Classic SDK before passing
 * them to the wrapped converter.
 */ class Ga {
    constructor(t, e, n) {
        this._firestore = t, this._userDataWriter = e, this._delegate = n;
    }
    fromFirestore(t, e) {
        const n = new aa(this._firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata, 
        /* converter= */ null);
        return this._delegate.fromFirestore(new Za(this._firestore, n), null != e ? e : {});
    }
    toFirestore(t, e) {
        return e ? this._delegate.toFirestore(t, e) : this._delegate.toFirestore(t);
    }
    // Use the same instance of `FirestoreDataConverter` for the given instances
    // of `Firestore` and `PublicFirestoreDataConverter` so that isEqual() will
    // compare equal for two objects created with the same converter instance.
    static nu(t, e) {
        const n = Ga.su;
        let s = n.get(t);
        s || (s = new WeakMap, n.set(t, s));
        let i = s.get(e);
        return i || (i = new Ga(t, new Ka(t), e), s.set(e, i)), i;
    }
}

Ga.su = new WeakMap;

/**
 * A reference to a particular document in a collection in the database.
 */
class za {
    constructor(t, e) {
        this.firestore = t, this._delegate = e, this._userDataWriter = new Ka(t);
    }
    static iu(t, e, n) {
        if (t.length % 2 != 0) throw new A(I.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);
        return new za(e, new au(e._delegate, n, new rt(t)));
    }
    static eu(t, e, n) {
        return new za(e, new au(e._delegate, n, t));
    }
    get id() {
        return this._delegate.id;
    }
    get parent() {
        return new sh(this.firestore, this._delegate.parent);
    }
    get path() {
        return this._delegate.path;
    }
    collection(t) {
        try {
            return new sh(this.firestore, fu(this._delegate, t));
        } catch (t) {
            throw Ha(t, "collection()", "DocumentReference.collection()");
        }
    }
    isEqual(t) {
        return (t = getModularInstance(t)) instanceof au && _u(this._delegate, t);
    }
    set(t, e) {
        e = tu("DocumentReference.set", e);
        try {
            return function(t, e, n) {
                t = ru(t, au);
                const s = ru(t.firestore, Tu), i = va(t.converter, e, n);
                return xa(s, [ Lu(Mu(s), "setDoc", t._key, i, null !== t.converter, n).toMutation(t._key, ve.none()) ]);
            }(this._delegate, t, e);
        } catch (t) {
            throw Ha(t, "setDoc()", "DocumentReference.set()");
        }
    }
    update(t, e, ...n) {
        try {
            return 1 === arguments.length ? Ca(this._delegate, t) : Ca(this._delegate, t, e, ...n);
        } catch (t) {
            throw Ha(t, "updateDoc()", "DocumentReference.update()");
        }
    }
    delete() {
        return xa(ru((t = this._delegate).firestore, Tu), [ new Le(t._key, ve.none()) ]);
        var t;
        /**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A Promise resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */    }
    onSnapshot(...t) {
        const e = Ja(t), n = Ya(t, (t => new Xa(this.firestore, new ua(this.firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata, this._delegate.converter))));
        return Na(this._delegate, e, n);
    }
    get(t) {
        let e;
        return e = "cache" === (null == t ? void 0 : t.source) ? function(t) {
            t = ru(t, au);
            const e = ru(t.firestore, Tu), n = Iu(e), s = new Da(e);
            return $c(n, t._key).then((n => new ua(e, s, t._key, n, new ca(null !== n && n.hasLocalMutations, 
            /* fromCache= */ !0), t.converter)));
        }
        /**
 * Reads the document referred to by this `DocumentReference` from the server.
 * Returns an error if the network is not available.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ (this._delegate) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = ru(t, au);
            const e = ru(t.firestore, Tu);
            return Oc(Iu(e), t._key, {
                source: "server"
            }).then((n => ka(e, t, n)));
        }
        /**
 * Executes the query and returns the results as a `QuerySnapshot`.
 *
 * Note: `getDocs()` attempts to provide up-to-date data when possible by
 * waiting for data from the server, but it may return cached data or fail if
 * you are offline and the server cannot be reached. To specify this behavior,
 * invoke {@link getDocsFromCache} or {@link getDocsFromServer}.
 *
 * @returns A Promise that will be resolved with the results of the query.
 */ (this._delegate) : function(t) {
            t = ru(t, au);
            const e = ru(t.firestore, Tu);
            return Oc(Iu(e), t._key).then((n => ka(e, t, n)));
        }(this._delegate), e.then((t => new Xa(this.firestore, new ua(this.firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata, this._delegate.converter))));
    }
    withConverter(t) {
        return new za(this.firestore, t ? this._delegate.withConverter(Ga.nu(this.firestore, t)) : this._delegate.withConverter(null));
    }
}

/**
 * Replaces the function name in an error thrown by the firestore-exp API
 * with the function names used in the classic API.
 */ function Ha(t, e, n) {
    return t.message = t.message.replace(e, n), t;
}

/**
 * Iterates the list of arguments from an `onSnapshot` call and returns the
 * first argument that may be an `SnapshotListenOptions` object. Returns an
 * empty object if none is found.
 */ function Ja(t) {
    for (const e of t) if ("object" == typeof e && !gu(e)) return e;
    return {};
}

/**
 * Creates an observer that can be passed to the firestore-exp SDK. The
 * observer converts all observed values into the format expected by the classic
 * SDK.
 *
 * @param args - The list of arguments from an `onSnapshot` call.
 * @param wrapper - The function that converts the firestore-exp type into the
 * type used by this shim.
 */ function Ya(t, e) {
    var n, s;
    let i;
    return i = gu(t[0]) ? t[0] : gu(t[1]) ? t[1] : "function" == typeof t[0] ? {
        next: t[0],
        error: t[1],
        complete: t[2]
    } : {
        next: t[1],
        error: t[2],
        complete: t[3]
    }, {
        next: t => {
            i.next && i.next(e(t));
        },
        error: null === (n = i.error) || void 0 === n ? void 0 : n.bind(i),
        complete: null === (s = i.complete) || void 0 === s ? void 0 : s.bind(i)
    };
}

class Xa {
    constructor(t, e) {
        this._firestore = t, this._delegate = e;
    }
    get ref() {
        return new za(this._firestore, this._delegate.ref);
    }
    get id() {
        return this._delegate.id;
    }
    get metadata() {
        return this._delegate.metadata;
    }
    get exists() {
        return this._delegate.exists();
    }
    data(t) {
        return this._delegate.data(t);
    }
    get(t, e) {
        return this._delegate.get(t, e);
    }
    isEqual(t) {
        return fa(this._delegate, t._delegate);
    }
}

class Za extends Xa {
    data(t) {
        return this._delegate.data(t);
    }
}

class th {
    constructor(t, e) {
        this.firestore = t, this._delegate = e, this._userDataWriter = new Ka(t);
    }
    where(t, e, n) {
        try {
            // The "as string" cast is a little bit of a hack. `where` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new th(this.firestore, _a(this._delegate, function(t, e, n) {
                const s = e, i = oa("where", t);
                return new ma(i, s, n);
            }(t, e, n)));
        } catch (t) {
            throw Ha(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }
    orderBy(t, e) {
        try {
            // The "as string" cast is a little bit of a hack. `orderBy` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new th(this.firestore, _a(this._delegate, function(t, e = "asc") {
                const n = e, s = oa("orderBy", t);
                return new ya(s, n);
            }(t, e)));
        } catch (t) {
            throw Ha(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }
    limit(t) {
        try {
            return new th(this.firestore, _a(this._delegate, function(t) {
                return ou("limit", t), new ga("limit", t, "F" /* First */);
            }
            /**
 * Creates a `QueryConstraint` that only returns the last matching documents.
 *
 * You must specify at least one `orderBy` clause for `limitToLast` queries,
 * otherwise an exception will be thrown during execution.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created `Query`.
 */ (t)));
        } catch (t) {
            throw Ha(t, "limit()", "Query.limit()");
        }
    }
    limitToLast(t) {
        try {
            return new th(this.firestore, _a(this._delegate, function(t) {
                return ou("limitToLast", t), new ga("limitToLast", t, "L" /* Last */);
            }(t)));
        } catch (t) {
            throw Ha(t, "limitToLast()", "Query.limitToLast()");
        }
    }
    startAt(...t) {
        try {
            return new th(this.firestore, _a(this._delegate, function(...t) {
                return new pa("startAt", t, /*before=*/ !0);
            }(...t)));
        } catch (t) {
            throw Ha(t, "startAt()", "Query.startAt()");
        }
    }
    startAfter(...t) {
        try {
            return new th(this.firestore, _a(this._delegate, function(...t) {
                return new pa("startAfter", t, 
                /*before=*/ !1);
            }(...t)));
        } catch (t) {
            throw Ha(t, "startAfter()", "Query.startAfter()");
        }
    }
    endBefore(...t) {
        try {
            return new th(this.firestore, _a(this._delegate, function(...t) {
                return new Ea("endBefore", t, /*before=*/ !0);
            }(...t)));
        } catch (t) {
            throw Ha(t, "endBefore()", "Query.endBefore()");
        }
    }
    endAt(...t) {
        try {
            return new th(this.firestore, _a(this._delegate, function(...t) {
                return new Ea("endAt", t, /*before=*/ !1);
            }(...t)));
        } catch (t) {
            throw Ha(t, "endAt()", "Query.endAt()");
        }
    }
    isEqual(t) {
        return mu(this._delegate, t._delegate);
    }
    get(t) {
        let e;
        return e = "cache" === (null == t ? void 0 : t.source) ? 
        /**
 * Executes the query and returns the results as a `QuerySnapshot` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise that will be resolved with the results of the query.
 */
        function(t) {
            t = ru(t, hu);
            const e = ru(t.firestore, Tu), n = Iu(e), s = new Da(e);
            return Mc(n, t._query).then((n => new ha(e, s, t, n)));
        }
        /**
 * Executes the query and returns the results as a `QuerySnapshot` from the
 * server. Returns an error if the network is not available.
 *
 * @returns A Promise that will be resolved with the results of the query.
 */ (this._delegate) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = ru(t, hu);
            const e = ru(t.firestore, Tu), n = Iu(e), s = new Da(e);
            return Lc(n, t._query, {
                source: "server"
            }).then((n => new ha(e, s, t, n)));
        }(this._delegate) : function(t) {
            t = ru(t, hu);
            const e = ru(t.firestore, Tu), n = Iu(e), s = new Da(e);
            return da(t._query), Lc(n, t._query).then((n => new ha(e, s, t, n)));
        }(this._delegate), e.then((t => new nh(this.firestore, new ha(this.firestore._delegate, this._userDataWriter, this._delegate, t._snapshot))));
    }
    onSnapshot(...t) {
        const e = Ja(t), n = Ya(t, (t => new nh(this.firestore, new ha(this.firestore._delegate, this._userDataWriter, this._delegate, t._snapshot))));
        return Na(this._delegate, e, n);
    }
    withConverter(t) {
        return new th(this.firestore, t ? this._delegate.withConverter(Ga.nu(this.firestore, t)) : this._delegate.withConverter(null));
    }
}

class eh {
    constructor(t, e) {
        this._firestore = t, this._delegate = e;
    }
    get type() {
        return this._delegate.type;
    }
    get doc() {
        return new Za(this._firestore, this._delegate.doc);
    }
    get oldIndex() {
        return this._delegate.oldIndex;
    }
    get newIndex() {
        return this._delegate.newIndex;
    }
}

class nh {
    constructor(t, e) {
        this._firestore = t, this._delegate = e;
    }
    get query() {
        return new th(this._firestore, this._delegate.query);
    }
    get metadata() {
        return this._delegate.metadata;
    }
    get size() {
        return this._delegate.size;
    }
    get empty() {
        return this._delegate.empty;
    }
    get docs() {
        return this._delegate.docs.map((t => new Za(this._firestore, t)));
    }
    docChanges(t) {
        return this._delegate.docChanges(t).map((t => new eh(this._firestore, t)));
    }
    forEach(t, e) {
        this._delegate.forEach((n => {
            t.call(e, new Za(this._firestore, n));
        }));
    }
    isEqual(t) {
        return fa(this._delegate, t._delegate);
    }
}

class sh extends th {
    constructor(t, e) {
        super(t, e), this.firestore = t, this._delegate = e;
    }
    get id() {
        return this._delegate.id;
    }
    get path() {
        return this._delegate.path;
    }
    get parent() {
        const t = this._delegate.parent;
        return t ? new za(this.firestore, t) : null;
    }
    doc(t) {
        try {
            return new za(this.firestore, void 0 === t ? wu(this._delegate) : wu(this._delegate, t));
        } catch (t) {
            throw Ha(t, "doc()", "CollectionReference.doc()");
        }
    }
    add(t) {
        return function(t, e) {
            const n = ru(t.firestore, Tu), s = wu(t), i = va(t.converter, e);
            return xa(n, [ Lu(Mu(t.firestore), "addDoc", s._key, i, null !== t.converter, {}).toMutation(s._key, ve.exists(!1)) ]).then((() => s));
        }(this._delegate, t).then((t => new za(this.firestore, t)));
    }
    isEqual(t) {
        return _u(this._delegate, t._delegate);
    }
    withConverter(t) {
        return new sh(this.firestore, t ? this._delegate.withConverter(Ga.nu(this.firestore, t)) : this._delegate.withConverter(null));
    }
}

function ih(t) {
    return ru(t, au);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a list
 * of field names (referring to a nested field in the document).
 */ class rh {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t) {
        this._delegate = new Vu(...t);
    }
    static documentId() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new rh(W.keyField().canonicalString());
    }
    isEqual(t) {
        return (t = getModularInstance(t)) instanceof Vu && this._delegate._internalPath.isEqual(t._internalPath);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oh {
    constructor(t) {
        this._delegate = t;
    }
    static serverTimestamp() {
        const t = new Uu("serverTimestamp");
        return t._methodName = "FieldValue.serverTimestamp", new oh(t);
    }
    static delete() {
        const t = new Bu("deleteField");
        return t._methodName = "FieldValue.delete", new oh(t);
    }
    static arrayUnion(...t) {
        const e = 
        /**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */
        function(...t) {
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
            return new Ku("arrayUnion", t);
        }
        /**
 * Returns a special value that can be used with {@link (setDoc:1)} or {@link
 * updateDoc:1} that tells the server to remove the given elements from any
 * array value that already exists on the server. All instances of each element
 * specified will be removed from the array. If the field being modified is not
 * already an array it will be overwritten with an empty array.
 *
 * @param elements - The elements to remove from the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ (...t);
        return e._methodName = "FieldValue.arrayUnion", new oh(e);
    }
    static arrayRemove(...t) {
        const e = function(...t) {
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
            return new Qu("arrayRemove", t);
        }
        /**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to increment the field's current value by
 * the given value.
 *
 * If either the operand or the current field value uses floating point
 * precision, all arithmetic follows IEEE 754 semantics. If both values are
 * integers, values outside of JavaScript's safe number range
 * (`Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`) are also subject to
 * precision loss. Furthermore, once processed by the Firestore backend, all
 * integer operations are capped between -2^63 and 2^63-1.
 *
 * If the current field value is not of type `number`, or if the field does not
 * yet exist, the transformation sets the field to the given value.
 *
 * @param n - The value to increment by.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ (...t);
        return e._methodName = "FieldValue.arrayRemove", new oh(e);
    }
    static increment(t) {
        const e = function(t) {
            return new ju("increment", t);
        }(t);
        return e._methodName = "FieldValue.increment", new oh(e);
    }
    isEqual(t) {
        return this._delegate.isEqual(t._delegate);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ch(t) {
    /**
 * Loads a Firestore bundle into the local cache.
 *
 * @param firestore - The `Firestore` instance to load bundles for for.
 * @param bundleData - An object representing the bundle to be loaded. Valid objects are
 *   `ArrayBuffer`, `ReadableStream<Uint8Array>` or `string`.
 *
 * @returns
 *   A `LoadBundleTask` object, which notifies callers with progress updates, and completion
 *   or error events. It can be used as a `Promise<LoadBundleTaskProgress>`.
 */
    return function(t, e) {
        const n = Iu(t = ru(t, Tu)), s = new pu;
        return Uc(n, t._databaseId, e, s), s;
    }
    /**
 * Reads a Firestore `Query` from local cache, identified by the given name.
 *
 * The named queries are packaged  into bundles on the server side (along
 * with resulting documents), and loaded to local cache using `loadBundle`. Once in local
 * cache, use this method to extract a `Query` by name.
 */ (this._delegate, t);
}

function uh(t) {
    return (e = this._delegate, n = t, Kc(Iu(e = ru(e, Tu)), n).then((t => t ? new hu(e, null, t.query) : null))).then((t => t ? new th(this, t) : null));
    var e, n;
}

export { Ba as B, Cu as C, Eu as E, M, Qa as Q, Tu as T, Ua as U, Wa as W, Xa as X, Za as Z, Ma as a, ch as c, ja as j, nh as n, oh as o, rh as r, sh as s, th as t, uh as u, za as z };
//# sourceMappingURL=prebuilt-5d8cd97c.js.map